import styled from 'styled-components'

const ICON_COLORS = {
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface IconColorsProps {
  iconColor: keyof typeof ICON_COLORS
}

export const InfoListItem = styled.li<IconColorsProps>`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    color: ${(props) => props.theme['background']};
    background: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};;
    border-radius: 1000px;
  }

  & span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }
`
