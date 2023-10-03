import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useProfileMutation, UserResponse} from "../services/auth";
import {setUser} from "../features/auth/authSlice";

type Props = {
  children?: React.ReactNode
};

export const AuthWrapper: FC<Props> = ({children}) => {
  const dispatch = useDispatch()
  const [profile, {isLoading}] = useProfileMutation()
  useEffect(() => {
    console.log('init')
    profile(undefined).then(res => {
      const data = res as { data: UserResponse }
      if (data?.data) {
        dispatch(setUser(data.data.user))
      }
      return res
    })
  }, []);


  if (isLoading) {
    return <p>loading</p>
  }


  return <>{children}</>
};