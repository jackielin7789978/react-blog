import { useState, useContext } from "react";
import { login, getMe, register } from "../../WebApi";
import { setAuthToken } from "../../utils";
import { useHistory } from "react-router";
import { AuthContext } from "../../context";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";
import { Container, Tabs, Tab } from "../../constants/formStyle";
import { COLOR } from "../../constants/styles";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrMsg, setLoginErrMsg] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regNickname, setRegNickname] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regErrMsg, setRegErrMsg] = useState("");

  const [tab, setTab] = useState("Login");

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

  const handleTab = (e) => {
    if (e.target.innerText === "Login") {
      setTab(e.target.innerText);
    }
    if (e.target.innerText === "Register") {
      setTab(e.target.innerText);
    }
  };

  const loginProps = {
    setLoginUsername,
    setLoginPassword,
    handleLogin,
    loginErrMsg,
    setLoginErrMsg,
  };
  const regProps = {
    setRegUsername,
    setRegNickname,
    setRegPassword,
    handleRegister,
    regErrMsg,
    setRegErrMsg,
  };
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  return (
    <Container>
      <Tabs>
        <Tab
          onClick={handleTab}
          style={{
            background: tab === "Register" && COLOR.tab_notselected,
            borderBottom:
              tab === "Register" && `1px solid ${COLOR.transparent_primary}`,
          }}
        >
          Login
        </Tab>
        <Tab
          onClick={handleTab}
          style={{
            background: tab === "Login" && COLOR.tab_notselected,
            borderBottom:
              tab === "Login" && `1px solid ${COLOR.transparent_primary}`,
          }}
        >
          Register
        </Tab>
      </Tabs>
      {tab === "Login" && <LoginForm props={loginProps} />}
      {tab === "Register" && <RegForm props={regProps} />}
    </Container>
  );
}
