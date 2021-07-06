import React, { createContext, useContext, useReducer } from 'react';
import { LOADING, LOGIN, LOGOUT, SET_USER, UNSET_USER, SET_MESSAGES } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    case UNSET_USER:
      return {
        ...state,
        user: null,
        loading: false,
      };

    case LOADING: 
      return {
        ...state,
        loading: true
      }

    case SET_MESSAGES:
      console.log("state", state.currentMessages)
      console.log(action.message)
      return {
        ...state,
        currentMessages: [...state.currentMessages, action.message]
      }

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: false,
    currentMessages: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
