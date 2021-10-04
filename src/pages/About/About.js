import about from "../../pics/about.jpg";
import styled from "styled-components";
import { COLOR, MEDIA_QUERY } from "../../constants/styles";

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
  ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`;
const LOGO = styled.span`
  text-decoration: none;
  color: ${COLOR.text_dark};
  font-size: 36px;
  font-family: "Monoton", cursive;
  ${MEDIA_QUERY.mobile} {
    font-size: 30px;
  }
`;
const IMG = styled.img`
  width: 500px;
  ${MEDIA_QUERY.tablet} {
    width: 400px;
  }
  ${MEDIA_QUERY.mobile} {
    width: 300px;
  }
`;
const Desc = styled.div`
  font-size: 16px;
  margin-top: 14px;
  text-align: center;
  line-height: 1.8em;
  ${MEDIA_QUERY} {
    font-size: 14px;
  }
`;

export default function About() {
  return (
    <PageWrapper>
      <Title>
        Creator of <LOGO>BLOGG</LOGO>
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
