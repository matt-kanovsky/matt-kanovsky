import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';

export default function Placeholder() {
  return (
    <div
      className={flex({
        bg: '#008662',
        height: '100dvh',
        alignItems: 'center',
        justifyContent: 'center'
      })}
    >
      <span
        className={css({
          paddingX: '20px',
          paddingTop: '30px',
          position: 'absolute',
          color: 'white',
          fontFamily: 'LettraMono-Medium',
          fontSize: {
            base: '48px',
            lg: '100px'
          }
        })}
      >
        patience. time!
      </span>
    </div>
  );
}
