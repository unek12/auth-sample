import React, {FC} from "react";

type Props = {
  name: string
  placeholder: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = ({
                                   name,
                                   placeholder,
                                   type,
                                   onChange,
                                 }) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  )
}