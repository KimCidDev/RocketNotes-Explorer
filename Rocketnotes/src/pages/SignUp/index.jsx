import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles';

export function SignUp () {
  return (
    <Container>
            <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p> Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Cadastre-se</h2>
        <Input 
        placeholder="nome"
        type="text"
        icon={FiUserPlus}/>

        <Input 
        placeholder="email"
        type="text"
        icon={FiMail}/>

        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}/>

        <Input 
        placeholder="email"
        type="text"
        icon={FiMail}/>

        <Button title="Tudo pronto!" />

        <a href="#">Voltar para a Home</a>
      </Form>
    </Container>
  )
}