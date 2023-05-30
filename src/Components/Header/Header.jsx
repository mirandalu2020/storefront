import Nav from '../Nav/Nav';
import { Container, Typography } from '@mui/material';
import './header.css'

function Header() {

  return (
    <Typography align='center' color='info'>
    <Container id="header-container" color='info'>
      <a href='/'>
        <h1> Storefront </h1>
      </a>
      <Nav />
    </Container>
      </Typography>
  )
}

export default Header;