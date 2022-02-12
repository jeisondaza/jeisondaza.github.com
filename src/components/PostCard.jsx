import "./PostCard.css";

const PostCard = () => {
   return (
      <a href="" className="post_card">
         <img
            className="post_img"
            src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
            alt="post image"
         />
         <h3>Title</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            molestie, est eget scelerisque molestie, eros nibh porttitor mauris,
            eget lobortis felis turpis ut velit...
         </p>
      </a>
   );
};

export default PostCard;
