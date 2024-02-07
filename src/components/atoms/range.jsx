import React from "react";
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import styled from "styled-components";

const RangeContainer = styled.div`
  width: 90%;
`;

const PriceRangeSlider = ({ onChange }) => (
  <RangeContainer>
    <RangeSlider
      onChange={onChange}
      defaultValue={[1000, 50000]}
      max={50000}
      min={1000}
    />
  </RangeContainer>
);

export default PriceRangeSlider;
