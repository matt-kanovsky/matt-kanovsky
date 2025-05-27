import { Tulip } from './Tulip';
import type { SystemStyleObject } from 'styled-system/types';
import { css } from '../../../styled-system/css';
import type { TulipColor } from './types';

interface TulipLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  rows: number;
  index: number;
  css?: SystemStyleObject;
}

export const TulipColumn: React.FC<TulipLogoProps> = ({ rows, index, css: cssProp, ...props }) => {
  let currentColor: TulipColor = index % 2 === 0 ? 'red' : 'orange';
  const className = css(
    {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: { base: '20px', lg: '30px' },
      width: { base: '50px', lg: '70px' },
      marginBottom: 'calc(var(--column-index) * 25px)'
    },
    cssProp
  );
  const tulips: TulipColor[] = [];

  for (let i = 0; i < rows; i++) {
    tulips.push(currentColor);
    currentColor = currentColor === 'red' ? 'orange' : 'red';
  }

  return (
    <div className={className} {...props}>
      {tulips.map((color) => (
        <Tulip tulipColor={color} />
      ))}
    </div>
  );
};
