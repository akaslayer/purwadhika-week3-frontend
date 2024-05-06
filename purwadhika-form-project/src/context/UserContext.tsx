import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { fetchUserList } from "../utils/FetchUserList";


type User = {
  name: string,
  password: string,
  email: string
}
interface UserContextType {
  userData: User[]
  isSubmit: (query: boolean) => void,
  submit: boolean

}


export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUser] = useState<User[]>([]);
  const [submit, isSubmit] = useState<boolean>(false)

  const fetchData = async () => {
    const data = await fetchUserList()
    setUser(data)
  }
  useEffect(() => {
    fetchData()
  }, [userData, submit])

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <UserContext.Provider value={{ userData, isSubmit, submit }}>
      {children}
    </UserContext.Provider>
  )
}


export const UserContext = createContext<UserContextType | undefined>(undefined)


export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (ctx === undefined) throw new Error("Outside of provider");
  return ctx;
}