import React from "react";
import styled from "styled-components";

const TypographyStyle = styled.p`
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}
  ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  margin: 0px;
`;

export default function Typography({
  children,
  fontSize = "14px",
  fontWeight = "400",
  textAlign = "left",
}) {
  return (
    <TypographyStyle
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
    >
      {children}
    </TypographyStyle>
  );
}
