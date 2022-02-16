import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <a href={post.url} target="_blank" rel="noreferrer" className="post_card">
      <img className="post_img" src={post.social_image} alt="post image" />
      <h3>{post.title}</h3>
    </a>
  );
};

export default PostCard;
