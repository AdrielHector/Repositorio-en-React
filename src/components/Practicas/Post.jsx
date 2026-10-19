import {useState} from "react" 

const Post = ({titulo, contenido, autor}) => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <p><strong>Autor:</strong> {autor}</p>
      <button onClick={() => setLike(!like) } > ❤️ {like ? "Like" : "Dislike"}</button>
    </div>  
  )
}

export default Post