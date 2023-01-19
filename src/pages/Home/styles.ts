import styled from 'styled-components'
import background from '../../assets/Background.svg'


export const HomeContainer = styled.div`
  padding: 5.875rem 0 6.75rem;
  position: relative;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  @media (max-width: 768px) {
    padding: 3.875rem 0 3.75rem;
  }
`

export const HomeIntro = styled.section`
  max-width: 76rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(200px, 1.5fr) 1fr;
  gap: 3.5rem;
  justify-content: space-between;
  
  & h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  & p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  & img {
    max-width: 100%;
    display: block;
  }
  @media (max-width: 1366px) {
    & h1 {
      font-size: 2.5rem;
    }

    & p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const HomeList = styled.ul`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;

  @media (max-width: 1366px) {
    margin-top: 2rem;
  }

  @media (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`

export const HomeCoffeesContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 76rem;
  margin: 0 auto;
  & h2 {
    margin-bottom: 3.125rem;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 800;
  }
`

export const HomeCoffees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`
