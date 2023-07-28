import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "./Editor";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    data.set('author', author);
    ev.preventDefault();
    if (!author || !title || !summary || !content ) {alert ("Fill all details..") }
    else if( !files ) {alert ("No files attached")}
    else {
      setText("Posting..")
      const url = process.env.REACT_APP_BLOG_URL
      console.log(url)
      const response = await fetch(`${url}/post`, {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
      if (response.ok) {
        setRedirect(true);
      }
    }
    
  }
  if (redirect) {
    return <Navigate to={'/index'} />
  }
  return (
    <>
    <form onSubmit={createNewPost} className="blogentry">
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      <Editor value={content} onChange={setContent} />
      <input style={{marginTop:"10px"}} type="text" placeholder="username" value={author}
             onChange={ev => setAuthor(ev.target.value)} />
             <p>{text}</p>
        <button style={{ float: "right", marginTop: "15px", maxWidth: "20pc" }}>
          Post Blog &nbsp; 
        </button>
    </form>
    
             </>
  );
}