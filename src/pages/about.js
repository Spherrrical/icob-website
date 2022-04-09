import logo from '../logo.svg';
import '../App.css';

import Navbar from '../common/navbar'

function LinkButton({label, url}){
    return (
        <a href={url} target="__blank"><div className="linkbtn">{label}</div></a>
    )
}

function About() {
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Test page 2
                </a>
            </header>
        </div>
    );
}

export default About;
