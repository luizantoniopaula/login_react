import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';
import { Container, Column, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
  nome: yup.string().required('Campo obrigatório!'),  
  email: yup.string().email('email inválido...!').required('Campo obrigatório!'),
  password: yup.string().min(6,'Mínimo 6 caracteres').required('Campo obrigatório!'),
}).required();

const Cad = () => {

    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors, isValid }, } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    console.log(isValid,errors);

    const onSubmit = async (formData) => {

            await api.post(`/users`,formData).then((response) => {
                if (response.status === 200 || response.status === 201) {
                    alert("Cadastro realizado com sucesso! Id=" + response.data.id);
                    navigate('/feed');
                    return
                }
            }).catch(error => {
                alert('Erro na Infraestrutura/Serviço, chame o Suporte! ' + error);
                navigate('/')
            });
    }

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
            <TitleLogin>Começe agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change...</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" leftIcon={<MdLock />} type="password"/>
                <Button title="Criar minha conta" variant="secondary" type="submit" />                
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

export { Cad };
