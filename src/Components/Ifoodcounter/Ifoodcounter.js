import React, {useState, useEffect} from 'react'; //importando hook useState 
import '../Ifoodcounter/Ifoodcounter.css'; //importando css


export default function () { //sintaxe padrao do react
    const [value, setValue] = useState(1); //definindo um useState com uma variavel chamada valor e uma função chamada setValue e declarando o useState para inicializar com 1
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active"); //manipulando a classe adicionando o valor dela numa variavel e a uma função

    useEffect(()=>{
       console.log(`o estilo do botão é" ${buttonStyle}`)
    }, [buttonStyle]);


    function down(){ //criando função para diminuir valor do contador
        if(value <= 1){ //quando o valor for igual ou menor que 1
            //mudar o css
            setButtonStyle("counter-button-plus-desactive"); //a função vai mudar o css para a classe do botão cinza/desativado
        }
        if(value > 0){ //
            setValue(value - 1); //diminuir valor quando clicar no botao e impedir que va para valor negativo quando diminuir 
        }

    }

    function up(){//criando função para aumentar valor do contador
        setValue(value + 1); //acrescentando valor quando clicar no botao
        setButtonStyle("counter-button-minus-active") //colocando classe de botao vermelho/ativo quando clicar no botao de aumentar
    }

    return (//sintaxe padrao do react
        //colocando a classe do css na div
        
        <> 
            <div className='wrapper'>
                <div className='countex-wrapper'>
                    <button 
                        className={buttonStyle} //criando botão de menos (-) e adicionando estilos nele, nesse caso, foi colocado entre colchetes porque esta manipulando a classe. //adicionando função de onClick, quando clicar a função a função entre colchetes é executada
                        onClick={down}> 
                        -
                    </button>
                    <p>{value}</p>
                    <button 
                        className='counter-button-plus-active' //criando botão de mais (+) e adicionando estilos nele//adicionando função de onClick, quando clicar a função a função entre colchetes é executada
                        onClick={up}>
                        +
                    </button>
                </div>
            </div>
        </>
    )
}
