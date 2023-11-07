import { createContext, useContext, useReducer } from 'react';
import { auth } from "./firebase";

const UserContext = createContext(null);

const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(
    userReducer,
    initialUser
  );

  return (
    <>
      <UserContext.Provider value={user}>
        {/* @ts-ignore  */}
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </>
  );
}


export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

function userReducer(user, action) {
  console.log(action);
  switch (action.action) {
    case 'added': {
      return action.user;
    }
  }
}

const initialUser = auth.currentUser;