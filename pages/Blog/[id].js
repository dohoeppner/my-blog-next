import Link from "next/link";
import { useRouter } from "next/router";
import { getPostData, getSortedPostsData} from "../../lib/posts";

export default function BlogPost({post}) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{post.title}</h1>
      <p>Fabulous content</p>
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getPostData();
return {
  paths: posts.map((post) => ({params: {post.id}})),
  fallback: false,
}
}


export async function getStaticProps(context) {
  const id = context.params.id;
  const post = await getPostsData();
  return {
    props: {
      post: post,
    },
  };
}
