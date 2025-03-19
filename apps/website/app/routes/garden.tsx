import { Link, type MetaFunction } from 'react-router';
import { TulipGarden } from '../components/tulips/TulipGarden';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';

export const meta: MetaFunction = () => {
  return [{ title: 'Matt Kanovsky | The Garden' }, { name: 'description', content: 'Matt Kanovsky | The Garden' }];
};

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
          width: '75%',
          minWidth: '300px',
          paddingTop: { base: '40px', lg: '40px' },
          paddingBottom: { base: '60px', lg: '60px' },
          maxWidth: '900px'
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
