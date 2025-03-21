import React from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <Layout>
        <div className="container">
            <div className='row'>
          <div className="col-md-12">
          <nav aria-label="breadcrumb " className='py-4'>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to="/shop">Cart</Link>
                </li>
              </ol>
            </nav>
          </div>

          <div className='col-md-12'>
                <h2 className='border-bottom pb-3'>Cart</h2>
          
                <table className='table'>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                </table>
          </div>
            
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Cart
