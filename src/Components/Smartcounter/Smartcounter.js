import {useState} from 'react';

function Smartcounter(){
    const [quantity, upQuantity] = useState(0);
    
    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    );
}

export default Smartcounter;