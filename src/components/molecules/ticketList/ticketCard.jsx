import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import FlightIcon from "../../../lib/svg/flight";
import { getHourIn24HoursFormat } from "../../../helpers/functions";

const TicketSection = styled.div`
  display: flex;
`;

const TicketBasic = styled.div`
  margin: auto;
  padding: 0.5em;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  width: 220px;
`;

const TicketAirline = styled.div`
  margin: auto;
  padding: 0.5em;
  border-radius: 10px;
  width: 450px;
  background-color: white;
  font-size: 12px;
`;

const TicketBasicDetails = styled.div`
  float: right;
  position: relative;
  left: -10%;
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BarcodeIcon = styled.i`
  transform: rotate(-90deg) scale(1000%, 500%);
  font-size: 160%;
  position: relative;
  top: 47%;
  left: 20%;
`;

const SeatFlightWrapper = styled.div`
  float: left;
`;

const FlightWrapper = styled.div`
  float: right;
`;

const Item1 = styled.div`
  padding-top: 7%;
  padding-left: 10%;
  padding-right: 10%;
`;

const PlaneIcon = styled.div`
  transform: rotate(45deg);
`;

const FlightInfo = styled.div`
  position: absolute;
  font-size: 100%;
  top: 25%;
  left: 66%;
  text-align: center;
`;

const FromWrapper = styled.div`
  float: left;
`;

const ToWrapper = styled.div`
  padding-left: 50%;
  float: right;
`;

const Item2 = styled.div`
  padding-top: 20%;
  padding-left: 20%;
  padding-right: 20%;
`;

const GateWrapper = styled.div`
  float: left;
`;

const TimeWrapper = styled.div`
  float: right;
`;

const StopInfo = styled.span`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 9999px;
  background-color: #f5f5f5;
`;

const HorizontalStack = styled.div`
  display: flex;
  gap: 20px;
`;
const TicketCard = ({ data }) => {
  return (
    <TicketSection>
      <TicketBasic>
        <TicketBasicDetails>
          <Typography>Airline Name</Typography>
          <Typography fontSize="20px" fontWeight="900">
            {data?.displayData?.airlines[0]?.airlineName}
          </Typography>
          <Typography>Class</Typography>
          <Typography fontSize="20px" fontWeight="900">
            Economy
          </Typography>
          <HorizontalStack>
            <SeatFlightWrapper>
              <Typography>Code</Typography>
              <Typography fontSize="20px" fontWeight="900">
                {data?.displayData?.airlines[0]?.airlineCode}
              </Typography>
            </SeatFlightWrapper>
            <FlightWrapper>
              <Typography>Number</Typography>
              <Typography fontSize="20px" fontWeight="900">
                {data?.displayData?.airlines[0]?.flightNumber}
              </Typography>
            </FlightWrapper>
          </HorizontalStack>
        </TicketBasicDetails>
      </TicketBasic>
      <TicketAirline>
        <Item1>
          <FromWrapper>
            <Typography>Dep.</Typography>
            <Typography fontSize="20px" fontWeight="900">
              {getHourIn24HoursFormat(data?.displayData?.source?.depTime)}
            </Typography>
          </FromWrapper>
          <FlightInfo>
            <PlaneIcon>
              <FlightIcon height="45px" width="45px" />
            </PlaneIcon>
            <StopInfo>{data?.displayData?.stopInfo}</StopInfo>
          </FlightInfo>
          <ToWrapper>
            <Typography>Arr.</Typography>
            <Typography fontSize="20px" fontWeight="900">
              {getHourIn24HoursFormat(data?.displayData?.destination?.arrTime)}
            </Typography>
          </ToWrapper>
        </Item1>
        <Item2>
          <GateWrapper>
            <Typography>Fare</Typography>
            <Typography fontSize="20px" fontWeight="900">
              {data?.fare}
            </Typography>
          </GateWrapper>
          <TimeWrapper>
            <Typography>Total Duration</Typography>
            <Typography fontSize="20px" fontWeight="900">
              {data?.displayData?.totalDuration}
            </Typography>
          </TimeWrapper>
        </Item2>
      </TicketAirline>
    </TicketSection>
  );
};

export default TicketCard;
