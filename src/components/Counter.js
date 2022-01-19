import React, { useState } from 'react';

const Counter = () => {
    let [num, setNum] = useState(0);

    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };
    let handleChange = (e) => {
        setNum(e.target.value)
    };

    return (
        <>
            <div>
                <button onClick={decNum}>
                    down
                </button>
            </div>
            <input type='text' onChange={handleChange} value={num}/>
            <div>
                <button onClick={incNum}>
                    up
                </button>
            </div>
        </>
    );
};

export default Counter;
