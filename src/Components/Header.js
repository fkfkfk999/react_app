import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 150px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "orangered" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;
const ReactLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderJS = withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <ReactLink to="/">Movies</ReactLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <ReactLink to="/tv">TV</ReactLink>
      </Item>
      <Item current={pathname === "/search"}>
        <ReactLink to="/search">Search</ReactLink>
      </Item>
    </List>
  </Header>
));

export default withRouter(HeaderJS);
