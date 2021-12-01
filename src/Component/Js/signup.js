import React, { Component } from 'react';
import Navbar from '../Js/navbar';
import SFooter from '../Js/simpleFooter';
import 'bootstrap/dist/js/bootstrap'


export default class SingUp extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <Navbar />
                    <div className="col-10 form1 position-relative">

                        <div className="row pos-ab form-all">
                            <h1>Creer un compte</h1>
                            <div className="col-6 center bgc-c3 form-lg">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle btn-marg" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Choisissez votre Pays
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                        <li><a class="dropdown-item active" href="#">Congo RDC</a></li>
                                        <li><a class="dropdown-item" href="#">Rwanda</a></li>
                                        <li><a class="dropdown-item" href="#">Burundi</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Autres</a></li>
                                    </ul>
                                </div>
                                <div class="form-floating mb-3 text-form-control psc-between2">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className="text-label-mod" for="floatingInput">Nom Complet</label>
                                </div>
                                <div class="form-floating mb-3 text-form-control psc-between2">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className="text-label-mod" for="floatingInput">mail</label>
                                </div>
                                <div class="form-floating mb-3 text-form-control psc-between2">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className="text-label-mod" for="floatingInput">Adresse</label>
                                </div>
                                <div class="form-floating mb-3 text-form-control psc-between2">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className="text-label-mod" for="floatingInput">Numero de telephone</label>
                                </div>
                                <div class="form-floating mb-3 text-form-control psc-between2">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className="text-label-mod" for="floatingInput">Numero ID</label>
                                </div>
                                <div className="gen-check row ">

                                    <div class="form-check col-3">
                                        <input class="form-check-input mal-check " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Homme
                                        </label>
                                    </div>
                                    <div class="form-check col-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Femme
                                        </label>
                                    </div>
                                </div>


                            </div>
                            <div className="col-6 center bgc-c2 form-lg2">
                                <div class="form-floating text-form-control">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword" className="text-label-mod">Mot de passe</label>
                                </div>

                                <div class="form-floating text-form-control">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword" className="text-label-mod">Confirmation de mot de passe</label>
                                </div>
                                <button type="button" class="text-footer1">Creer un compte</button>
                            </div>

                        </div>
                        <SFooter />
                    </div>
                </div>
            </div>
        )
    }
}
