import { Container, ProfilePic } from './styles';
import { Form } from '../SignIn/styles.js'
import { Input } from '../../components/Input'

import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi'

export function Profile () {
  return (
    <Container>
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