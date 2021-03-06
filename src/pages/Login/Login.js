import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import background from "../../assets/png/background.png";
import logoLight from "../../assets/png/logo-light.png";
import { paths } from "../../App";
import * as styles from "../../constants/styles";

const Login = () => {
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);

  return loggedIn ? (
    <Redirect to={paths.home} />
  ) : (
    <StyledBackground>
      <StyledLoginContainer>
        <StyledLogo src={logoLight} />
        <LoginForm />
      </StyledLoginContainer>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(11, 15, 39, 0.8), rgba(11, 15, 39, 0.8)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledLoginContainer = styled.div`
  flex-direction: column;
  ${styles.align.center}
  height: 100vh;
  margin: 0 16px;
`;

const StyledLogo = styled.img`
  min-height: 64px;
  min-width: 246px;
  margin-bottom: 69px;
`;

export default Login;
