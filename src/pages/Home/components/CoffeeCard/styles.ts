import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  width: 16rem;
  padding: 1.25rem;
  text-align: center;

  & img {
    margin-top: -2.25rem;
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
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
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
    color: ${(props) => props.theme['base-subtitle']};
  }

  & p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    margin-top: 0.5rem;
  }
`
