import "./BlogPost.css";
import PostCard from "./PostCard";

const BlogPost = () => {
   return (
      <section className="container">
         <h2 className="title">Visit my blog</h2>
         <article className="post">
            <PostCard />
            <PostCard />
         </article>
      </section>
   );
};

export default BlogPost;
