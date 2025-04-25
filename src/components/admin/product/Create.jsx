import React, { useEffect, useState, useRef, useMemo } from 'react'
import Layout from '../../common/Layout'
import Sidebar from '../../common/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { adminToken, apiUrl } from '../../common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react'

const Create = ({ placeholder }) => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const navigate = useNavigate()

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || 'Start typings...',
    }),
    [placeholder],
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const saveProduct = async (data) => {
    setDisabled(true)
    console.log(data)

    const res = await fetch(`${apiUrl}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${adminToken()}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setDisabled(false)
        if (result.status === 200) {
          toast.success(result.message)
          navigate('/admin/products')
        } else {
          toast.error(result.message)
          console.log('something went wrong')
        }
      })
  }

  const fetchCategories = async () => {
    // Fetch categories from the API
    fetch(`${apiUrl}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${adminToken()}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          // Handle successful response
          setCategories(result.data)
        } else {
          console.log('something went wrong')
        }
      })
  }

  const fetchBrands = async () => {
    // Fetch brands from the API
    fetch(`${apiUrl}/brands`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${adminToken()}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          // Handle successful response
          setBrands(result.data)
        } else {
          console.log('something went wrong')
        }
      })
  }

  useEffect(() => {
    fetchCategories()
    fetchBrands()
  }, [])
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className="h4 pb-0 mb-0">Create Product</h4>
            <Link to="/admin/products" className="btn btn-primary">
              Back
            </Link>
          </div>

          <div className="col-md-3 mb-5">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <form onSubmit={handleSubmit(saveProduct)}>
              <div className="card shadow">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Title
                    </label>
                    <input
                      {...register('title', {
                        // akan di handle sama ini utk namenya
                        required: 'The title field is required',
                        minLength: {
                          value: 3,
                          message: 'The title must be at least 3 characters',
                        },
                      })}
                      type="text"
                      className={`form-control ${errors.title && 'is-invalid'}`}
                      placeholder="Title"
                    />
                    {errors.title && (
                      <span className="text-danger">
                        {errors.title?.message}
                      </span>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                          {...register('category', {
                            // akan di handle sama ini utk namenya
                            required: 'The category field is required',
                          })}
                          className={`form-select ${
                            errors.category && 'is-invalid'
                          }`}
                        >
                          <option value="" hidden>
                            Select a category
                          </option>
                          {categories &&
                            categories.map((category) => {
                              return (
                                <option
                                  key={`category-${category.id}`}
                                  value={category.id}
                                >
                                  {category.name}
                                </option>
                              )
                            })}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Brand</label>
                        <select className="form-select">
                          <option value="" hidden>
                            Select a brand
                          </option>
                          {brands &&
                            brands.map((brand) => {
                              return (
                                <option
                                  key={`brand-${brand.id}`}
                                  value={brand.id}
                                >
                                  {brand.name}
                                </option>
                              )
                            })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Short Description
                    </label>
                    <textarea
                      {...register('short_description', {
                        // akan di handle sama ini utk namenya
                        required: 'The short description field is required',
                      })}
                      rows={3}
                      placeholder="Short Description"
                      className={`form-control ${
                        errors.short_description && 'is-invalid'
                      }`}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Description
                    </label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Status
                    </label>
                    <select
                      {...register('status', {
                        // akan di handle sama ini utk namenya
                        required: 'The name field is required',
                      })}
                      className={`form-select ${errors.status && 'is-invalid'}`}
                    >
                      <option value="">Select a status</option>
                      <option value="1">Active</option>
                      <option value="0">Block</option>
                    </select>
                    {errors.status && (
                      <span className="text-danger">
                        {errors.status?.message}
                      </span>
                    )}
                  </div>
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create
