import styled from "styled-components";
import PropTypes from "prop-types";
import { getPosts } from "../../WebApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLOR } from "../../constants/styles";
import Paginator from "../../components/Paginator";
import { PageContext } from "../../context";

const PostWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  border-bottom: 1px solid ${COLOR.transparent_primary};
`;
const Title = styled(Link)`
  text-decoration: none;
  margin: 8px 0px;
  font-size: 24px;
  font-weight: bold;
  color: ${COLOR.text_dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CreatedAt = styled.div`
  font-size: 16px;
  color: ${COLOR.ghost};
`;
const ContentPreview = styled.div`
  width: 80%;
  margin-top: 18px;
  font-size: 16px;
  color: ${COLOR.text_dark};
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const ReadMoreBTN = styled(Link)`
  text-decoration: none;
  color: ${COLOR.text_notsodark};
  border: 2px solid ${COLOR.transparent_primary};
  margin-top: 48px;
  margin-left: -4px;
  width: 100px;
  text-align: center;
  padding: 8px;
  transition: all 0.2s;

  &:hover {
    border: 2px solid ${COLOR.transparent_primary_hover};
  }
`;

function Post({ post }) {
  return (
    <PostWrapper>
      <CreatedAt>{new Date(post.createdAt).toDateString()}</CreatedAt>
      <Title to={`/posts/${post.id}`}>{post.title}</Title>
      <ContentPreview>{post.body}</ContentPreview>
      <ReadMoreBTN to={`/posts/${post.id}`}>READ MORE</ReadMoreBTN>
    </PostWrapper>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPosts, setTotalPosts] = useState(null);

  useEffect(() => {
    setPosts(null);
    getPosts(pageNum).then((data) => {
      window.scroll(0, 0);
      setPosts(data.posts);
      setTotalPosts(data.totalPosts);
    });
  }, [pageNum]);

  return (
    posts && (
      <PageContext.Provider value={{ pageNum, setPageNum, totalPosts }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <Paginator />
      </PageContext.Provider>
    )
  );
}
