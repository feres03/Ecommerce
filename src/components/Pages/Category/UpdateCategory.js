import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom'
import Category from '../../services/Category';
import { toast } from 'react-toastify';

function Updateproduct() {
    const [category, setCategory] = useState()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const fetch = async () => {
            const response = await Category.getCategoryById(params.id)
            setCategory(response.data)
        }
        fetch()
    }, [params.id])

    return (
        <div className='container mt-5'>
            <h3 className='text-center text-success'>Update Category</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={category || { name: '', description: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Ce champs est obligatoire."
                        }
                        if (!values.description) {
                            errors.description = 'Ce champs est obligatoire.'
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const response = await Category.updateCategory(params.id, values)
                            navigate('/categories')
                            toast.success(response.data.message)
                        } catch (error) {
                            toast.error(error.response.data.message)

                        }
                    }}
                    enableReinitialize
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className='col-6' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    name="name"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            {errors.name && touched.name && <div className="alert alert-danger" role="alert">{errors.name} </div>}


                            <div className="mb-3">
                                <textarea type="text" className="form-control"
                                    placeholder='Description'
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description} />
                            </div>
                            {errors.description && touched.description && <div className="alert alert-danger" role="alert">{errors.description} </div>}


                            <button className="btn btn-secondary w-100" type="submit" >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default Updateproduct