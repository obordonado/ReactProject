import React from 'react';
import "./Login.css"

function Login() {
  return (
    <div>
      <form className='form'>
        <div className="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3"></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Contraseña
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
            ></input>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
             
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;