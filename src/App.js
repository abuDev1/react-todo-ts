import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { Todos } from "./components/Todos";
import { loadTodos, removeTodo, updateCheck } from "./redux/TodosSlice";
import { loadUsers } from "./redux/UsersSlice";

function App() {
  const loading = useSelector((state) => state.todos.loading);
  const loadingUsers = useSelector((state) => state.users.loadingUsers);

  const waiting = loading || loadingUsers;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChecked = (id, completed) => {
    dispatch(updateCheck({id: id, completed: completed}));
  };

  return (
    <div className="container">
      <h1>Список дел</h1>
      {waiting ? (
        <div className="load">
          <ReactLoading color="#126fcf" type="spin" height={30} width={30} />
        </div>
      ) : (
        <Todos handleDelete={handleDelete} handleChecked={handleChecked} />
      )}
    </div>
  );
}

export default App;
