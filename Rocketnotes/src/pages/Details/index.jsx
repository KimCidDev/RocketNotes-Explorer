import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';


export function Details () {
  
  return (
    <Container>   
      <Header />

      <Section title="links úteis">
        <ul>
          <li>xisSalada</li>
          <li>xisBacon</li>
          <li>xisCamarão</li>
        </ul>
      </Section>

      <Button title="Voltar" />
    </Container> 
    
  )
}