import React from "react";
import { BuscarInputContainer,Row,Container,
    Input,Menu,MenuRight,UserImg,LogoImg,Wrapper } from './styles.js';
import { Button } from "../Button/index.jsx";
import logo from "../../assets/logo-full.svg";
import { useNavigate } from "react-router-dom";



const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login');
    }
    const toCad = () => {
        navigate('/cad');
    }
    const toHome = () => {
        navigate('/');
    } 

    return (
        <Wrapper>
            <Container>
                <Row>
                    <LogoImg src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder=" PEsquisar..." />                        
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                        <UserImg src="https://avatars.githubusercontent.com/u/12335676?v=4" alt="img do usuário" />
                        <MenuRight href="#" onClick={toHome}>Home</MenuRight>
                        </>
                    ) : (
                        <>
                            <MenuRight href="#" onClick={toHome}>Home</MenuRight>
                            <Button title="Entrar" onClick={toLogin}/>
                            <Button title="Cadastrar"onClick={toCad} />
                        </>
                    )}                   
                </Row>
            </Container>

        </Wrapper>


    );
};

export { Header };