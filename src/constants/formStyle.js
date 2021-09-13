import styled from "styled-components";
import { COLOR } from "./styles";

export const FormWrapper = styled.div`
  width: 400px;
  height: 420px;
  padding: 20px;
  border: 1px solid transparent;
  box-shadow: ${COLOR.ghost} 2px 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Title = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 200px;
  margin: 8px 0px;
  padding: 4px;
  border: 1px solid ${COLOR.ghost};
  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ghost_darker};
  }
  &[type="submit"] {
    margin: 24px 0px;
    background: ${COLOR.dark_primary};
    color: white;
    border: none;
    padding: 8px;
    font-size: 18px;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      background: ${COLOR.dark_primary_hover};
    }
  }
`;
export const Label = styled.label`
  display: block;
`;
export const ERR = styled.div`
  color: red;
  font-size: 14px;
  text-align: center;
`;
