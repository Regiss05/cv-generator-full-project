import React, { Component } from 'react';

export default class form1 extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-2 nav-side">
                        <div className="nive-side-inside">
                            <nav id="navbar-example3" class="navbar navbar-light flex-column align-items-stretch p-3">
                                <a class="navbar-brand nav-text-color" href="#"><h1>HOME</h1></a>
                                <nav class="nav nav-pills flex-column">
                                    <a class="nav-link nav-text-color" href="#item-1">Item 1</a>
                                    <nav class="nav nav-pills flex-column">
                                        <a class="nav-link ms-3 my-1 nav-text-color" href="#item-1-1">Item 1-1</a>
                                        <a class="nav-link ms-3 my-1 nav-text-color" href="#item-1-2">Item 1-2</a>
                                    </nav>
                                    <a class="nav-link nav-text-color" href="#item-2">Item 2</a>
                                    <a class="nav-link nav-text-color" href="#item-3">Item 3</a>
                                    <nav class="nav nav-pills flex-column">
                                        <a class="nav-link ms-3 my-1 nav-text-color" href="#item-3-1">Item 3-1</a>
                                        <a class="nav-link ms-3 my-1 nav-text-color" href="#item-3-2">Item 3-2</a>
                                    </nav>
                                </nav>
                            </nav>

                           
                        </div>
                    </div>
                    <div className="col-10 position-relative">
                        <div className="body-center body-pos position-absolute posform">
                            <div className="title2 weltitle tit-font">BIENVENUE A</div>
                            <div className="bg-title"><h1>KAZI<span>.COM</span></h1></div>
                            <div className="title3 infotext tit-font">Nous vous connectons avec les entreprises</div>
                            <button type="button" class="text-footer" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Creer un compte</button>
                        </div>
                        <div className="footer-text">Creez votre cv et postuler avec le lien</div>
                    </div>
                </div>
            </div>
        )
    }
}
