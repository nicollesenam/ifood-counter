function Counter(){
    let quantity = 0;

    function upQuantity(){
        quantity = quantity + 1;
        document.getElementById("counter-box").innerHTML = quantity;
        
    }

    function lowQuantity(){
        quantity = quantity - 1;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    return(
        <>
            <h1 id = "counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
            <button onClick={lowQuantity}>Diminuir</button>
        </>
    )
}

export default Counter;