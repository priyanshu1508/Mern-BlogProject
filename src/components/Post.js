import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,author,createdAt}) {
  const url = process.env.REACT_APP_BLOG_URL

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`${url}/`+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <p className="author">{author}</p>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
        <Link to={`/post/${_id}`}>
                 <button>Read Blog</button>
        </Link>
      </div>
    </div>
  );
}