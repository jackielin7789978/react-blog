import styled from "styled-components";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getSinglePost } from "../../WebApi";
import { COLOR, MEDIA_QUERY } from "../../constants/styles";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 600px;
  margin: 60px auto;
`;
const Title = styled.div`
  text-decoration: none;
  margin: 12px 0px;
  font-size: 30px;
  font-weight: bold;
  color: ${COLOR.text_dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${MEDIA_QUERY.tablet} {
    font-size: 26px;
  }
  ${MEDIA_QUERY.mobile} {
    font-size: 24px;
  }
`;
const CreatedAt = styled.div`
  font-size: 16px;
  color: ${COLOR.ghost};
  ${MEDIA_QUERY.tablet} {
    font-size: 14px;
  }
  ${MEDIA_QUERY.mobile} {
    font-size: 12px;
  }
`;
const Content = styled.div`
  font-size: 18px;
  margin: 24px 0;
  line-height: 1.8em;
  word-wrap: break-word;
  border: 1px solid transparent;
  color: ${COLOR.text_dark};
  white-space: pre-wrap;
  word-wrap: break-word;
  ${MEDIA_QUERY.tablet} {
    font-size: 16px;
  }
  ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`;

function PostItem({ post }) {
  return (
    <PostWrapper>
      <CreatedAt>{new Date(post.createdAt).toDateString()}</CreatedAt>
      <Title>{post.title}</Title>
      <Content>{post.body}</Content>
    </PostWrapper>
  );
}

PostItem.propTypes = {
  post: PropTypes.object,
};

export default function Post() {
  window.scroll(0, 0);
  const [post, setPost] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getSinglePost(id).then((data) => {
      setPost(data);
    });
  }, [id]);
  return <PostItem post={post} />;
}
