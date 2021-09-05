import React, { useState } from "react";
import styled from "styled-components";

const tabWidth = 200;

const Wrapper = styled.div`
  width: ${({ length }) => tabWidth * length}px;
  margin: 0 auto;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: #f2f2f2;
`;

const Tab = styled.div`
  width: ${tabWidth}px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in;
  z-index: 1000;
`;

const Glider = styled.div`
  position: absolute;
  top: 0;
  left: ${({ currentIdx }) => tabWidth * currentIdx}px;
  height: 60px;
  width: ${tabWidth}px;
  background-color: #fff;
  transition: 0.25s ease-out;
`;

const Content = styled.div`
  min-height: 300px;
  line-height: 2.5;
  background-color: #fff;
  padding: 20px;
`;

const Tabs = ({ tabs }) => {
  const [shownIndex, setShownIndex] = useState(0);

  return (
    <Wrapper length={tabs.length}>
      <Nav>
        {tabs.map(({ title }, i) => (
          <Tab onClick={() => setShownIndex(i)} key={i}>
            {title}
          </Tab>
        ))}
        <Glider currentIdx={shownIndex} />
      </Nav>
      <Content>{tabs[shownIndex].content}</Content>
    </Wrapper>
  );
};

export default React.memo(Tabs);
