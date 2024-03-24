import { memo } from "react";
import { useAppState } from "./AppState";

export const Menu = memo(function Menu() {

  const open = useAppState(state => state.menuOpen)

  return (
    <nav className={`nav ${open ? 'open' : ''}`}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Blog</a>
    </nav>
  );
}, () => true)