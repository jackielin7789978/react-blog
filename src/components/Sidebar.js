import styled from "styled-components";
import { COLOR, MEDIA_QUERY } from "../constants/styles";
import blogg from "../pics/blogg.png";

const Container = styled.div`
  margin-top: 110px;
  min-height: calc(100vh - 142px);
  min-width: 200px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 6%;
  ${MEDIA_QUERY.tablet} {
    left: 5%;
  }
  ${MEDIA_QUERY.mobile} {
    display: none;
  }
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
