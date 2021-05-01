import { useState, useEffect } from 'react';

//key can be todos, or language, etc etc passed in as a string
function useLocalStorageState(key, defaultVal) {
  //make a piece of state based off of value in localStorage
  //rather than passing in a value, we can pass a function in to UseStates initialval
  const [state, setState] = useState(() => {
    let val;
    try {
      //check local storage
      JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      //if nothing in local storage, set val to default val
      val = defaultVal;
    }
    return val;
  });

  //use useEffect to update localstorage whenver that piece of state changes

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  //hook needs to return the state and the way of setting the state
  return [state, setState];
}

export default useLocalStorageState;

// ex of using the hook
// const [todos, setTodos] = useLocalStorageState("todos", [])
