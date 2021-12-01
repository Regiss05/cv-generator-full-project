import React, { Component } from 'react';
import Navbar from '../Js/navbar';
import SFooter from '../Js/simpleFooter';

export default class form1 extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                   <Navbar />
                    <div className="col-10 position-relative">
                        <div className="body-center body-pos position-absolute posform">
                            <div className="title2 weltitle tit-font">BIENVENUE A</div>
                            <div className="bg-title"><h1>KAZI<span>.COM</span></h1></div>
                            <div className="title3 infotext tit-font">Nous vous connectons avec les entreprises</div>
                            <button type="button" class="text-footer">Creer un compte</button>
                        </div>
                        <SFooter />
                    </div>
                </div>
            </div>
        )
    }
}
