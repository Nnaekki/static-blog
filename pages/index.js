import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@/components/Post";
import {sortByDate} from '../utils'

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-30 gap-10 p-20 sm:p-10 sm:gap-5 lg:w-2/3 lg:m-auto">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}

    </div>
  )
}

export async function getStaticProps() {
  // To get files from post directory
  const files = fs.readdirSync(path.join("posts"));

  // To get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // To create slug
    const slug = filename.replace(".md", "");

    // To get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
