import { NavLink } from 'react-router';
import { css } from 'styled-system/css';
import { TulipColumn } from '~/components/tulips/TulipColumn';
import { flex, hstack } from 'styled-system/patterns';

export default function Garden() {
  return (
    <div className={css({ background: '#ACD8E9', height: '100vh', width: '100%', padding: '100px' })}>
      <div
        className={flex({
          flexDirection: 'column',
          bg: '#008662',
          height: '100%',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        })}
      >
        <NavLink to="/home" end>
          Enter
        </NavLink>
        <div className={hstack({ gap: '20px', justifySelf: 'center' })}>
          <TulipColumn leadingTulipColor="red" />
          <TulipColumn leadingTulipColor="orange" />
          <TulipColumn leadingTulipColor="red" />
        </div>
      </div>
    </div>
  );
}
