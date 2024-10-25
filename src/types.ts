export interface initialStateTyped {
    todos: any[]
    users: any[]
    loading: boolean
    loadingUsers: boolean
    deleting?: boolean
    checking?: boolean
    completed?: boolean
  }

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_DELETE = 'FETCH_DELETE',
    FETCH_DELETE_FULFILLED = 'FETCH_DELETE_FULFILLED',
    FETCH_CHECK = 'FETCH_CHECK',
    FETCH_CHECK_SUCCESS = 'FETCH_CHECK_SUCCESS',
    FETCH_LOAD = 'FETCH_LOAD',
    FETCH_LOAD_SUCCESS = 'FETCH_LOAD_SUCCESS'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface FetchDeleteAction {
    type: TodoActionTypes.FETCH_DELETE,
    payload: number
}

interface FetchDeleteActionFulfilled {
    type: TodoActionTypes.FETCH_DELETE_FULFILLED,
    payload: number
}

interface FetchCheckAction {
    type: TodoActionTypes.FETCH_CHECK,
    payload: number
}

interface FetchCheckActionSUCCESS {
    type: TodoActionTypes.FETCH_CHECK_SUCCESS,
    payload: number
}

interface FetchLoadAction {
    type: TodoActionTypes.FETCH_LOAD
}

interface FetchLoadActionSUCCESS {
    type: TodoActionTypes.FETCH_LOAD_SUCCESS,
    payload: any[]
}


export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchDeleteAction | FetchDeleteActionFulfilled | FetchCheckAction | FetchCheckActionSUCCESS | FetchLoadAction | FetchLoadActionSUCCESS


