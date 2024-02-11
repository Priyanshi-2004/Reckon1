import React from 'react'
import Header from '../Common/Header'

export default function () {
  return (
    <div>
        <Header/>
        {/* --------------------------------SignUp Starts----------------------- */}
<div class="container">
		<h2>Registration Form</h2>
	<form action="bootstrapform.php" method="post">
		<div class="form-group">
    <label for="firstname">First Name</label>
    <input type="text" class="form-control" id="exampleInputfirstname" name="firstname"/>
  </div>
  <div class="form-group">
    <label for="lastname">Last Name</label>
    <input type="text" class="form-control" id="exampleInputlastname" name="lastname"/>
  </div>
  <div class="form-group">
    <label for="phoneno">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputphoneno" name="phoneno"/>
  </div>
  <div class="form-group">
    <label for="Email1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword" name="password"/>
  </div>
  <button type="submit" class="btn btn-primary" name="create">Sign up</button>
</form>
</div>
{/* --------------------------------SignUp Ends------------------------------------------------ */}
    </div>
  )
}
