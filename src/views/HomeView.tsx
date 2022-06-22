import { db } from "../firebase/confiq";
import { collection, onSnapshot } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { IPost } from "../types";
import PostList from "../components/PostList";

const HomeView: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const collectionRef = collection(db, "posts");

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const result: IPost[] = [];

      snapshot.docs.forEach((doc) => {
        const { title, tags, body } = doc.data();
        const id = doc.id;
        result.push({ id, title, tags, body });
      });

      setIsLoading(false);
      setPosts(result);
    });

    return () => unsubscribe();
  });

  return (
    <>
      <PostList posts={posts} />
      {isLoading && <Spinner />}
    </>
  );
};

export default HomeView;
