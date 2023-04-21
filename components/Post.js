import Link from "next/link"



function Post({post}) {
  return (
    <div className="p-5 rounded-md shadow-2md">
        <img src={post.frontmatter.img} alt="" className="h-auto"/>
        <div className="bg-zinc-100 mb-5 px-5 text-center">Posted on {post.frontmatter.date}</div>

        <h3 className="text-xl text-left">{post.frontmatter.title}</h3>
        <p className="py-5 leading-7">{post.frontmatter.description}</p>

      <Link href={`/blog/${post.slug}`} className="inline-block bg-green-300 border-0 rounded-md px-3 py-2 cursor-pointer focus:outline-none hover:transform-scale(0.98)">Read More
      </Link>
    </div>
  )
}

export default Post