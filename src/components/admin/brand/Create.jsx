import React from 'react'
import Layout from '../../common/Layout'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { adminToken, apiUrl } from '../../common/http'
import { toast } from 'react-toastify'

const Create = () => {
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const saveBrand = async (data) => {
    setDisabled(true)
    console.log(data)

    const res = await fetch(`${apiUrl}/brands`, {
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
          navigate('/admin/brands')
        } else {
          toast.error(result.message)
          console.log('something went wrong')
        }
      })
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className="h4 pb-0 mb-0">Create Brands</h4>
            <Link to="/admin/brands" className="btn btn-primary">
              Back
            </Link>
          </div>

          <div className="col-md-3 mb-5">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <form onSubmit={handleSubmit(saveBrand)}>
              <div className="card shadow">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Name
                    </label>
                    <input
                      {...register('name', {
                        // akan di handle sama ini utk namenya
                        required: 'The name field is required',
                        minLength: {
                          value: 3,
                          message: 'The name must be at least 3 characters',
                        },
                      })}
                      type="text"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="text-danger">
                        {errors.name?.message}
                      </span>
                    )}
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
