import { Container, Links } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';


export function Details () {
  
  return (
    <Container>   
      <Header />

      <Section title="links úteis">
        <Links>
        <li>
          <a href="">https://www.globoesporte.com/gremio</a>
          </li>
        <li>
          <a href="">https://www.folha.com.br</a>
          </li>
        <li>
          <a href="">https://www.notion.so</a>
          </li>

        </Links>
      </Section>

      <Button title="Voltar" />
    </Container> 
    
  )
}