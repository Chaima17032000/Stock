import React from 'react'

function Reagister() {
  return (
    <div>
       <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-primary">Register</button>
      
    </div>
  )
}

export default Reagister