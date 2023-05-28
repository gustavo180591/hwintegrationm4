import styled from "styled-components";

import {ReactComponent as MagnifyingGlass} from "../../assets/lupa.svg";

export const SearchContainer = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  justify-content: center;
  margin-top: 23px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: solid #39ff14 1px;
  border-radius: 7px 0px 0px 7px;
  background: rgb(44, 46, 49);
  color: #39ff14;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px #808080;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 20px;
  height: 30px;
  fill: #39ff14;

  &:hover {
    scale: 1.1;
  }
`;

export const SearchIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: black;
  padding: 10px;
  border: solid #39ff14 1px;
  border-radius: 0px 7px 7px 0px;

  &:hover {
    box-shadow: inset 0 0 10px #39ff14;
  }
`;
