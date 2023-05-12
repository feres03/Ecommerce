import { Formik } from 'formik';
import React from 'react'
import Category from '../../services/Category';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CreateCategory = () => {
  const navigate = useNavigate();
  return (
    <div className='container mt-5'>
      <h3 className='text-center text-secondary'>Add Category</h3>
      <div className="row  d-flex justify-content-center">
        <Formik
          initialValues={{ name: '', description: '' }}
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
              const response = await Category.addCategory(values)
              console.log(response)
              toast.success(response.data.message)
              navigate('/categories')
            } catch (error) {
              console.log(error)
              toast.error(error.response.data.message)
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */

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


export default CreateCategory