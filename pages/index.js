import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  return (
    <>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}

const examplePosts = [
  {
    id: "example-1",
    title: "Blog Post Example #1",
    date: "2020-01-02",
  },
  {
    id: "example-2",
    title: "Blog Post Example #2",
    date: "2020-01-02",
  },
  {
    id: "example-3",
    title: "Blog Post Example #3",
    date: "2020-01-02",
  },
];
