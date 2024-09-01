import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchUsers } from "../axios/fetchUsers";
import { UserState } from "./types/userState";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  nameFilter: '',
  usernameFilter: '',
  emailFilter: '',
  phoneFilter: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    flterName: (state, action: PayloadAction<string>) => {
      state.nameFilter = action.payload;
    },
    filterUserName: (state, action: PayloadAction<string>) => {
      state.usernameFilter = action.payload;
    },
    filterEmail: (state, action: PayloadAction<string>) => {
      state.emailFilter = action.payload;
    },
    filterPhone: (state, action: PayloadAction<string>) => {
      state.phoneFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, _) => {
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    })
      .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  },
})


export const { flterName, filterUserName, filterEmail, filterPhone } = usersSlice.actions;
export const userReducer =  usersSlice.reducer;