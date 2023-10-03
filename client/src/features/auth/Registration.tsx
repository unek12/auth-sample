import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setCredentials} from './authSlice'

import {useLoginMutation} from '../../services/auth'
import type {LoginRequest} from '../../services/auth'
import {PasswordInput} from "../../shared/passwordInput";
import {Input} from "../../shared/input";

export const Registration = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const toast = useToast()

  const [formState, setFormState] = React.useState<LoginRequest>({
    username: '',
    password: '',
  })

  const [login, {isLoading}] = useLoginMutation()

  const handleChange = ({
                          target: {name, value},
                        }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({...prev, [name]: value}))

  return (
    <div>
      <div>
        <p>Hint: enter anything, or leave it blank and hit login</p>
        <div>
          <Input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Email"
          />
        </div>

        <div>
          <PasswordInput onChange={handleChange} name="password"/>
        </div>
        <button
          onClick={async () => {
            try {
              const user = await login(formState).unwrap()
              dispatch(setCredentials(user))
              navigate('/')
            } catch (err) {
              // toast({
              //   status: 'error',
              //   title: 'Error',
              //   description: 'Oh no, there was an error!',
              //   isClosable: true,
              // })
            }
          }}
        >
          Register
        </button>
        <div/>
      </div>
    </div>
  )
}
