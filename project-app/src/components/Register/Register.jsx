import React from 'react';
import "./Register.css"

function Register() {
  return (
    <div className="register">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4"></input>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
          ></input>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Calle Mayor"
          ></input>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartmento, studio, o piso"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Ciudad
          </label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Provincia
          </label>
          <select id="inputState" class="form-select">
            <option selected>Elige...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Código postal
          </label>
          <input type="text" class="form-control" id="inputZip"></input>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label class="form-check-label" for="gridCheck">
              De acuerdo con ...
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Registro
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;