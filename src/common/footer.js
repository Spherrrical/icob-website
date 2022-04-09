// import react from 'react'
import './footer.css'


function Footer(){
    return (
        <section id="footer" >
            <div className="links">
                <a href="https://github.com/Spherrrical/icob-website" target="__blank">Source Code</a>
                <a href="mailto:info@bothellmosque.org" target="__blank">Contact Us</a>
                <a href="https://bothellmosque.org/donate/" target="__blank">Donate</a>
                {/*https://groups.google.com/group/muslims-at-wb/subscribe?note=1*/}
                <a href="https://groups.google.com/group/muslims-at-wb/subscribe?note=1" target="__blank">Mailing List</a>
            </div>
            {/*<div className="copyright2">*/}
            {/*    <a href="https://vercel.com/?utm_source=Pinpoint-Simulations&utm_campaign=oss" target="__blank"><img src='../imgs/powered-by-vercel.svg' alt='powered-by-vercel.svg' width='220px'/></a>*/}
            {/*</div>*/}
            <div className="copyright">
                <footer>©️ Islamic Center of Bothell 2022</footer>
            </div>
            <div className="space">
                <footer></footer>
            </div>
        </section>

    )
}


export default Footer;
