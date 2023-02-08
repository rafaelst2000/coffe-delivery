import styled from 'styled-components'

export const CompleteOrderContainer = styled.form `
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 76rem;
  padding: 0 1rem;
  margin: 0 auto;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`