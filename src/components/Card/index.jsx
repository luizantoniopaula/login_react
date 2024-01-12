import React from 'react'
import {
        CardContainer, Content, HasInfo, ImgBackground, PostInfo, InfoUser,UserImg
        } from "./styles";
import { FiThumbsUp } from "react-icons/fi";
import imgback from "../../assets/logo-full.svg";


const Card = () => {
  return (
    <CardContainer>
        <ImgBackground src={imgback} alt="img fundo" />
        <Content>
            <InfoUser>
                <UserImg src="https://avatars.githubusercontent.com/u/12335676?v=4" alt="Imagem" />
                <div>
                    <h4>Luiz Antonio</h4>
                    <p>Há 5 dias</p>
                </div>
            </InfoUser>
            <PostInfo>
                <h4>Projeto para Formação React/HTML/CSS</h4>
                <p>Projeto feito para o curso de Formação em <strong>REACT</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 15
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
        
  );
};

export { Card };

