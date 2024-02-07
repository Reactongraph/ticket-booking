import React from 'react'
import styled from "styled-components";

const Banner = styled.div`
  ${({ $src }) => ($src && `background-image: url(${$src}), linear-gradient(to bottom, #051322, #15457c);`)}
  background-repeat: no-repeat;
  background-size: cover;
  height: 540px;
  `;

export default function MainBanner() {
  return (
    <Banner $src="/images/background-image/bg2.jpg" />
  )
}
