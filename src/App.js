import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./actions";

function App() {
  const posts = useSelector((state) => state.posts)

  const loading = useSelector((state) => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <>
    <h1>Список постов</h1>
      { 
      loading ? 'Идет загрузка' : (
      posts.map((item) => {
        return (
          <>
           {item.body}
          </>
        )
      })
    )
    }
    </>
  )
}

export default App;
