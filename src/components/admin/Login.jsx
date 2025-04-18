import React, { useContext, useEffect } from 'react';
import Layout from '../common/Layout'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../common/http'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AdminAuthContext } from '../context/AdminAuth'

const Login = () => {
  const { login, user } = useContext(AdminAuthContext);
    // utk redirect
    const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/admin/dashboard')
    }
  }, [user, navigate])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    const res = await fetch(`${apiUrl}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)

        if (result.status === 200) {
          const adminInfo = {
            token: result.token,
            id: result.id,
            name: result.name,
          }

          localStorage.setItem('adminInfo', JSON.stringify(adminInfo))

          //  tambahkan ini agar bisa masuk ke dashboard, karena kita mnggnkn pencegahan di app.jsx   <AdminRequireAuth>
          login(adminInfo) // login dpt dari AdminAuthContext

          navigate('/admin/dashboard')
        } else {
          toast.error(result.message)
        }
      })
  }

  return (
    <div>
      <Layout>
        <div className="container d-flex justify-content-center py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card shadow border-0 login">
              <div className="card-body p-4">
                <h3>Admin Login</h3>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input
                    // di dlm input
                    {...register('email', { // akan di handle sama ini utk namenya
                      required: 'The email field is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="text"
                    className={`form-control ${errors.email && 'is-invalid'}`}
                    placeholder="email"
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email?.message}</span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>
                  <input
                    // di dlm input
                    {...register('password', { // akan di handle sama ini utk namenya
                      required: 'The password field is required',
                    })}
                    type="password"
                    className={`form-control ${
                      errors.password && 'is-invalid'
                    }`}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password?.message}
                    </span>
                  )}
                </div>

                <button className="btn btn-secondary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}

export default Login
