import Axios from "./config"

export interface IUserLogin {
  name: string,
  email: string
} 
export const login = async ({name, email}: IUserLogin) => {
   const response = await Axios.post('/login', {name, email})
   return response.data
}
