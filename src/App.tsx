import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { Todos } from "./components/Todos";
import { useTypedSelector } from "./hooks";
import { useActions } from "./hooks/useActions";

export const App: React.FC = () => {
  const loading: boolean = useTypedSelector((state) => state.loading);
  const loadingUsers: boolean = useTypedSelector((state) => state.loadingUsers);

  const waiting: boolean = loading || loadingUsers;

  const {loadtodos, loadUsers, updateCheck, removetodo} = useActions()

  useEffect((): void => {
    loadtodos();
    loadUsers();
  }, []);

  const handleDelete = (id: number): void => {
    removetodo(id);
  };

  const handleChecked = (id: number, completed: boolean): void => {
    updateCheck(id, completed);
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

