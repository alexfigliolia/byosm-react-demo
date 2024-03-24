import { State } from "my-state";
import { createUseState } from "my-state-react";

export const AppState = new State("App State", {
  counter: 0,
  menuOpen: false
})

export const useAppState = createUseState(AppState)