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
`

export const HomeIntro = styled.section`
  max-width: 74rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 37rem  30rem;
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
`

export const HomeList = styled.ul`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
`

export const HomeCoffeesContainer = styled.section`
  padding: 2rem 0;
  max-width: 74rem;
  margin: 0 auto;
`

export const HomeCoffees = styled.div`
  & h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 800;
  }
`
