import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  cursor: pointer;
  height: 18px;
  width: 18px;
  z-index: 2;
`;

const CheckboxContent = styled.span`
  line-height: 19px;
  margin-left: 10px;
`;

const Checkbox = ({ label, checked, onChange, value, ...props }) => {
  return (
    <Label>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
        {...props}
      />
      <CheckboxContent>{label}</CheckboxContent>
    </Label>
  );
};

export default Checkbox;
