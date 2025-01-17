import { NavLink } from 'react-router';

export function Welcome() {
  return (
    <main>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header>Ayo ! How the mother f did you end up here ?</header>
        <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">Learn ?</p>
          <NavLink to="/aboutme" end>
            About Me
          </NavLink>
        </nav>
      </div>
    </main>
  );
}
