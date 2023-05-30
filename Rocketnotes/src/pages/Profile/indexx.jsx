import { Container, ProfilePic } from './styless';
import { Form } from '../SignIn/styles.js'
import { Input } from '../../components/Input'

import {  FiArrowLeft, FiMail, FiLock, FiUserPlus } from 'react-icons/fi'

export function Profile () {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <ProfilePic>
        <button></button>
      </ProfilePic>

      <Form>
        <h2>Faça seu login</h2>
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
      </Form>
    </Container>
  )

}