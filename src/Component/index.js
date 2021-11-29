import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Component/CSS/main.css';

class index extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-2 nav-side">
                        <div className="nive-side-inside"></div>
                    </div>
                    <div className="col-10">
                    <div className="body-center body-pos">
                        <div className="">BIENVENUE A </div>
                        <div className="">KAZI.COM</div>
                        <div className="">Nous vous connectons avec les entreprises</div>
                        <button type="button" class="btn btn-outline-primary ct-6 btn-lg">Creer un compte</button>
                    </div>
                    <div className="footer body-center">Creez votre cv et postuler avec le lien</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default index;
