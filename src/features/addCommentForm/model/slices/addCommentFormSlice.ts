import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
  error: '',
};

export const AddCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const AddCommentFormReducer = AddCommentFormSlice.reducer;
export const AddCommentFormActions = AddCommentFormSlice.actions;
