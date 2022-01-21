import React, {useState} from "react";
import caseData from '../../assets/caseData';
import Counter from "../../components/Counter";

const Cases = (props) => {
    const {onAdd} = props; 

    const [cart, setCart] = useState([]);
    const [itemIndex, setItemIndex] = useState(1);

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
                        <button
                            onClick={() => {
                                setCart([...cart, ` item ${itemIndex}`]);
                                setItemIndex(itemIndex + 1);
                            }}
                        >
                        Add to Cart
                        </button>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Cases;