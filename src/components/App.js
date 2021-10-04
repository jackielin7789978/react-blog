import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Home, Post, About, Login, NewPost } from "../pages";
import { AuthContext } from "../context";
import { getAuthToken } from "../utils";
import { getMe } from "../WebApi";
import { MEDIA_QUERY } from "../constants/styles";
import { ScrollToTop } from "../utils";

const PageWrapper = styled.div`
  max-width: 100%;
  font-family: "Roboto Mono", monospace;
  ${"" /* 避免 margin collapsing */}
  border: 1px solid transparent;
`;
const MainArea = styled.div`
  margin-top: 110px;
  min-height: calc(100vh - 142px);
  width: 50%;
  margin-left: 25vw;
  padding: 18px 36px;
  ${MEDIA_QUERY.mobile} {
    min-height: calc(100vh - 92px);
    width: 80%;
    margin: 0px auto;
    margin-top: 60px;
  }
`;

export default function App() {
  const [user, setUser] = useState(null);
  const [isGettingUser, setIsGettingUser] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    if (token !== "null") {
      setIsGettingUser(true);
      (async () => {
        const res = await getMe();
        setUser(res.data);
        setIsGettingUser(false);
      })();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isGettingUser }}>
      <ScrollToTop />
      <Navbar />
      <PageWrapper>
        <Sidebar />
        <MainArea>
          <Switch>
            <Route path="/posts/:id">
              <Post />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/newpost">
              <NewPost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </MainArea>
      </PageWrapper>
      <Footer />
    </AuthContext.Provider>
  );
}