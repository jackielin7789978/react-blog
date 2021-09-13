import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { COLOR } from "../constants/styles";
import { useContext } from "react";
import { AuthContext } from "../context";
import { setAuthToken } from "../utils";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const TopBar = styled.div`
  height: 24px;
  background: ${COLOR.light_primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;
`;
const BottomBar = styled.div`
  height: 64px;
  width: 99%;
  margin: auto;
  border-bottom: 2px solid ${COLOR.transparent_primary};
  color: ${COLOR.text_dark};
`;
const BottomBarWrapper = styled.div`
  max-width: 1680px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BTN = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 14px;
  border-radius: 2px;
  text-align: center;
  margin: 0 4px;
  transition: all 0.2s;
  color: ${COLOR.text_dark};
  &:hover {
    background: ${COLOR.light_primary_hover};
    color: ${COLOR.text_darker};
  }
  &.is-active {
    background: ${COLOR.light_primary};
    color: ${COLOR.text_light};
  }
`;
const Sitename = styled(Link)`
  text-decoration: none;
  color: ${COLOR.text_dark};
  cursor: pointer;
  font-family: "Monoton", cursive;
  font-size: 40px;
`;

function NavbarBtns() {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    setAuthToken("");
  };
  return (
    <div>
      <BTN exact={true} activeClassName="is-active" to="/">
        首頁
      </BTN>
      {user && (
        <BTN exact={true} activeClassName="is-active" to="/newpost">
          發布文章
        </BTN>
      )}
      <BTN exact={true} activeClassName="is-active" to="/about">
        關於我
      </BTN>
      {!user && (
        <BTN exact={true} activeClassName="is-active" to="/login">
          登入 / 註冊
        </BTN>
      )}
      {user && (
        <BTN to="/" onClick={handleLogout}>
          登出
        </BTN>
      )}
    </div>
  );
}

export default function Navbar() {
  // const { isGettingUser } = useContext(AuthContext);
  return (
    <Container>
      <TopBar />
      <BottomBar>
        <BottomBarWrapper>
          <Sitename to="/">blogg</Sitename>
          <NavbarBtns />
        </BottomBarWrapper>
      </BottomBar>
    </Container>
  );
}
