import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersAPI } from "./usersService";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await fetchUsersAPI();
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload);
        },
        updateUser: (state, action) => {
            const index = state.list.findIndex(
                (u) => u.id === action.payload.id
            );
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.list = state.list.filter(
                (u) => u.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
