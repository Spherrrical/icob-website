import '../App.css';

import Navbar from '../common/navbar'
import HomeHeader from "../components/pagecomponents/Header";
import AboutUs from "../components/pagecomponents/AboutUs"
import Footer from "../common/footer";

// function LinkButton({label, url}){
//     return (
//         <a href={url} target="__blank"><div className="linkbtn">{label}</div></a>
//     )
// }

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeHeader/>
            {/*<AboutUs/>*/}
            <Footer/>
        </div>


    );
}

export default Home;



