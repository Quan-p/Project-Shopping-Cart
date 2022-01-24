import React from "react";
import main from '../../assets/images/background/main.jpg'
import './main-section.styles.scss';

const MainSection = ({ history }) => {
    return (
        <div className = 'main-section-container'>
            <div className = 'main-section-middle'>
                <div className = 'ms-m-image'>
                    <img src= {main} alt='case' />
                </div>
                <div className = 'ms-m-description'>
                    <h2>Designed for portability and modularity.</h2>
                </div>
            </div>
        </div>
    )
}

export default MainSection;
