import React, { Component } from 'react'
import { Button } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className ="home">
                <Button color="danger">Danger!</Button>
                <p>
                   Simples aplicação de ChatBot em React.js para 
                   <p>funcionar com o IBM Watson Assistint</p>
                
                </p>
                
            </div>

        )
    }
}

export default Home