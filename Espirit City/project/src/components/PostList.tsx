import React from 'react';
import { usePostStore } from '../store/postStore';
import { useAuthStore } from '../store/authStore';
import { format } from 'date-fns';

export const PostList = () => {
  const posts = usePostStore((state) => state.posts);
  const { user } = useAuthStore();

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No posts yet. Be the first to share something!
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.content}</p>
          <div className="text-sm text-gray-500">
            Posted {format(new Date(post.createdAt), 'PPp')}
            {post.authorId === user?.id && (
              <span className="ml-2 text-blue-500">(by you)</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};