import { Container, Form } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function New () {
  return (
    <Container>
      <Header />

      <main>
      <Form>
      <header>
      <h1> Criar Nota </h1>
      <Link to='/'>
      <ButtonText title="Voltar"></ButtonText>
      </Link>
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
        <NoteItem isNew placeholder="Nova Tag"/>
        </div>
        </Section>

        <Link to='/details/:id'>
        <Button title="Criar"/>
        </Link>
      </Form>
      </main>

    </Container>



  )
}