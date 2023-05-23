import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
      <img src="http://github.com/kimciddev.png" alt="Photo a 30yo guy with trees around" />
      <div>
        <span> Bem Vindo </span>
        <strong>Kim Cid</strong>
      </div>
      </Profile>
    </Container>
  )
}