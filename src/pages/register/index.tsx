import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextContent } from "../home/styles";
import { IconContext } from "react-icons";

import {
  Column,
  Container,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { IFormData } from "./types";

const Register = () => {
  const navigate = useNavigate();

  const handleClickRegisterIn = () => {
    navigate("/feed");
  };

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const {
    control,
    formState: { errors },
  } = useForm<IFormData>({});

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(134, 71, 173, 1)" }}>
        <Header />
        <Container>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
              <form>
                <Input
                  name="name"
                  errorMessage={errors?.name?.message}
                  control={control}
                  placeholder="Nome completo"
                  type="name"
                  leftIcon={<MdPerson />}
                />
                <Input
                  name="email"
                  errorMessage={errors?.email?.message}
                  control={control}
                  placeholder="E-mail"
                  type="email"
                  leftIcon={<MdEmail />}
                />
                <Input
                  name="password"
                  errorMessage={errors?.password?.message}
                  control={control}
                  placeholder="Senha"
                  type="password"
                  leftIcon={<MdLock />}
                />
              </form>
              <Button
                title="Criar minha conta"
                onClick={handleClickRegisterIn}
                variant="secondary"
                type="submit"
              />
              <TextContent>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </TextContent>
              <TextContent onClick={handleClickSignIn}>
                Já tenho conta. Fazer login.
              </TextContent>
            </Wrapper>
          </Column>
        </Container>
      </IconContext.Provider>
    </>
  );
};

export { Register };
