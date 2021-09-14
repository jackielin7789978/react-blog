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
  font-size: 16px;
  margin-top: 14px;
  text-align: center;
  line-height: 1.8em;
`;

export default function About() {
  return (
    <PageWrapper>
      <Title>
        Creator of <span>BLOGG</span>
      </Title>
      <IMG src={about} alt="about me" />
      <Desc>
        Hi, I'm Jackie.
        <br />
        This is a blog I built using React.
        <br />
        Click{" "}
        <a
          href="https://github.com/jackielin7789978/react-blog"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to check it out on GitHub.
        <br />
      </Desc>
    </PageWrapper>
  );
}
