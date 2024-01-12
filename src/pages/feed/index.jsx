import React from "react";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";


const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={85} nome="Luiz Antonio"
                  image="https://avatars.githubusercontent.com/u/12335676?v=4" />
            <UserInfo percentual={25} nome="Luiz Antonio"
                  image="https://avatars.githubusercontent.com/u/12335676?v=4" />
        </Column>
    </Container>    
    </>
    );
};

export { Feed };
