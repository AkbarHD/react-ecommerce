import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import ProductImg from '../assets/images/eight.jpg'

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
  }

  return (
    <Layout>
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb " className="py-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to="/checkout">Checkout</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <h3 className="border-bottom pb-3">
              <strong>Billing Details</strong>
            </h3>
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Address"
                    rows={3}
                  ></textarea>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="State"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Phone"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-5">
            <h3 className="border-bottom pb-3">Items</h3>

            <table className="table">
              <tbody>
                <tr>
                  <td width={100}>
                    <img src={ProductImg} width={80} alt="" />
                  </td>
                  <td width={600}>
                    <h4>Dummy Product title</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>Rp. 85.000</span>
                      <div className="ps-3">
                        <button className="btn btn-size">S</button>
                      </div>
                      <div className="ps-3">X 1</div>
                    </div>
                  </td>
                  <td valign="middle">
                    <input
                      style={{ width: '100px' }}
                      type="number"
                      value={1}
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td width={100}>
                    <img src={ProductImg} width={80} alt="" />
                  </td>
                  <td width={600}>
                    <h4>Dummy Product title</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>Rp. 85.000</span>
                      <div className="ps-3">
                        <button className="btn btn-size">S</button>
                      </div>
                      <div className="ps-3">X 1</div>
                    </div>
                  </td>
                  <td valign="middle">
                    <input
                      style={{ width: '100px' }}
                      type="number"
                      value={1}
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="row ">
              <div className="col-md-12">
                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>SubTotal</div>
                  <div>Rp. 85.000</div>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>Shipping</div>
                  <div>Rp. 10.000</div>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <div>Grand Total</div>
                  <div>Rp. 95.000</div>
                </div>
                <div className="d-flex justify-content-end pt-4">
                  <button className="btn btn-primary">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>

            <h3 className="border-bottom pt-4 pb-3">Payment Method</h3>
            <div className='pt-3'>
              <input
                type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod == 'stripe'}
                value={'stripe'}
                id=""   
              />
                <label htmlFor="" className="form-label ps-2">
                Stripe
              </label>

              <input
                type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod == 'cod'}
                value={'cod'} className='ms-3'
                id=""
              />
              <label htmlFor="" className="form-label ps-2">
                COD
              </label>
            </div>

            <div className='d-flex justify-content-end py-3'>
                    <button className='btn btn-primary'>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
