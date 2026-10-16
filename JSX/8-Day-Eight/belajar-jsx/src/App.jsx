import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0)

  const tambahLike = () => {
    setLikes(likes + 1);
  };

  return(
    <div>
      <h2>Total Like: {likes}</h2>
      <button onClick={tambahLike}>Like</button>
    </div>
  )
}

export default App;