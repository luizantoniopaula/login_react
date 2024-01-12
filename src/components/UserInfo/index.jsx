import React from "react";
import { UserPic, Container, NameText, Progress } from "./styles";

const UserInfo = ({ percentual, nome, image }) => {
    return (
        <Container>
            <UserPic src={image} alt="Imagem do Sujeito" />
                <div>
                    <NameText>{nome}</NameText>
                    <Progress percentual={percentual} />
                </div>
        </Container>


    );
};

export { UserInfo };