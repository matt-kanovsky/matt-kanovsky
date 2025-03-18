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
        paddingY: '20px',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex'
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          justifySelf: 'center',
          alignSelf: 'center',
          bg: '#008662',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '60%',
          minWidth: '280px',
          paddingTop: { base: '10px', lg: '30px' },
          paddingBottom: { base: '20px', lg: '50px' },
          paddingX: '30px',
          height: '80dvh',
          minHeight: '560px'
        })}
      >
        <Link
          to="/home"
          className={css({
            color: 'white',
            fontFamily: 'LettraMono-Medium',
            fontSize: {
              base: '36px',
              lg: '64px'
            },
            textDecoration: 'none',
            _hover: { textDecoration: 'underline' }
          })}
        >
          enter
        </Link>
        <TulipGarden rows={3} columns={5} css={{ display: { base: 'none', lg: 'flex' } }} />
        <TulipGarden rows={3} columns={3} css={{ display: { base: 'flex', lg: 'none' } }} />
      </div>
    </div>
  );
}
