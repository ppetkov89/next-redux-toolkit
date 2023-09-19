import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "@/redux/postSlice";

const TestClient = () => {
  const posts = useSelector(selectPosts);
  
  return (
    <div onClick={() => console.log("test")}>
      {posts?.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default TestClient;
