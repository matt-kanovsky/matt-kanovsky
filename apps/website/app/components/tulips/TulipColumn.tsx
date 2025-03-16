import { TulipRed } from './TulipRed';
import { TulipOrange } from './TulipOrange';
import type { SystemStyleObject } from 'styled-system/types';
import { vstack } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';

type TulipColor = 'red' | 'orange';

interface TulipLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  rows: number;
  index: number;
  css?: SystemStyleObject;
}

export const TulipColumn: React.FC<TulipLogoProps> = ({ width, rows, index, css: cssProp, ...props }) => {
  let currentColor: TulipColor = index % 2 === 0 ? 'red' : 'orange';
  const className = css(vstack.raw({ gap: '20px' }), cssProp);
  const tulips: TulipColor[] = [];

  for (let i = 0; i < rows; i++) {
    tulips.push(currentColor);
    currentColor = currentColor === 'red' ? 'orange' : 'red';
  }

  return (
    <div className={className} {...props}>
      {tulips.map((color) => {
        switch (color) {
          case 'red':
            return <TulipRed width={width} />;
          case 'orange':
            return <TulipOrange width={width} />;
        }
      })}
    </div>
  );
};
