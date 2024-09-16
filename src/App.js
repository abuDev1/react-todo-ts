import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, removePost } from "./actions";

function App() {
  const posts = useSelector((state) => state.posts)

  const loading = useSelector((state) => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  const handleDelete = (id) => {
    dispatch(removePost(id))
  }

  return (
    <div className="container">
      <h1>Список постов</h1>
      {loading
        ? <div className="load">Идет загрузка ...</div>
        : posts.map((item) => {
            return (
              <div className="posts_wrapper">
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="posts">{item.body}</div>
                <div className="button">
                  <button onClick={() => handleDelete(item.id)}>Удалить</button>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default App;
