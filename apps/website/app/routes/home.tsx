import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'You ended up here' }];
};

import { NavLink } from 'react-router';
import { css } from 'styled-system/css';
import { flex, grid } from 'styled-system/patterns';

function Welcome() {
  return (
    <main>
      <div className={flex({ flexDirection: 'column', height: '100vh' })}>
        <header>Ayo ! How did you end up here ?</header>
        <nav
          className={flex({
            flexDirection: 'column',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <p>Learn ?</p>
          <NavLink to="/aboutme" end>
            About Me
          </NavLink>
        </nav>
        <div
          className={grid({
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          })}
        >
          <div className={css({ alignSelf: 'start' })}>MATT</div>
          <div className={css({ alignSelf: 'start', justifySelf: 'end' })}>who</div>
          <div className={css({ alignSelf: 'end' })}>what</div>
          <div className={css({ alignSelf: 'end', justifySelf: 'end' })}>why</div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return <Welcome />;
}
