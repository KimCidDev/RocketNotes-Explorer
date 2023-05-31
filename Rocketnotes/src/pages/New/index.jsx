import { Container, Form } from './styles';
import {  FiMail, FiLock, FiUserPlus, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea' 

export function New () {
  return (
    <Container>
      <Header />

      <Form>
      <header>
      <h1> Criar Nota </h1>
      <ButtonText title='Voltar'/>
      </header>

      <Input 
        placeholder="Título"
        />

        <TextArea
        placeholder="Observações" 
        />

      </Form>

    </Container>



  )
}