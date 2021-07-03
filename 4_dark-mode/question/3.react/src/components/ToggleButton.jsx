import React from "react";
import styled from "styled-components";

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
  left: 2px;
  /* toggle => left: 52px */
  width: 46px;
  height: 46px;
  background-color: #fff;
  border-radius: 100%;
  transition: left 0.3s;
`;

const Text = styled.div`
  display: flex;
  background-color: #3dbf87;
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

const ToggleButton = () => {
  return (
    <Button>
      <Switch></Switch>
      <Text>
        <TextOnOff>
          <i className="far fa-sun fa-lg"></i>
        </TextOnOff>
        <TextOnOff>
          <i className="far fa-moon fa-lg"></i>
        </TextOnOff>
      </Text>
    </Button>
  );
};

export default ToggleButton;
