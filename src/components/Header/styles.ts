import styled from 'styled-components'
import { Link } from "react-router-dom";

export const HeaderContent = styled.header`
  height: 6.5rem;
  position: sticky;
  top: 0;
  padding: 0 1rem;
  background: ${(props) => props.theme.colors['background']};

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
  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.colors['purple-dark']};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-dark']}
  }
`

export const Cart = styled(BaseHeaderItem)`
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  text-decoration: none;
  position: relative;

  & span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.colors['white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.75rem;
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  &:visited {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']}
  }
`
