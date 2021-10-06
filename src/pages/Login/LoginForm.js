import {
  FormContainer,
  Inputs,
  Input,
  Submit,
  ERR,
} from "../../constants/formStyle";
import Proptypes from "prop-types";

export default function LoginForm({ props }) {
  const {
    setLoginUsername,
    setLoginPassword,
    handleLogin,
    loginErrMsg,
    setLoginErrMsg,
  } = props;
  return (
    <FormContainer onSubmit={handleLogin}>
      <Inputs>
        <Input
          placeholder="Username"
          onChange={(e) => {
            setLoginErrMsg("");
            setLoginUsername(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setLoginErrMsg("");
            setLoginPassword(e.target.value);
          }}
        />
        {loginErrMsg && <ERR>ERROR: {loginErrMsg}</ERR>}
        <Submit type="submit" value="登入" />
      </Inputs>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  props: Proptypes.object,
  setLoginUsername: Proptypes.func,
  setLoginPassword: Proptypes.func,
  loginErrMsg: Proptypes.string,
  handleLogin: Proptypes.func,
  setLoginErrMsg: Proptypes.func,
};
