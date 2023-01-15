import styled from 'styled-components'
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const BaseHeaderItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  outline: 0;
  transition: 0.2s;
`

export const Location = styled(BaseHeaderItem)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']}
  }
`

export const Cart = styled(BaseHeaderItem)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}
  }
`
