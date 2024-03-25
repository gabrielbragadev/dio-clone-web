import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logotipo" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>LiveCode</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/32931894?s=96&v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar"></Button>
              <Button title="Cadastrar"></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
