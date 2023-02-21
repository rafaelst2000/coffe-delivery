import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 76rem;
  padding: 0 1rem;
  margin: 5rem auto 0;

  > div {
    h1 {
      color: ${(props) => props.theme.colors['yellow-dark']};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
    }

    p {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: 1.25rem
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['background']};
  min-width: 32rem;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.86%);
  }
`