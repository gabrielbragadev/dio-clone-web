import { Button } from "../Button";
import logo from "../../assets/logo-dio.png"

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logotipo"/>
          <BuscarInputContainer>
            <Input placeholder="Buscar..."/>
          </BuscarInputContainer>
          <Menu>LiveCode</Menu>
          <Menu>Global</Menu>
          <Button title="Cadastrar"></Button>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
