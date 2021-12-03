import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SFooter from './simpleFooter';
import '../CSS/indexPage.css'
import profImage from '../images/regiss.jpeg';
import signImage from '../images/image 1.png';

export default class firstpage extends Component {
    render() {
        return (
            <div class="container form-bg bod-wit">
                <nav class="navbar navbar-light justify-content-between mgh">
                    <a class="navbar-brand tit-pag"><h1>KAZI<span>.COM</span></h1></a>
                    <form class="form-inline">
                        <button class="btn" type="submit">Edit</button>
                        <button class="btn" type="submit">Share</button>
                    </form>
                </nav>
                <div className="">
                    <img src={profImage} class="rounded-circle mx-auto d-block image-prof" alt="..."></img>
                </div>
                <div className="text-usname">
                    <h1 className="usname text-center">Regiss Mukubiza</h1>
                    <p className="par text-center">Informaticien</p>
                </div>
                <div className="body-ind">
                    <div className="row">
                        <div className="col-3 np1">
                            <div className="row ">
                                <h2 className="big-title-left">Identite</h2>
                                <div className="row-ident">
                                <div className="title-left-11">
                                    <h3 className="tit-left-men">Email</h3>
                                    <div className="text-mail">regiss.steven@gmail.com</div>
                                </div>
                                <div className="title-left-12">
                                    <h3 className="tit-left-men">Adresse</h3>
                                    <div className="text-adresse">Nord Kivu, Goma, RDC</div>
                                </div>
                                <div className="title-left-13">
                                    <h3 className="tit-left-men">Telephone</h3>
                                    <div className="text-phone">+243 979 595 336</div>
                                </div>
                                <div className="title-left-14">
                                    <h3 className="tit-left-men">Date de naissance</h3>
                                    <div className="text-bd">31/03/1994</div>
                                </div>
                                <div className="title-left-15">
                                    <h3 className="tit-left-men">Nationalité</h3>
                                    <div className="text-nation">Congolaise</div>
                                </div>
                                </div>
                            </div>
                            <div className="row rw border-0 rw3"></div>
                            <div className="row">
                                <div className="row title-luang"><h2>Language</h2></div>
                                <div className="row row-ident">
                                    <div className="row">
                                        <div className="col">Francais: </div>
                                        <div className="col">Avancer</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">Anglais: </div>
                                        <div className="col">Moyen</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">Swahili: </div>
                                        <div className="col">Avancer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h2>Comptetance</h2>
                                <div className="row row-ident">
                                    <div className="row">Travail en équipe</div>
                                    <div className="row">Résolution de problème</div>
                                    <div className="row">Leadership</div>
                                    <div className="row">Art oratoire</div>
                                    <div className="row">Surveillance</div>
                                    <div className="row">Gérer les conflits</div>
                                    <div className="row">Formateur</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="motiv-tex">
                                <h1 className="par mg-mot">Lettre de motivation</h1>
                                <div className="mot-form">
                                    <p>
                                        A Monsieur le dire directeur de Shell Company
                                        Je viens respectueusement vers vous de solliciter de votre haute bienveillance outre l’opportunité de pouvoir correspondre avec vous, mais aussi et surtout de participer aux recrutement Shell Company édition 2021.
                                    </p>
                                    <p>
                                        Je tiens à vous informer que je suis un jeune de nationalité Congolaise résident à dans la ville Goma, très intéressé à votre structure (ONG) organisation non gouvernementale dont m’a parlé mademoiselle Floriane Gomez.
                                    </p>
                                    <p>
                                        Je compte indubitablement sous votre acceptation à participer aux recrutement édition 2021. Monsieur le directeur, conscient que je suis je veux bien que vous m’aidiez à prendre part aux recrutements.
                                    </p>
                                    <p>
                                        Dans l’attente d’une suite favorable à notre demande, veuillez bien vouloir agréer Monsieur le directeur Générale l’expression de mes sentiments les plus distingués.
                                        Avec ma grande considération et loin de toute volonté hésitante. Merci à vous également et passez un bon séjour.
                                    </p>
                                    <div className="row d-flex align-items-end flex-column">
                                        <img src={signImage} className="signcs p-3" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <h3 className="exp-title text-center">Experience</h3>
                        <div className="row exp-text">
                            <div className="col px1">
                                <div className="row">
                                    Mai 2018 – Aout 2018 Programmeur at OVG RDC, Nord-Kivu, Goma
                                </div>
                                <div className="row">
                                    Aout 2019 – Octobre 2019 Programmeur Andela Rwanda, Kigali at Bootcamp participation
                                </div>
                                <div className="row">
                                    Novembre 2019 – juillet 2019 analyste des données at AGESTA RDC, Sud-Kivu, Bukavu
                                </div>
                            </div>
                            <div className="col px2">
                                <div className="row">
                                    Mai 2018 – Aout 2018 Programmeur at OVG RDC, Nord-Kivu, Goma
                                </div>
                                <div className="row">
                                    Aout 2019 – Octobre 2018 ProgrammeurAndela Rwanda, Kigali at Bootcamp participation
                                </div>
                                <div className="row">
                                    Novembre 2019 – juillet 2019 analyste des données at AGESTA RDC, Sud-Kivu, Bukavu
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row rvb">
                        <div className="row rvb1">
                            <div className="col rvb11"></div>
                            <div className="col rvb12"></div>
                            <div className="col rvb13"></div>
                        </div>
                        <div className="row rvb2"></div>
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>

            </div>
        )
    }
}
