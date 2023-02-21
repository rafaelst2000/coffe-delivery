import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 4.5rem;
  height: 2.4rem;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 8px;

  & span {
    display: block;
    color:  ${(props) => props.theme.colors['base-title']};
    font-size: 1rem;
    font-weight: 400;
  }

  & svg {
    color:  ${(props) => props.theme.colors['purple']};
    cursor: pointer;

    &:hover {
      color:  ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
