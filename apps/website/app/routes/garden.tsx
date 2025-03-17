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
        minHeight: '100dvh',
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
          width: '70%',
          // minWidth: '400px',
          paddingTop: '40px',
          paddingBottom: '60px',
          paddingX: { base: '40px', lg: '80px' }
        })}
      >
        <Link
          to="/home"
          className={css({
            color: 'white',
            fontFamily: 'LettraMono-Medium',
            fontSize: {
              base: '24px',
              lg: '64px'
            },
            textDecoration: 'none',
            _hover: { textDecoration: 'underline' }
          })}
        >
          enter
        </Link>
        <TulipGarden rows={3} columns={5} rowOffset={50} css={{ display: { base: 'none', lg: 'flex' } }} />
        <TulipGarden rows={3} columns={3} rowOffset={25} css={{ display: { base: 'flex', lg: 'none' } }} />
      </div>
    </div>
  );
}
