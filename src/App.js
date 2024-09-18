import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, removePost, updateCheck } from "./redux/actions";
import ReactLoading from 'react-loading';
import { Todos } from "./components/Todos";


function App() {
  
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(removePost(id));
  };

  const handleChecked = (id, completed) => {
    dispatch(updateCheck(id, completed));
  };

  return (
    <div className="container">
      <h1>Список дел</h1>
      {loading ? (
        <div className="load"><ReactLoading color="#126fcf" type="spin" height={30} width={30}/></div>
      ) : (
        <Todos 
        handleDelete = {handleDelete}
        handleChecked = {handleChecked}
        />
      )}
    </div>
  );
}

export default App;
