import { Link, type MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Matt Kanovsky | Homage to the Square' },
    { name: 'description', content: 'Matt Kanovsky | Homage to the Square' }
  ];
};

import { flex, grid } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';

const SquareHomage = () => {
  return (
    <div
      className={css({
        width: '100vw',
        maxWidth: { base: '900px', lg: '1100px' },
        maxHeight: '90dvh',
        paddingX: { base: '30px', sm: '40px' },
        paddingY: '100px'
      })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1192 1193" width="100%" height="100%">
        <path
          fill="#803BFF"
          fill-opacity=".24"
          d="M1189.48 0H1.982s1.498 226.5-1 362c-2.499 135.5.5 411 1 463s0 367.5 0 367.5H1189.48s2-174 2-331-2-861.5-2-861.5Z"
        />
        <path
          fill="#3FFFA5"
          fill-opacity=".4"
          d="M123.481 1130h941.999s4-100.5 4-176 2.5-772 2.5-772-235.499.5-277.499-2c-42-2.5-161.5 0-181 0s-490.5 2-490.5 2l.5 948Z"
        />
        <path
          fill="#FF3F3F"
          fill-opacity=".64"
          d="m952.48 357-712.999 3s-1.743 327.5-1.5 368c.242 40.5 2 345.5 2 345.5H949.48l3-716.5Z"
        />
        <path
          fill="#D9D9D9"
          fill-opacity=".6"
          d="M834.48 536.5h-478c0 160.91 2.501 379 2.501 405s-2.501 46.934-2.501 72.5h475.5s0-77 2.5-130.5 0-347 0-347Z"
        />
      </svg>
    </div>
  );
};

function Welcome() {
  return (
    <main>
      <div className={flex({ flexDirection: 'column', height: '100dvh', background: '#010101' })}>
        <div
          className={flex({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -47%)',
            color: 'text'
          })}
        >
          <SquareHomage />
        </div>
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
            height: '100%',
            zIndex: 1
          })}
        >
          <h1
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
          </h1>
          <Link
            to="/aboutme"
            className={css({
              color: 'text',
              alignSelf: 'start',
              justifySelf: 'end',
              pt: '12px',
              alignContent: 'center',
              textAlign: 'center',
              textStyle: 'h2',
              textDecoration: 'none',
              _hover: { textDecoration: 'underline' }
            })}
          >
            who
          </Link>
          <Link
            to="/patience"
            className={css({
              alignSelf: 'end',
              textStyle: 'h2',
              color: 'text',
              textDecoration: 'none',
              _hover: { textDecoration: 'underline' }
            })}
          >
            what
          </Link>
          <Link
            to="/patience"
            className={css({
              textStyle: 'h2',
              alignSelf: 'end',
              justifySelf: 'end',
              color: 'text',
              textDecoration: 'none',
              _hover: { textDecoration: 'underline' }
            })}
          >
            why
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return <Welcome />;
}
