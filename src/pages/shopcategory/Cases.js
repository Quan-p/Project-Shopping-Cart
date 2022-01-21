import React from "react";
import caseData from '../../assets/caseData';
import Counter from "../../components/Counter";

const Cases = (props) => {
    const {onAdd} = props; 

    return (
        <div className={ 'wrapper' }>
            {caseData.map((element) => (
                    <div className={ 'img-container' } key={caseData.id}>
                        <div>
                            <img src={element.src} alt={element.name}/>
                            <h3 className={ 'title' }>{element.name}</h3>
                        </div>
                        
                        <p>
                            {element.price}
                            <Counter />
                        </p>
                        
                        <div>
                            <button onClick={onAdd}>Add to Cart</button>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Cases;