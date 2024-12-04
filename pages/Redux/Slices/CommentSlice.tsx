import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number; // شناسه نظر
  productId: number; // شناسه محصول مرتبط
  userId: number; // شناسه کاربر نویسنده نظر
  text: string; // متن نظر
  rating: number; // امتیاز بین 1 تا 5
  date: string; // تاریخ ارسال نظر
}

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
    removeComment(state, action: PayloadAction<number>) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});

export const { addComment, removeComment } = CommentSlice.actions;
export default CommentSlice.reducer;
