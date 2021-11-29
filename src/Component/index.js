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
                    <div className="col-10 position-relative">
                        <div className="body-center body-pos position-absolute posform">
                            <div className="title2 weltitle tit-font">BIENVENUE A</div>
                            <div className="bg-title"><h1>KAZI.COM</h1></div>
                            <div className="title3 infotext tit-font">Nous vous connectons avec les entreprises</div>
                            <button type="button" class="text-footer">Creer un compte</button>
                        </div>
                        <div className="footer-text">Creez votre cv et postuler avec le lien</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default index;
