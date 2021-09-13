import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Sidebar from "../src/components/Sidebar";
import { Home, Post, About, Login, NewPost } from "./pages";
import { AuthContext } from "./context";
import { getAuthToken } from "./utils";
import { getMe } from "./WebApi";

const PageWrapper = styled.div`
  max-width: 100%;
  font-family: "Roboto Mono", monospace;
`;
const MainArea = styled.div`
  min-height: calc(100vh - 155px);
  width: 50%;
  margin-left: 25vw;
  padding: 18px 36px;
`;

export default function App() {
  const [user, setUser] = useState(null);
  const [isGettingUser, setIsGettingUser] = useState(false);
  useEffect(() => {
    const token = getAuthToken();
    if (token !== "null") {
      setIsGettingUser(true);
      getMe().then((res) => {
        setUser(res.data);
        setIsGettingUser(false);
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, isGettingUser }}>
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
