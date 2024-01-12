import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';
import { Container, Column, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
  email: yup.string().email('email inválido...!').required('Campo obrigatório!'),
  password: yup.string().min(6,'Mínimo 6 caracteres').required('Campo obrigatório!'),
}).required();

const Login = () => {

    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors, isValid }, } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    console.log(isValid,errors);

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }
            alert('Usuário ou senha inválido')
        }catch(e){
            alert('Erro na Infraestrutura/Serviço, chame o Suporte!');
        }
    };

    return (<>
    <Header />
    <Container>
        <Column>
            <Title>
               A plataforma para você aprender...
            </Title>
        </Column>
        <Column>
        <Wrapper>
            <SubtitleLogin>Faça seu Login e make the change...</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="informe seu e-mail" leftIcon={<MdEmail />} />
                <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Informe sua Senha" leftIcon={<MdLock />} type="password"/>
                <Button title="Entrar" variant="secondary" type="submit" />                
            </form>
            <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
            </Row>
        </Wrapper>
            
        </Column>
    </Container>
    
    </>
    );
};

export { Login };
