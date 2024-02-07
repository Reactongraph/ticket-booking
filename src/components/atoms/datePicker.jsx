import React from "react";
import ReactDatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CustomPickerWrapper = styled.div`
  .react-date-picker__wrapper {
    display: none;
  }
`;

export default function DatePicker({ onChange, value, isOpen, ...props }) {
  return (
    <CustomPickerWrapper>
      <ReactDatePicker
        isOpen={isOpen}
        calendarIcon={null}
        onChange={onChange}
        value={value}
        {...props}
      />
    </CustomPickerWrapper>
  );
}
