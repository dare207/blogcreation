import { getPostBySlug, getPosts } from '../../utils/posts'
import Image from 'next/image'
import CommentSection from '../../components/CommentSection'

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  return {
    title: post?.title,
    description: post?.description,
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="max-w-4xl mx-auto pt-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600 dark:text-gray-400">
        <span>{post.date}</span> • <span>{post.author}</span>
      </div>
      <div className="relative h-96 mb-8">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Share Your Travel Experience</h2>
        <CommentSection postSlug={params.slug} />
      </div>
    </article>
  )
}

