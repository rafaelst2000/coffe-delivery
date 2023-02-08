import styled from 'styled-components'
import { Link } from "react-router-dom";

export const HeaderContent = styled.header`
  height: 6.5rem;
  position: sticky;
  top: 0;
  padding: 0 1rem;
  background: ${(props) => props.theme['background']};

  > div {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    max-width: 76rem;
    margin: 0 auto;
  }
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
