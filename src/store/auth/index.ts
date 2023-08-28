import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAuth {
    name: string,
    email: string
    token: string
}

const intialState: IAuth = {
    name: "",
    email: "",
    token: ""
}

export const authReducer = createSlice({
    name: "auth",
    initialState: intialState,
    reducers: {
      changeName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
      },
      changeEmmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      changeToken: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      changeAllValues: (state, action: PayloadAction<IAuth>) => {
        state = action.payload;
      }
    }
});


export default authReducer.reducer