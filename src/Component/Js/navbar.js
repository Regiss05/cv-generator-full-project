import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <div class="col-2 nav-side">
                <div className="nive-side-inside ">
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
        )
    }
}
