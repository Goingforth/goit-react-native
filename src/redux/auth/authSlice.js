import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    login: null,
    email: null,
    imageUser: null,
    stateChange: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            login: payload.login,
            email: payload.email,
            imageUser: payload.imageUser,
        }),
        authStateChange: (state, { payload }) => ({
            ...state,
            stateChange: payload.stateChange,
        }),
        authSignOut: () => initialState,
    },
},
);

export const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;
export const authReducer = authSlice.reducer;