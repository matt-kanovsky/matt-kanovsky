import { Link } from 'react-router';
import { css } from '../../styled-system/css';
import me from '../assets/me.png';

export default function AboutMe() {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        padding: { base: '20px', lg: '40px' },
        height: '100dvh',
        background: '#010101'
      })}
    >
      <Link
        to="/home"
        className={css({
          alignSelf: 'start',
          color: 'text',
          textStyle: 'h1',
          position: 'absolute',
          top: { base: '10px', lg: '40px' },
          left: { base: 'inherit', lg: '30px' },
          right: { base: '80px', lg: 'inherit' },
          textDecoration: 'none'
        })}
      >
        back
      </Link>
      <div
        className={css({
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          width: { base: '100%', lg: 'fit-content' },
          gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' }
        })}
      >
        <span
          className={css({
            color: 'text',
            fontSize: { base: '220px', lg: '448px' },
            lineHeight: { base: '220px', lg: '360px' },
            fontFamily: 'EditorialNew-Ultralight',
            alignSelf: 'end',
            textAlign: 'start ',
            overflow: 'hidden'
          })}
        >
          me
        </span>
        <div
          className={css({
            alignSelf: { base: 'end', lg: 'start' },
            justifySelf: { base: 'end', lg: 'inherit' },
            paddingTop: { base: '0px', lg: '100px' },
            paddingBottom: { base: '10px', lg: '0px' },
            paddingRight: { base: '10px', lg: '0px' }
          })}
        >
          <img
            src={me}
            alt="me"
            className={css({
              width: { base: '250px', sm: '400px', lg: '500px' },
              borderRadius: '30px',
              maxWidth: '100%',
              height: 'auto'
            })}
          />
        </div>
      </div>
    </div>
  );
}
