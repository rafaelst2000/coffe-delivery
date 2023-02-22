import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
  
  & h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`
export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div:not(.total) {
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors['base-text']};
    }
  }

  > div.total {
    p {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  > button {
    margin-top: 0.7rem;
  }


`