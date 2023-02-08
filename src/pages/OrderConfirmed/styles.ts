import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-top: 2.5rem;
  max-width: 76rem;
  padding: 0 1rem;
  margin: 0 auto;

  > div {
    h1 {
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
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
`