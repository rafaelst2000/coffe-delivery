import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  & h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`
export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
`