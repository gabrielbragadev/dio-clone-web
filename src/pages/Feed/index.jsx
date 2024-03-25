import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container, Column, Title, TitleHighlight } from "./styles";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            nome="Thiago Vasconcelos Braga"
            image="https://avatars.githubusercontent.com/u/32931894?s=96&v=4"
          />
          <UserInfo
            percentual={80}
            nome="Thiago Vasconcelos Braga"
            image="https://avatars.githubusercontent.com/u/32931894?s=96&v=4"
          />
          <UserInfo
            percentual={100}
            nome="Thiago Vasconcelos Braga"
            image="https://avatars.githubusercontent.com/u/32931894?s=96&v=4"
          />
          <UserInfo
            percentual={34}
            nome="Thiago Vasconcelos Braga"
            image="https://avatars.githubusercontent.com/u/32931894?s=96&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
