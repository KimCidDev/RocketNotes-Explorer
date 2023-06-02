import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
      <img src="http://github.com/kimciddev.png" alt="Photo a 30yo guy with trees around" />
      <div>
        <span> Bem Vindo </span>
        <strong>Kim Cid</strong>
      </div>
      
      </Profile>
      
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}