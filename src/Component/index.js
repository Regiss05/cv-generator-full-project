import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Component/CSS/main.css';
import Form1 from '../Component/Js/form1.js';
import Login from './Js/login';

class index extends Component {
    render() {
        return (
            <div>
                <Form1 />
                <Login />
            </div>

        );
    }
}

export default index;
