import { useState, useContext } from "react";
import { login, getMe, register } from "../../WebApi";
import { setAuthToken } from "../../utils";
import { useHistory } from "react-router";
import { AuthContext } from "../../context";
import styled from "styled-components";
import {
  FormWrapper,
  Title,
  Input,
  Label,
  ERR,
} from "../../constants/formStyle";

const PageWrapper = styled.div`
  min-height: calc(100vh - 155px);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrMsg, setLoginErrMsg] = useState("");
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const [regUsername, setRegUsername] = useState("");
  const [regNickname, setRegNickname] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regErrMsg, setRegErrMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginUsername, loginPassword).then((data) => {
      if (!data.ok) {
        return setLoginErrMsg(data.message);
      }
      setAuthToken(data.token);
      getMe().then((res) => {
        if (!res.ok) {
          setAuthToken(null);
          return setLoginErrMsg(res.toString());
        }
        setUser(res.data);
        history.push("./");
      });
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(regUsername, regNickname, regPassword).then((res) => {
      if (!res.ok) {
        setAuthToken(null);
        return setRegErrMsg(`register: ${res.message}`);
      }
      setAuthToken(res.token);
      login(regUsername, regPassword).then((data) => {
        getMe().then((res) => {
          if (!res.ok) {
            setAuthToken(null);
            return setRegErrMsg(`login: ${res.toString()}`);
          }
          setUser(res.data);
          history.push("./");
        });
      });
    });
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <div>
            <Label>Username</Label>
            <Input
              type="text"
              onChange={(e) => {
                setLoginErrMsg(null);
                setLoginUsername(e.target.value);
              }}
              value={loginUsername}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              onChange={(e) => {
                setLoginErrMsg(null);
                setLoginPassword(e.target.value);
              }}
              value={loginPassword}
            />
          </div>
          <Input type="submit" value="SIGN IN" />
          {loginErrMsg && <ERR>ERROR: {loginErrMsg}</ERR>}
        </form>
      </FormWrapper>
      <FormWrapper>
        <Title>Register</Title>
        <form onSubmit={handleRegister}>
          <div>
            <Label>Username</Label>
            <Input
              type="text"
              onChange={(e) => {
                setRegErrMsg(null);
                setRegUsername(e.target.value);
              }}
              value={regUsername}
            />
          </div>
          <div>
            <Label>Nickname</Label>
            <Input
              type="text"
              onChange={(e) => {
                setRegErrMsg(null);
                setRegNickname(e.target.value);
              }}
              value={regNickname}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              onChange={(e) => {
                setRegErrMsg(null);
                setRegPassword(e.target.value);
              }}
              value={regPassword}
            />
          </div>
          <Input type="submit" value="SIGN UP" />
          {regErrMsg && <ERR>ERROR: {regErrMsg}</ERR>}
        </form>
      </FormWrapper>
    </PageWrapper>
  );
}
