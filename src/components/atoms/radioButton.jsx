import React from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  gap: 1em;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  font-size: inherit;
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.5em;
`;

const RadioButton = ({ data = [], onClick }) => {
  return (
    <ButtonBox>
      {data.map(({ label, Checked = false, name, value }, index) => (
        <RadioLabel key={index}>
          <RadioInput
            type="radio"
            name={name || `radio${index}`}
            value={value}
            onClick={onClick}
            defaultChecked={Checked}
          />
          {label}
        </RadioLabel>
      ))}
    </ButtonBox>
  );
};

export default RadioButton;
