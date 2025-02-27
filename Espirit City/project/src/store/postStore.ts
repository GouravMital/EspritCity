import { create } from 'zustand';
import { Post } from '../types';

interface PostState {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'createdAt'>) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  addPost: (newPost) => set((state) => ({
    posts: [{
      ...newPost,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    }, ...state.posts],
  })),
}));