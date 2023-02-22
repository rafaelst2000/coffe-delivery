import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer, InputWrapper, InputStyled, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
  mask?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>( ({ error, className, rightText, mask, ...props }, ref) => {
  return (
    <InputWrapper className={className}>
      <InputStyleContainer hasError={!!error}>
        <InputStyled mask={mask ? mask : null} onChange={props.onChange} value={props.value} {...props} ref={ref} />
        {rightText && <RightText>{rightText}</RightText>}
      </InputStyleContainer>
      {error && <p>{error}</p>}
    </InputWrapper>
  )
})