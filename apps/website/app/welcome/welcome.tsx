import { NavLink } from 'react-router';

export function Welcome() {
  return (
    <main>
      <div>
        <header>Ayo ! How did you end up here ?</header>
        <nav>
          <p>Learn ?</p>
          <NavLink to="/aboutme" end>
            About Me
          </NavLink>
        </nav>
      </div>
    </main>
  );
}
