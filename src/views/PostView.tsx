import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { IPost } from "../types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/confiq";

const PostView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>();
  const [error, setError] = useState<string>("");
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const docRef = doc(db, "posts", id);

  useEffect(() => {
    const getPost = async () => {
      try {
        const docSnap = await getDoc(docRef);
        const { title, tags, body } = docSnap.data() as IPost;
        const id = docSnap.id;
        setPost({ id, title, tags, body });
      } catch (e) {
        setError("Post not found");
      }
      setIsLoading(false);
    };
    getPost();
  }, []);

  return <div>{isLoading ? <Spinner /> : <>{post!.title}</>} </div>;
};

export default PostView;
