import './navbar.css'
import React from 'react';

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            menutoggle : false // test
        }
        this.toggleButton = this.toggleButton.bind(this)
    }


    toggleButton(){
        console.log("clicked")
        this.setState({menutoggle: !this.state.menutoggle}, () => {
            console.log(this.state.menutoggle)
        })

    }
    render() {
        return (
            <nav ref="navbar" id="navbar">

                <button onClick={this.toggleButton} className="menubtn">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className="navlinks" id={this.state.menutoggle ? "hidden" : ""}>

                    <div><a href="/">Home</a></div>
                    <div><a href="/about">About Us</a></div>
                    <div><a href="/events">Events</a></div>
                    <div><a href="/prayer-times">Prayer Times</a></div>
                    <div><a href="https://bothellmosque.org/donate/" target="__blank">Donate</a></div>

                </div>
            </nav>
        )


    }


}

export default Navbar;
