import React, { Component } from 'react';

import cronometro from './assets/cronometro.png';
import Button from './components/Button';

class App extends Component{
    render(){
        return(
            <div>                
                <img src={cronometro}  alt='Cronometro'></img>
                <h1>00:00</h1>
                
                <div>
                    <Button label="Iniciar" action="iniciarCronometro"/>
                    <Button label="Zerar" action="zerarCronometro"/>
                </div>

            </div>
        );
    }
}

export default App;