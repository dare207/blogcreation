import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from './utils/posts'

export default function Home() {
  const posts = getPosts()

  return (
    <div className="space-y-8 pt-16">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Wanderlust Chronicles</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">Embark on a journey of discovery through our travel experiences</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="transition-opacity duration-300 group-hover:opacity-75 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/all-posts" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          View All Posts
        </Link>
      </div>
    </div>
  )
}

