// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { Comments } from '@/entities/Comment';

// export const fetchCommentsByArticleId = createAsyncThunk<
//   Comments[],
//   string | undefined,
//   ThunkConfig<string>
// >(
//   'articleDetailComments/fetchCommentsByArticleId',
//   async (articleId, { extra, rejectWithValue }) => {
//     if (!articleId) return rejectWithValue('error');

//     try {
//       const response = await extra.api.get<Comments[]>('/comments', {
//         params: {
//           articleId,
//           _expand: 'user',
//         },
//       });
//       if (!response.data) throw new Error();

//       return response.data;
//     } catch (e) {
//       return rejectWithValue('error');
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comments } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comments[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, { extra, rejectWithValue }) => {
        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comments[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
