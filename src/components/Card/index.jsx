import { FaRegHeart } from "react-icons/fa";
import  Background  from "../../assets/frontwpp.jpg"
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (

    <CardContainer>
      <ImageBackground src={Background}/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/32931894?s=96&v=4" />
          <div>
            <h4>Thiago Vasconcelos Braga</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
          <FaRegHeart /> 16 
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
