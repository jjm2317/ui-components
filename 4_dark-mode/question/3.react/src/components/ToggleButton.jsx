import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faMoon);
console.log(library);
const Button = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
`;

const Switch = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ theme, dark }) => (dark ? theme.dark.switchLeft : 2)}px;
  /* toggle => left: 52px */
  width: 46px;
  height: 46px;
  background-color: #fff;
  border-radius: 100%;
  transition: left 0.3s;
`;

const Text = styled.div`
  display: flex;
  background-color: ${({ theme, dark }) =>
    dark ? theme.dark.buttonTextBgc : "#3dbf87"};
  border-radius: 25px;
  box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
  transition: background-color 0.3s;
`;

const TextOnOff = styled.div`
  width: 50%;
  line-height: 50px;
  text-align: center;
  color: #fff;
`;

const ToggleButton = ({ onClick, dark }) => {
  console.log(faMoon);

  return (
    <Button onClick={onClick}>
      <Switch dark={dark}></Switch>
      <Text dark={dark}>
        <TextOnOff>
          <FontAwesomeIcon
            // icon={["fa-sun", "far", "fa-lg"]}
            icon={faSun}
            // className="far fa-sun fa-lg"
          ></FontAwesomeIcon>
        </TextOnOff>
        <TextOnOff>
          <FontAwesomeIcon
            icon={faMoon}
            // icon={"moon"}
            // className="far fa-moon fa-lg"
          ></FontAwesomeIcon>
        </TextOnOff>
      </Text>
    </Button>
  );
};

export default ToggleButton;
