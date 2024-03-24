import { Header } from "../../components/Header";
import { Container, Title } from "./styles";
import { Card } from "../../components/Card";

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Feed</Title>
          <Card/>
      </Container>
    </>
  );
};

export default Feed;
