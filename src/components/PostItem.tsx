import { Link } from "react-router-dom";
import { IPost } from "../types";

const PostItem: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className="flex flex-col items-start text-left max-w-[800px] mb-10 relative w-full">
      <p className="text-2xl font-bold bg-teal-600 px-3 py-1 text-white">
        {post.title}
      </p>
      <div className="text-gray-300 hover:text-red-500 hover:underline cursor-pointer text-right absolute right-0">
        Delete post
      </div>
      <p className="my-4">{post.body.slice(0, 160) + "..."}</p>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="mx-2 first:ml-0 cursor-pointer text-gray-400 hover:text-gray-500 font-bold"
          >
            <Link to={`/tag/${tag}`}>#{tag}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
