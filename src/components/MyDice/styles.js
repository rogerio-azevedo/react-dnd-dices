import styled from "styled-components"
import { darken } from "polished"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const DicesRollContainer = styled.div`
  width: 80%;
  height: 100%;
`

export const PanelContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
`

export const DicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;

  h2 {
    margin-top: 20px;
  }
`

export const LogContainer = styled.div`
  display: flex;
  background: #eee;
  height: 600px;
`

//////

export const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const InputMulti = styled.input`
  height: 32px;
  width: 70px;
  text-align: center;
  font-size: 18px;
  padding: 11px;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
  border: none;
  background: #fff;
  transition: background 0.3s;
  color: #000;
  margin-right: 10px;
  cursor: pointer;

  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`

export const Dice4 = styled.button`
  background: ${(props) => (props.input === "d4" ? "#200122" : "#8e0e00")};
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const Dice6 = styled.div`
  background: ${(props) => (props.input === "d6" ? "#200122" : "#8e0e00")};
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const Dice8 = styled.div`
  background: ${(props) => (props.input === "d8" ? "#200122" : "#8e0e00")};
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const Dice10 = styled.div`
  background: ${(props) => (props.input === "d10" ? "#200122" : "#8e0e00")};
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const Dice12 = styled.div`
  background: ${(props) => (props.input === "d12" ? "#200122" : "#8e0e00")};
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const Dice20 = styled.div`
  background: ${(props) => (props.input === "d20" ? "#200122" : "#8e0e00")};
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const DiceButton = styled.button`
  background: #8e0e00;
  height: 35px;
  width: 48px;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, "#200122")};

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }
`
