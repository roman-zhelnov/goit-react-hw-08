import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "./auth/operations";

export const fetchContacts = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await goitApi.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
