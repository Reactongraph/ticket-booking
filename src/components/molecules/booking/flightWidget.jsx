import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import SwapIcon from "../../../lib/svg/swap";
import ChevronDown from "../../../lib/svg/chevronDown";
import DatePicker from "../../atoms/datePicker";

const WidgetInner = styled.div`
  width: 100%;
  margin: 0 auto 20px;
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: solid 1px #e7e7e7;
  position: relative;
`;

const InputBox = styled.div`
  ${({ $width }) => $width && `width: ${$width};`}
  height: 112px;
  border-right: solid 1px #e7e7e7;
`;

const LabelBox = styled.label`
  padding: 10px 19px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Label = styled.span`
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  background: none;
  min-width: 140px;
  max-height: 36px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  font-weight: 900;
  font-size: 30px;
`;

const HorizontalStack = styled.span`
  align-items: baseline;
  display: flex;
`;

const SwapCircle = styled.span`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-left: -22px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  cursor: pointer;
`;
export default function FlightWidget() {
  return (
    <WidgetInner>
      <InputBox $width="300px">
        <LabelBox>
          <Label>From</Label>
          <Input value="Delhi" />
          <Typography>DEL, Delhi Airport India</Typography>
        </LabelBox>
      </InputBox>
      <SwapCircle>
        <SwapIcon />
      </SwapCircle>
      <InputBox $width="300px">
        <LabelBox>
          <Label>To</Label>
          <Input value="Mumbai" />
          <Typography>BOM, Mumbai Airport India</Typography>
        </LabelBox>
      </InputBox>

      <InputBox $width="158px">
        <LabelBox>
          <Label>
            Departure <ChevronDown style={{ verticalAlign: "text-top" }} />
          </Label>
          <HorizontalStack>
            <Typography fontSize="30px" fontWeight="900">
              28{" "}
            </Typography>
            <Typography fontSize="20px"> Feb 24</Typography>
          </HorizontalStack>

          <Typography>Wednesday</Typography>
        </LabelBox>
      </InputBox>

      <InputBox $width="158px">
        <LabelBox>
          <Label>
            Return <ChevronDown style={{ verticalAlign: "text-top" }} />
          </Label>
          <HorizontalStack>
            <Typography fontSize="30px" fontWeight="900">
              29{" "}
            </Typography>
            <Typography fontSize="20px"> Feb 24</Typography>
          </HorizontalStack>
          <Typography>Thursday</Typography>
        </LabelBox>
        <DatePicker open={false} />
      </InputBox>

      <InputBox $width="262px">
        <LabelBox>
          <Label>
            Travellers & Class{" "}
            <ChevronDown style={{ verticalAlign: "text-top" }} />
          </Label>
          <HorizontalStack>
            <Typography fontSize="30px" fontWeight="900">
              02{" "}
            </Typography>
            <Typography fontSize="20px"> Travellers</Typography>
          </HorizontalStack>
          <Typography>Economy/Premium Economy</Typography>
        </LabelBox>
        <DatePicker open={false} />
      </InputBox>
    </WidgetInner>
  );
}
