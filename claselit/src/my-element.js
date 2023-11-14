import { LitElement, html } from 'lit-element';
import styleScc from "../src/my-element-style";

export class MyElement extends LitElement {

    static get styles(){
      return [styleScc];
    }

    render() {
      return html`

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    

              <div class="container-fluid">
                  <div class="row">
                      <div clas="col-sm-1"></div>
                      <div clas="col-sm-1"></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-4">
                          
                      </div>
                      <div class="col-sm-4">
      
                          <div class="card login">
                              <div class="card-header header">
                                  <div class="text-center">
                                      <h3><b>PUMAS DC.</b></h3>
                                  </div>
                              </div>
                              
                              <form class="card-login">
      
                                  <br>
      
                                  <div class="input-group mb-3">
                                      <input type="text" class="form-control input" name="username" placeholder="Usuario" required>
                                  </div>
                                  <br>
                                  <div class="input-group mb-3">
                                      <input type="text" class="form-control input" name="password" placeholder="Password" required>
                                  </div>
                                  <br>
                                  <br>
                                  <div class="text-center">
                                      <button class="btn-login"><a href="menu.html">INGRESAR</a></button>
                                  </div>
                                  <br>
                                  <div class="d-grid gap-2 text-center">
                                      <u style="color:black"><b>Olvido su contraseña?</b></u>
                                  </div>
                                  <br>
                              </form>
                          </div>
                      </div>
      
                  </div>
              </div>
      
      `;
    }
  }

customElements.define('my-element', MyElement);