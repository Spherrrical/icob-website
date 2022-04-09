import '../../styles/header.css'
import React from 'react'

class HomeHeader extends React.Component{
    render() {
        return (
            <section className="Header">
                <div>
                    <h1>Islamic Center of <span className="_777">Bothell</span></h1>
                    <p>Serving Bothell, Woodinville, Kenmore and Kirkland</p>

                </div>
            </section>
        )
    }
}
export default HomeHeader;
