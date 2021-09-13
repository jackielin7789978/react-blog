import about from "../../pics/about.jpg";
import styled from "styled-components";
import { COLOR } from "../../constants/styles";

const PageWrapper = styled.div`
  min-height: calc(100vh - 155px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLOR.text_dark};
`;
const Title = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  span {
    font-family: "Monoton", cursive;
    font-weight: normal;
    font-size: 32px;
    position: relative;
    top: 2px;
    left: 4px;
  }
`;
const IMG = styled.img`
  width: 700px;
`;
const Desc = styled.div`
  margin-top: 14px;
  text-align: center;
  line-height: 1.5em;
`;

export default function About() {
  return (
    <PageWrapper>
      <Title>
        Creator of <span>BLOGG</span>
      </Title>
      <IMG src={about} alt="about me" />
      <Desc>
        Blah Blah Blah Blah Blah
        <br />
        Blah Blah Blah Blah Blah
        <br />
        Blah Blah Blah Blah Blah
        <br />
      </Desc>
    </PageWrapper>
  );
}
