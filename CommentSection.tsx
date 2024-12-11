'use client'

import { useState } from 'react'

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState([
    { id: 1, author: 'John Doe', content: 'Great article!', date: '2023-05-01' },
    { id: 2, author: 'Jane Smith', content: 'Very informative, thanks!', date: '2023-05-02' },
  ])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: 'Anonymous',
          content: newComment,
          date: new Date().toISOString().split('T')[0],
        },
      ])
      setNewComment('')
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4 mb-8">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Comment
        </button>
      </form>
    </div>
  )
}

