import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <div class="col-2 nav-side">
                <div className="nive-side-inside ">
                    <nav id="navbar-example3" class="navbar navbar-light flex-column align-items-stretch p-3">
                        <a class="navbar-brand nav-text-color" href="#"><h1>HOME</h1></a>
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link nav-text-color" href="#">Utilisateur</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link ms-3 my-1 nav-text-color" href="#">Creer un compte</a>
                                <a class="nav-link ms-3 my-1 nav-text-color" href="#">Se connecter</a>
                            </nav>
                            <a class="nav-link nav-text-color" href="#item-1">Travail</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link ms-3 my-1 nav-text-color" href="#">Creer un travail</a>
                                <a class="nav-link ms-3 my-1 nav-text-color" href="#">Voir travail</a>
                                <a class="nav-link ms-3 my-1 nav-text-color" href="#">Postuler</a>
                            </nav>
                            
                        </nav>
                    </nav>
                </div>
            </div>
        )
    }
}
