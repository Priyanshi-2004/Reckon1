import React from 'react'
import Header from '../Common/Header'

export default function Login() {
  return (
    <div>
        <Header/>
        {/* ---------------------------------------------------Form starts-------------------------------------- */}
<div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="card shadow">
          <div class="card-title text-center border-bottom">
            <h2 class="p-3">Login</h2>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-4">
                <label for="username" class="form-label">Username/Email</label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="mb-4">
                <input type="checkbox" class="form-check-input" id="remember" />
                <label for="remember" class="form-label">Remember Me</label>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn text-light bg-danger">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* --------------------------------------------------Form Ends---------------------------------------------------- */}
    </div>
  )
}
