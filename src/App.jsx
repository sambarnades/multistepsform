import { useState } from 'react'
import './App.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

function App() {

  return (
    <>
      <main className='container'>
        <div className='card border-0 mt-5'>
          <div className='row p-3'> {/* Wrapper of banner & form*/}
            <div className='card sidebar col border-0 d-none d-lg-block'>
              <div className='row p-2'>
                <div className='col-lg-3'> {/* Number */}
                  <div className='rounded-circle bg-light mt-3 ratio ratio-1x1'> {/* BACK THERE */}
                    <p className='text-center'>1</p>
                  </div>
                </div>
                <div className='col-lg-9'> {/* Steps */}
                <p className='mt-3 text-light'>STEP 1<br/>
                YOUR INFO</p>
                </div>

              </div>
            </div>
            <div className='card border-0 col-lg-9 pt-5'>
              <div className='mx-auto'>
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <form>
                  <label className='form-label' for="name">Name</label>
                  <input className='form-control' type='text' placeholder='e.g. Stephen King' required="required" />
                  <label className='form-label' for="email">Email Adress</label>
                  <input className='form-control' type='email' placeholder='e.g. stephenking@lorem.com' required="required" />
                  <label className='form-label' for="phone">Phone</label>
                  <input className='form-control' type='phone' required="required" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='e.g. +1 123 567 890' />
                </form>
                <button className='float-end btn btn-primary mt-3'>Next step</button>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
