import { posts } from '../data/posts'

export function getPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

