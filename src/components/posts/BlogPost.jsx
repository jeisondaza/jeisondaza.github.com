import { useFetch } from "~/hooks/useFetch";
import "./BlogPost.css";
import PostCard from "./PostCard";

const BlogPost = () => {
  const { data } = useFetch(
    "https://dev.to/api/articles?username=jeisondaza21"
  );
  return (
    <section className="fullHeight container">
      <h2 className="title">Visit my blog</h2>
      <article className="post">
        {data.map((el, index) => (
          <PostCard post={el} key={index} />
        ))}
      </article>
    </section>
  );
};

export default BlogPost;
