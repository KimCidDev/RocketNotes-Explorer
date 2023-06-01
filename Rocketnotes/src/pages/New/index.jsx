import { Container, Form } from './styles';
import {  FiMail, FiLock, FiUserPlus, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

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

        <Section title="Título">

          <NoteItem value="http://github.com
          "/>
          <NoteItem isNew placeholder="Novo Link"/>
        </Section>

        <Section title="Marcadores">
        <div className="tags" >
        <NoteItem value="react"/>
        <NoteItem value="react"/>
        <NoteItem value="react"/>
        <NoteItem value="react"/>
        <NoteItem value="react"/>
        <NoteItem value="react"/>
        <NoteItem isNew placeholder="Nova Tag"/>
        </div>
        </Section>

      </Form>

    </Container>



  )
}