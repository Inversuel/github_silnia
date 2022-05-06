import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { githubRepos } from "../lib/interfaces";

const url = "https://api.github.com/";

export const getGithubProfile = createAsyncThunk(
  `users/`,
  async (userName: String) => {
    return await axios
      .get(url + `users/${userName}/repos`)
      .then((res) => res.data)
      .catch((err) => err.data);
  }
);


export interface githubState {
  error: string;
  isLoading: boolean;
  userName: string;
  githubRepo: {data : githubRepos | null};
}

const initialState: githubState = {
  isLoading: false,
  error: "",
  userName: "",
  githubRepo: {data: null},
};

export const githubSliect = createSlice({
  name: "github",
  initialState,
  extraReducers: {
    //@ts-ignore
    [getGithubProfile.pending]: (state: { isLoading: boolean }) => {
      state.isLoading = true;
    },
    //@ts-ignore
    [getGithubProfile.fulfilled]: (
      state: { isLoading: boolean; githubRepo: {data: githubRepos} },
      action: any
    ) => {
      state.isLoading = false;
      state.githubRepo.data = action.payload.sort(
        (a: any, b: any) =>
        //@ts-ignore
          new Date(b.updated_at) - new Date(a.updated_at)
      ).slice(0, 5);
    },
    //@ts-ignore
    [getGithubProfile.rejected]: (state: { isLoading: boolean, error:string }, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});
export const { setUserName, setError } = githubSliect.actions;
export default githubSliect.reducer;
