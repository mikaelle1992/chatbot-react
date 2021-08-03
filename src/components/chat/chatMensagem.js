import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button} from 'reactstrap'

const ChatMensagem = props => {
    return (
        <div className="chatMensagem">
            <InputGroup>
                <Input placeholder="Digite sua mensagem" />
                <InputGroupAddon addonType="append">
                    <Button color="sucess">Enviar</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default ChatMensagem