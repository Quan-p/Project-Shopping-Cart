import React from "react";
import caseData from '../../assets/caseData';

const Cases = () => {
    return (
        <div className={ 'wrapper' }>
            {caseData.map((element) => (
                    <div className={ 'img-container' }>
                        <img src={element.src} alt={element.name}/>
                        <p className={ 'title' }>
                            {element.name}
                        </p>
                        <p>
                            {element.price}
                        </p>
                    </div>
            ))}
        </div>
    );
}

export default Cases;