import {  FiMail, FiLock, FiUserPlus, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile () {
  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
          </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/kimciddev.png"
          alt="User's image" />
          <label htmlFor="avatar">
            <FiCamera />
            <input
            id="avatar"
            type="file"
            />
          </label>
        </Avatar>

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
        <Button title="Salvar alterações" />
       </Form>

    </Container>
  );
};