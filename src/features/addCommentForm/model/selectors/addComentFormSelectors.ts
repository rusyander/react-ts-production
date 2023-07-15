import { StateSchema } from '@/app/providers/StoreProvider';

export const addComentFormSelectorsText = (state: StateSchema) =>
  state.addCommentForm?.text || '';

export const addComentFormSelectorsError = (state: StateSchema) =>
  state.addCommentForm?.error || '';
