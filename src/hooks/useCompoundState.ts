import { Reducer, useReducer } from 'react';

type Actions<T> = {
  [K in keyof T]: {
    key: K;
    value: T[K];
  };
}[keyof T];

function createReducer<T>(): Reducer<T, Actions<T>> {
  return (state, action) => ({
    ...state,
    [action.key]: action.value
  })
}

export default function useCompoundState<T extends Object>(initialState: T): [T, (state: Partial<T>) => void, () => void] {
  const [state, updateState] = useReducer(createReducer<T>(), initialState);

  function reset() {
    if (initialState) {
      Object.entries(initialState).forEach(([key, value]) => {
        updateState({ key: key as keyof T, value: value as T[keyof T] });
      });
    }
  }

  function dispatch(state: Partial<T>) {
    if (typeof state === 'object') {
      Object.entries(state).forEach(([key, value]) => {
        updateState({ key: key as keyof T, value: value as T[keyof T] });
      });
    }
  }

  return [state, dispatch, reset];
}