import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: null,
  email: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.nombre = action.payload.nombre;
      state.email = action.payload.email;
    },
    setUserLogOutState: state => {
      state.nombre = null,
      state.email = null
    }
  },
});

// Funciones para usar en cualquier lado
export const { setActiveUser, setUserLogOutState } = userSlice.actions;

// export const selectorNombre = state => state.userSlice.nombre
// export const selectorEmail = state => state.userSlice.email

// Exportamos el reducer en general
export default userSlice.reducer;

