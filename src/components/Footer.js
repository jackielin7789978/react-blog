import styled from "styled-components";
import { COLOR } from "../constants/styles";

const Container = styled.div`
  width: 100%;
  height: 32px;
  color: ${COLOR.text_kindawhite};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLOR.dark_primary};
  font-family: "Roboto Mono", monospace;
`;

export default function Footer() {
  return <Container>Copyright © 2021 Blogg All rights Reserved.</Container>;
}
