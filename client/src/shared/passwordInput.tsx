import * as React from "react";
import {Input} from "./input";
import {FC} from "react";

type Props = {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput: FC<Props> = ({
                                           name,
                                           onChange,
                                         }) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <Input name={name} placeholder={'Password'} type={show ? 'text': 'password'} onChange={onChange}/>
      <button onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </button>
    </>
  )
}