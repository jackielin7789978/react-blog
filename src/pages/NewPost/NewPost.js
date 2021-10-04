import { useState } from "react";
import styled from "styled-components";
import { COLOR, MEDIA_QUERY } from "../../constants/styles";
import { publishPost } from "../../WebApi";
import { useHistory } from "react-router";
import { ERR } from "../../constants/formStyle";
import Loading from "../../components/Loading";
import "react-markdown-editor-lite/lib/index.css";

const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditorWrapper = styled.div`
  width: 30vw;
  padding: 30px;
  margin-top: 10px;
  border: 1px solid ${COLOR.transparent_primary};
  ${MEDIA_QUERY.tablet} {
    width: 40vw;
  }
  ${MEDIA_QUERY.mobile} {
    width: 100vw;
    outline: 1px solid gold;
  }
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
const Editor = styled.textarea`
  resize: none;
  width: 100%;
  height: 25vh;
  padding: 8px;
  border: 1px solid ${COLOR.ghost};
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ghost_darker};
  }
`;
const SubmitBTN = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 4px;
  font-size: 16px;
  height: 40px;
  border: none;
  background: ${COLOR.dark_primary};
  color: ${COLOR.text_kindawhite};
  transition: ease 0.2s;
  &:hover {
    background: ${COLOR.dark_primary_hover};
  }
  ${MEDIA_QUERY.mobile} {
    height: 30px;
  }
`;

export default function NewPost() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [isSendingPost, setIsSendingPost] = useState(false);
  const history = useHistory();
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleNewPost = () => {
    if (isSendingPost) return;
    setContent(content);
    setIsSendingPost(true);
    (async () => {
      const res = await publishPost(title, content);
      if (!res.ok) {
        setIsSendingPost(false);
        return seterrMsg(res.messsage);
      }
      setIsSendingPost(false);
      setTitle("");
      setContent("");
      history.push("./");
    })();
  };
  return (
    <PageWrapper>
      {isSendingPost && <Loading />}
      <EditorWrapper>
        <PageTitle>新文章</PageTitle>
        <TitleInput
          placeholder="請輸入文章標題"
          value={title}
          onChange={(e) => {
            seterrMsg("");
            setTitle(e.target.value);
          }}
        />
        <Editor placeholder="請輸入文章內容..." onChange={handleChange} />
        {errMsg && <ERR>ERROR: {errMsg}</ERR>}
        <SubmitBTN onClick={handleNewPost}>送出文章</SubmitBTN>
      </EditorWrapper>
    </PageWrapper>
  );
}
