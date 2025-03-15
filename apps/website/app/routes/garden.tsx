import { Link } from 'react-router';
import { TulipGarden } from '../components/tulips/TulipGarden';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';

export default function Garden() {
  return (
    <div
      className={css({
        background: '#ACD8E9',
        width: '100%',
        minHeight: '100vh',
        paddingY: '60px',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex'
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          justifySelf: 'center',
          bg: '#008662',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          width: '60%',
          minWidth: '400px',
          paddingTop: '40px',
          paddingBottom: '60px',
          paddingX: '80px'
        })}
      >
        <Link
          to="/home"
          className={css({
            color: 'white',
            fontFamily: 'LettraMono-Medium',
            fontSize: '28px',
            textDecoration: 'none',
            _hover: { textDecoration: 'underline' }
          })}
        >
          enter
        </Link>
        <TulipGarden rows={3} columns={3} />
      </div>
    </div>
  );
}
