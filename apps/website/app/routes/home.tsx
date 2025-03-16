import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'You ended up here' }];
};

import { NavLink } from 'react-router';
import { flex, grid } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';

function Welcome() {
  return (
    <main>
      <div className={flex({ flexDirection: 'column', height: '100dvh', background: '#010101' })}>
        <nav
          className={flex({
            flexDirection: 'column',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'text'
          })}
        >
          <span>Learn ?</span>
          <NavLink to="/aboutme" end>
            About Me
          </NavLink>
        </nav>
        <div
          className={grid({
            padding: {
              base: '20px',
              sm: '30px'
            },
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%'
          })}
        >
          <span
            className={css({
              alignSelf: 'start',
              color: 'text',
              textStyle: 'h1'
            })}
          >
            <span>matt</span>
            &nbsp;
            <span
              className={css({
                display: {
                  base: 'none',
                  lg: 'inline'
                }
              })}
            >
              kanovsky
            </span>
          </span>
          <span
            className={css({
              color: 'text',
              alignSelf: 'start',
              justifySelf: 'end',
              pt: '12px',
              alignContent: 'center',
              textAlign: 'center',
              textStyle: 'h2'
            })}
          >
            who
          </span>
          <div className={css({ alignSelf: 'end', textStyle: 'h2', color: 'text' })}>what</div>
          <div
            className={css({
              textStyle: 'h2',
              alignSelf: 'end',
              justifySelf: 'end',
              color: 'text'
            })}
          >
            why
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return <Welcome />;
}
