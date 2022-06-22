import { IPost } from "../types";
import PostItem from "./PostItem";

const PostList: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col items-start text-left max-w-[800px]">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
