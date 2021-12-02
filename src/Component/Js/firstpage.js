import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SFooter from './simpleFooter';
import '../CSS/indexPage.css'
import profImage from '../images/regiss.jpeg';

export default class firstpage extends Component {
    render() {
        return (
            <div class="container form-bg">
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
                <div className="">
                    <h1 className="usname text-center">Regiss Mukubiza</h1>
                </div>

            </div>
        )
    }
}
