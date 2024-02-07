import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: 34px;
  ${({ $background }) => $background && `background: ${$background};`}
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2);
  display: inline-block;
  flex-shrink: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  border: 0;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  width: 216px;
  padding: 10px;
`;

export default function Button({
  children,
  background = "linear-gradient(93deg, #53b2fe, #065af3)",
  ...props
}) {
  return (
    <ButtonStyle $background={background} {...props}>
      {children}
    </ButtonStyle>
  );
}
