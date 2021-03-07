import React from "react";
import { Stylehelp } from "./styling/StyledHelp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Li = styled.li``;
const Ul = styled.ul`
  list-style: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 20px;
  padding-top: 40%;
  font-family: "Hanalei", cursive;
`;
const Help = () => (
  <Stylehelp>
    <div>
      HELP:
      <Ul>
        <Li>
          Rotation <FontAwesomeIcon icon={faArrowUp} />
        </Li>
        <Li>
          Drop <FontAwesomeIcon icon={faArrowDown} />
        </Li>
        <Li>
          Right <FontAwesomeIcon icon={faArrowRight} />
        </Li>
        <Li>
          Left <FontAwesomeIcon icon={faArrowLeft} />
        </Li>
      </Ul>
    </div>
  </Stylehelp>
);

export default Help;
