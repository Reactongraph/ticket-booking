import React from "react";
import styled from "styled-components";
import RadioButton from "../../atoms/radioButton";

const OptionSection = styled.div`
  display: flex;
  padding: 5px;
`;

const optionList = [
  {
    label: "One Way",
    value: "One Way",
  },
  {
    label: "Round Trip",
    value: "Round Trip",
  },
];

export default function BookingOptions() {
  return (
    <OptionSection>
      <RadioButton data={optionList} />
    </OptionSection>
  );
}
