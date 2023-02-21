import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  width: 16rem;
  padding: 1.25rem;
  text-align: center;
  transition: 0.2s;

  & img {
    margin-top: -2.25rem;
    height: 6.25rem;
    width: 6.25rem;
  }

  & ul {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    flex-wrap: wrap;

    & li {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors['yellow-dark']};
      background: ${(props) => props.theme.colors['yellow-light']};
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
      font-size: 0.625rem;
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }

  & h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  & p {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    margin-top: 0.5rem;
  }
`

export const CardActions = styled.div `
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .action-item-side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CardPrice = styled.div `
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.875rem;

  & span {
    font-family: 'Baloo 2' sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  outline: 0;
  transition: 0.2s;
  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors['white']};
  text-decoration: none;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors['purple']};
  }
`