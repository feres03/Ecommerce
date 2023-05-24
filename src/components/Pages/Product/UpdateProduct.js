import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Product from '../../services/Product';
import Select from 'react-select';
import Category from '../../services/Category';

function Updateproduct() {
    const [product, setProduct] = useState()
    const [image, setImage] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const navigate = useNavigate()
    const params = useParams()
    const onFileSelect = (e) => {
        setImage(e.target.files[0])
    };
    const handleChangeCategories = (e) => {
        setSelectedOptions(e)
    }
    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await Category.ListCategoryForProduct()
            setOptions(categories.data)
        }
        fetchCategories()
    }, [])
    useEffect(() => {
        const fetch = async () => {
            const response = await Product.getProductById(params.id)
            setProduct(response.data)
            let optionsSelected = []
            await Promise.all(response.data.category.map(async cat => {
                const res = await Category.getCategoryById(cat)

                return optionsSelected.push({ label: res.data.name, value: res.data._id })
            }))
            setSelectedOptions(optionsSelected)
        }
        fetch()
    }, [params.id])

    return (
        <div className='container mt-5'>
            <h3 className='text-center text-success'>Update Category</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={product || { name: '', disponibility: '', brand: '', description: '', quantity: '', price: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Ce champs est obligatoire."
                        }
                        if (!values.disponibility) {
                            errors.disponibility = 'Ce champs est obligatoire.'
                        }
                        if (!values.brand) {
                            errors.brand = 'Ce champs est obligatoire.'
                        }
                        if (!values.description) {
                            errors.description = 'Ce champs est obligatoire.'
                        }
                        if (!values.quantity) {
                            errors.quantity = 'Ce champs est obligatoire.'
                        }
                        else if (values.quantity <= 0) {
                            errors.quantity = 'La quantité doit etre positive'
                        }
                        if (!values.price) {
                            errors.price = 'Ce champs est obligatoire.'
                        }
                        else if (values.price <= 0) {
                            errors.price = 'Le prix doit etre positif'
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            let opt = []
                            selectedOptions.map((e) => {
                                return opt.push(e.value)
                            })
                            let formData = new FormData();
                            formData.append('name', values.name);
                            formData.append('disponibility', values.disponibility);
                            formData.append('brand', values.brand);
                            formData.append('description', values.description);
                            formData.append('category', opt);
                            formData.append('quantity', values.quantity);
                            formData.append('price', values.price);
                            formData.append('Image', image, image.name);
                            const response = await Product.updateProduct(params.id, formData)
                            navigate('/products')
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
                                    value={values.name} />
                            </div>
                            {errors.name && touched.name && <div className="alert alert-danger" role="alert">{errors.name} </div>}
                            <div className="mb-3">
                                <input type="text" className="form-control"
                                    placeholder='Disponibility'
                                    name="disponibility"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.disponibility} />
                            </div>
                            {errors.disponibility && touched.disponibility && <div className="alert alert-danger" role="alert">{errors.disponibility} </div>}
                            <div className="mb-3">
                                <input type="text" className="form-control"
                                    placeholder='Brand'
                                    name="brand"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.brand} id="brand" />
                            </div>
                            {errors.brand && touched.brand && <div className="alert alert-danger" role="alert">{errors.brand} </div>}

                            <div className="mb-3">
                                <textarea type="text" className="form-control"
                                    placeholder='Description'
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description} id="description" />
                            </div>
                            {errors.description && touched.description && <div className="alert alert-danger" role="alert">{errors.description} </div>}

                            <div className="mb-3">
                                <input className="form-control"
                                    onChange={onFileSelect}
                                    type="file" />
                            </div>
                            <Select className='mb-3'
                                onChange={handleChangeCategories}
                                placeholder='Category'
                                onBlur={handleBlur}
                                value={selectedOptions}
                                options={options}
                                isMulti
                            />


                            <div className="mb-3">
                                <input type="number" className="form-control"
                                    placeholder='Quantity'
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.quantity} id="quantity" />
                            </div>
                            {errors.quantity && touched.quantity && <div className="alert alert-danger" role="alert">{errors.quantity} </div>}



                            <div className="mb-3">

                                <input type="number" className="form-control" placeholder="Price /Dt"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price} id="price" />
                            </div>
                            {errors.price && touched.price && <div className="alert alert-danger" role="alert">{errors.price} </div>}




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