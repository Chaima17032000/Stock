import React from 'react'
import './Login.css'
function Login() {
  return (
	<div>

<div class="login-box">
	
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login 
    </a>
  </form>
</div>


	</div>
  )
}

export default Login