import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "./UserContext";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();
  const url = process.env.REACT_APP_BLOG_URL
  
  useEffect(() => {
    fetch(`${url}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  
  async function deleteBlog(id) {
    if (userInfo.username !== postInfo.author) {
      alert("You are not the author");
    } else{
      
      const url = process.env.REACT_APP_BLOG_URL
      const response = await fetch(`${url}/post/delete/` + id, {
        method: "DELETE",
        body: JSON.stringify({
          postInfo,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setRedirect(true);
      }
      console.log("result");
    }
  }
  if (redirect) {
    return <Navigate to={"/index"} />;
  }

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by {postInfo.author}</div>

      {/* )} */}
      <div className="image">
        <img src={`${url}/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="content"
        style={{ padding: "75px" }}
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
      <button
        onClick={() => deleteBlog(postInfo._id)}
        style={{
          float: "right",
          marginBottom: "35px",
          marginRight: "75px",
          maxWidth: "20pc",
        }}
      >
        Delete Blog
      </button>
    </div>
  );
}
