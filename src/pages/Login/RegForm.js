import {
  FormContainer,
  Inputs,
  Input,
  Submit,
  ERR,
} from "../../constants/formStyle";
import Proptypes from "prop-types";

export default function RegForm({ props }) {
  const {
    setRegUsername,
    setRegNickname,
    setRegPassword,
    handleRegister,
    regErrMsg,
    setRegErrMsg,
  } = props;
  return (
    <FormContainer onSubmit={handleRegister}>
      <Inputs>
        <Input
          placeholder="Username"
          onChange={(e) => {
            setRegErrMsg("");
            setRegUsername(e.target.value);
          }}
        />
        <Input
          placeholder="Nickname"
          onChange={(e) => {
            setRegErrMsg("");
            setRegNickname(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setRegErrMsg("");
            setRegPassword(e.target.value);
          }}
        />
        {regErrMsg && <ERR>ERROR: {regErrMsg}</ERR>}
        <Submit type="submit" value="註冊" />
      </Inputs>
    </FormContainer>
  );
}

RegForm.propTypes = {
  props: Proptypes.object,
  setRegUsername: Proptypes.func,
  setRegNickname: Proptypes.func,
  setRegPassword: Proptypes.func,
  regErrMsg: Proptypes.string,
  handleRegister: Proptypes.func,
  setRegErrMsg: Proptypes.func,
};
