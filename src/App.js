import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./actions";

function App() {
  const posts = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <>
      { 
      posts.map((item) => {
        return (
          <>
           {item.body}
          </>
        )
      })
    }
    </>
  )
}

export default App;
