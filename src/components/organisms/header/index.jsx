import React from "react";
import styled from "styled-components";
import NavItem from "./navItem";
import FlightIcon from "../../../lib/svg/flight";
import HotelIcon from "../../../lib/svg/hotel";
import HomeIcon from "../../../lib/svg/home";
import UmbrellaIcon from "../../../lib/svg/umbrella";
import TrainIcon from "../../../lib/svg/train";
import BusIcon from "../../../lib/svg/bus";
import CabIcon from "../../../lib/svg/cab";
import CashIcon from "../../../lib/svg/cash";
import InsuranceIcon from "../../../lib/svg/insurance";

const HeaderOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 84px;
`;

const HeaderWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 0;
`;

const Nav = styled.nav`
  height: 100px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 8px 30px;
`;

const NavItems = styled.ul`
  gap: 40px;
  padding: 0px;
  display: flex;
  list-style: none;
`;

const navItemsList = [
  {
    title: "Flights",
    icon: <FlightIcon />,
  },
  {
    title: "Hotels",
    icon: <HotelIcon />,
  },
  {
    title: "Homestays & Villas",
    icon: <HomeIcon />,
  },
  {
    title: "Holiday Packages",
    icon: <UmbrellaIcon />,
  },
  {
    title: "Trains",
    icon: <TrainIcon />,
  },
  {
    title: "Buses",
    icon: <BusIcon />,
  },
  {
    title: "Cabs",
    icon: <CabIcon />,
  },
  {
    title: "Forex Card & Currency",
    icon: <CashIcon />,
  },
  {
    title: "Travel Insurance",
    icon: <InsuranceIcon />,
  },
];

export default function Header() {
  return (
    <HeaderOuter>
      <HeaderWrapper>
        <Nav>
          <NavItems>
            {navItemsList.map(({ title, icon }, index) => (
              <NavItem title={title} icon={icon} key={index} />
            ))}
          </NavItems>
        </Nav>
      </HeaderWrapper>
    </HeaderOuter>
  );
}
