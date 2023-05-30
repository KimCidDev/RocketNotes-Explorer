import {  FiMail, FiLock, FiUserPlus, FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile () {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUserPlus}
        />
        <Input 
        placeholder="Email"
        type="text"
        icon={FiMail}
        />
        <Input 
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        />
        <Input 
        placeholder="Senha Antiga"
        type="password"
        icon={FiLock}
        />
        <Button title="XisSalada" />
       </Form>

    </Container>
  );
};