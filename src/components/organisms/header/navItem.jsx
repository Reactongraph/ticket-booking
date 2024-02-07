import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";

const Item = styled.li`
  position: relative;
  flex-shrink: 0 !important;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 72px;
`;

const ItemIcon = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

export default function NavItem({ title, icon }) {
  return (
    <Item>
      <ItemWrapper>
        <ItemIcon>{icon}</ItemIcon>
        <Typography textAlign="center">{title}</Typography>
      </ItemWrapper>
    </Item>
  );
}
