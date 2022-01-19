import React from "react";
import caseData from '../../assets/caseData';
import Counter from "../../components/Counter";

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
                        <Counter />
                    </div>
            ))}
        </div>
    );
}

export default Cases;