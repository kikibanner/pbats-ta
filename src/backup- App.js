import React, { useState } from 'react'
import axios from 'axios'

function App() {
  
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(`${firstname} ${lastname}`)

    setFirstName('')
    setLastName('')

  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                Formuleer
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="firstname" className='form-label'>First Name</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} name='firstname' id='firstname' className='form-control' />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="lastname" className='form-label'>Last Name</label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}name='lastname' id='lastname' className='form-control' />
                  </div>
                  <button className="btn btn-primary col-12">Submit</button>
                </form>
              </div>
              <div className="card-footer">
                Your name is { name ? name : '...' }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App