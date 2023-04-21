import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

function PostPage({frontmatter: {title, date, img}, slug, content}) {
  return (
    <div className='bg-white lg:w-2/3 lg:m-auto'>
    <Link href='/'> <button className='bg-green-100 inline-block text-black mb-20 border-0 rounded-md text-lg px-5 cursor-pointer focus:outline-none hover:transform-scale(0.98)'> 
        Go Back
        </button> </Link>
    <div className="p-15 rounded-10 shadow-2md px-20">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <div className="bg-zinc-50 text-md/9 text-center px-10 py-3 mb-10">Posted on {date}</div>
        <img src={img} alt=''/>
        <div className="justify-center font-bold text-lg/9 m-10 pb-10">
            <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>
    </div>
    </div>
  )
}

export default PostPage

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return{
        paths,
        fallback: false,
    }

}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }

}