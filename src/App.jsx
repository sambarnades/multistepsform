import { useState } from 'react'
import './App.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

function App() {

  return (
    <>
      <main className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='row'>
              <div className='col-lg-3'> {/* Number */}

              </div>
              <div className='col-lg-9'> {/* Steps */}

              </div>

            </div>
          </div>
          <div className='card col-lg-9'>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form>
              <label className='form-label' for="name">Name</label>
              <input className='form-control' type='text' placeholder='e.g. Stephen King' />
              <label className='form-label' for="email">Email Adress</label>
              <input className='form-control' type='email' placeholder='e.g. stephenking@lorem.com' />
              <label className='form-label' for="phone">Phone</label>
              <input className='form-control' type='phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='e.g. +1 123 567 890' />
            </form>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-primary'>Next step</button>
        </div>
      </main>
    </>
  )
}

export default App
