import styled from "styled-components";
import { COLOR } from "../constants/styles";
import blogg from "../pics/blogg.png";

const Container = styled.div`
  min-height: calc(100vh - 120px);
  min-width: 200px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 8%;
`;
const Desc = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: ${COLOR.text_notsodark};
`;

export default function Sidebar() {
  return (
    <Container>
      <img alt="blogg" src={blogg} />
      <Desc>
        Some description
        <br />
        Some description
        <br />
        Some description
      </Desc>
    </Container>
  );
}
