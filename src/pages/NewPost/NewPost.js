import { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/styles";
import { publishPost } from "../../WebApi";
import { useHistory } from "react-router";
import { ERR } from "../../constants/formStyle";
import Loading from "../../components/Loading";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditorWrapper = styled.div`
  max-width: 700px;
  min-width: 500px;
  width: 35%;
  padding: 30px;
  border: 1px solid ${COLOR.transparent_primary};
`;
const PageTitle = styled.div`
  font-size: 28px;
`;
const TitleInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  margin: 24px 0;
  font-size: 18px;
  border: 1px solid ${COLOR.ghost};
  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ghost_darker};
  }
`;
const SubmitBTN = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
  padding: 8px;
  border: none;
  background: ${COLOR.dark_primary};
  color: ${COLOR.text_kindawhite};

  &:hover {
    background: ${COLOR.dark_primary_hover};
  }
`;

export default function NewPost() {
  const mdParser = new MarkdownIt();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [isSendingPost, setIsSendingPost] = useState(false);
  const history = useHistory();

  const handleNewPost = () => {
    if (isSendingPost) return;
    setContent(content);
    setIsSendingPost(true);
    publishPost(title, content).then((res) => {
      if (res.ok === 0) {
        setIsSendingPost(false);
        return seterrMsg(res.message);
      }
      setIsSendingPost(false);
      setTitle("");
      setContent("");
      history.push("./");
    });
  };
  return (
    <PageWrapper>
      {isSendingPost && <Loading />}
      <EditorWrapper>
        <PageTitle>新文章</PageTitle>
        <p
          style={{
            color: "red",
            fontSize: "12px",
          }}
        >
          Markdown 語法沒有用 &gt;&lt;
        </p>
        <TitleInput
          placeholder="請輸入文章標題"
          value={title}
          onChange={(e) => {
            seterrMsg("");
            setTitle(e.target.value);
          }}
        />
        <MdEditor
          style={{ height: "400px" }}
          renderHTML={(content) => mdParser.render(content)}
          onChange={() => {
            seterrMsg("");
            const parsedContent =
              document.querySelector(".custom-html-style").innerText;
            setContent(parsedContent);
          }}
        />
        <SubmitBTN onClick={handleNewPost}>送出文章</SubmitBTN>
        {errMsg && <ERR>ERROR: {errMsg}</ERR>}
      </EditorWrapper>
    </PageWrapper>
  );
}
