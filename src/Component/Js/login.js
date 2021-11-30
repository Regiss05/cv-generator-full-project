import React, { Component } from 'react';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Js/navbar';

export default class login extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <Navbar />
                        <div className="col-10 form1 position-relative">
                            <div className="row pos-ab form-all">
                                <div className="col-10 center bgc-c1 form-lg">
                                </div>
                                <div className="col-2 center bgc-c2 form-lg2">
                                    <h1>Se connecter</h1>
                                    <div class="form-floating mb-3 text-form-control psc-between">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label className="text-label-mod" for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating text-form-control">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword" className="text-label-mod">Password</label>
                                    </div>
                                    <span>mot de passe oublier</span>
                                    <button type="button" class="text-footer1">Creer un compte</button>
                                </div>
                                
                            </div>
                            
                            <div className="footer-text">Creez votre cv et postuler avec le lien</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
