const initialState = {
    posts: [],
    loading: false,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "load/posts/start":
        return {
          ...state,
          loading: true,
        };
  
      case "load/posts/fulfilled":
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
  
      case 'delete/posts/start':
        return {
          ...state,
          posts: state.posts.map(post => {
            if (post.id === action.payload) {
              return {
                ...post,
                deleting: true
              }
            }
            return post
          })
        }  
  
      case "delete/todo/fulfilled":
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
  
      case 'check/posts/start':
        return {
          ...state,
          posts: state.posts.map(post => {
            if (post.id === action.payload) {
              return {
                ...post,
                checking: true
              }
            }
            return post
          })
        }
  
      case "check/load/success":
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post.id === action.payload) {
              return {
                ...post,
                completed: !post.completed,
                checking: false
              };
            }
            return post;
          }),
        };
      default:
        return state;
    }
  };