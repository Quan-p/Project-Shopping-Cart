import React from "react";
import { Link } from "react-router-dom";
import './hero.styles.scss'

const Hero = () => {
    return (
        <section className='hero is-info is-large hero-image'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='hero-title'>
                        SFFPC
                    </h1>
                    <div className='shop-now-btn'>
                        <Link to='/shop'>
                            <button className='button is-black' id='shop-now' >
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;