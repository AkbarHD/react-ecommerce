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
    setError,
    formState: { errors },
  } = useForm()

  const saveProduct = async (data) => {
    // console.log(data)
    const formData = { ...data, description: content } // ambil data dari form dan editor
    // console.log(formData)
    // return
    setDisabled(true)
    const res = await fetch(`${apiUrl}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${adminToken()}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setDisabled(false)
        if (result.status === 200) {
          toast.success(result.message)
          navigate('/admin/products')
        } else {
          // toast.error(result.message)
          // console.log('something went wrong')
          const formErrors = result.errors // agar bisa melihat error di network
          Object.keys(formErrors).forEach((field) => {
            setError(field, { message: formErrors[field][0] })
          })
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

          <div className="col-md-9 mb-5">
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
                          {...register('category_id', {
                            // akan di handle sama ini utk namenya
                            required: 'The category field is required',
                          })}
                          className={`form-select ${
                            errors.category_id && 'is-invalid'
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

                        {errors.category_id && (
                          <span className="text-danger">
                            {errors.category_id?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Brand</label>
                        <select
                          {...register('brand_id', {
                            // akan di handle sama ini utk namenya
                            required: 'The brand field is required',
                          })}
                          className={`form-control ${
                            errors.brand_id && 'is-invalid'
                          }`}
                        >
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
                        {errors.brand_id && (
                          <span className="text-danger">
                            {errors.brand_id?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Short Description{' '}
                    </label>
                    <textarea
                      rows={3}
                      {...register('short_description')}
                      placeholder="Short Description"
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Description
                    </label>
                    <JoditEditor
                      {...register('description')}
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    />
                  </div>

                  <h3 className="py-3 border-bottom mb-3">Pricing</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Price
                        </label>
                        <input
                          type="text"
                          placeholder="Price"
                          {...register('price', {
                            // akan di handle sama ini utk namenya
                            required: 'The price field is required',
                          })}
                          className={`form-control ${
                            errors.price && 'is-invalid'
                          }`}
                        />
                        {errors.price && (
                          <span className="text-danger">
                            {errors.price?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Discounted Price
                        </label>
                        <input
                          type="text"
                          placeholder="Discounted Price"
                          className="form-control" 
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="py-3 border-bottom mb-3">Inventory</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          SKU
                        </label>
                        <input
                          type="text"
                          placeholder="SKU"
                          {...register('sku', {
                            // akan di handle sama ini utk namenya
                            required: 'The sku field is required',
                          })}
                          className={`form-control ${
                            errors.sku && 'is-invalid'
                          }`}
                        />

                        {errors.sku && (
                          <span className="text-danger">
                            {errors.sku?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          BARCODE
                        </label>
                        <input
                          type="text"
                          placeholder="BARCODE"
                          {...register('barcode', {
                            // akan di handle sama ini utk namenya
                            required: 'The barcode field is required',
                          })}
                          className={`form-control ${
                            errors.barcode && 'is-invalid'
                          }`}
                        />

                        {errors.barcode && (
                          <span className="text-danger">
                            {errors.barcode?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          QTY
                        </label>
                        <input
                          type="text"
                          placeholder="QTY"
                          {...register('qty', {
                            // akan di handle sama ini utk namenya
                            required: 'The qty field is required',
                          })}
                          className={`form-control ${
                            errors.qty && 'is-invalid'
                          }`}
                        />

                        {errors.qty && (
                          <span className="text-danger">
                            {errors.qty?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Status
                        </label>
                        <select
                          {...register('status', {
                            // akan di handle sama ini utk namenya
                            required: 'The status field is required',
                          })}
                          className={`form-select ${
                            errors.status && 'is-invalid'
                          }`}
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
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Featured
                    </label>
                    <select
                      {...register('is_featured')}
                      className={`form-select ${
                        errors.featured && 'is-invalid'
                      }`}
                    >
                      <option value="" hidden>
                        Select a featured
                      </option>
                      <option value="1">yes</option>
                      <option value="0">no</option>
                    </select>
                  </div>

                  <h3 className="py-3 border-bottom mb-3">Galery</h3>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      {...register('gallery')}
                      className="form-control"
                    />
                  </div>
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn btn-primary mt-3 "
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
