import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 1200px;
  ${({ $width }) => ($width && `width: ${$width};`)}
  margin: 0 auto;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 60px 20px 0;
`;

export default function Card({ children, width="100%" }) {
  return <Div $width={width}>{children}</Div>;
}
