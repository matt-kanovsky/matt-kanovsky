import { TulipRed } from './TulipRed';
import { TulipOrange } from './TulipOrange';
import type { SystemStyleObject } from 'styled-system/types';
import { vstack } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';
import { AnimatedTulip } from './AnimatedTulip';

type TulipColor = 'red' | 'orange';

interface TulipLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  rows: number;
  index: number;
  css?: SystemStyleObject;
}

export const TulipColumn: React.FC<TulipLogoProps> = ({ rows, index, css: cssProp, ...props }) => {
  let currentColor: TulipColor = index % 2 === 0 ? 'red' : 'orange';
  const className = css(
    vstack.raw({ gap: { base: '20px', lg: '30px' }, width: { base: '50px', lg: '70px' } }),
    cssProp
  );
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
            return (
              <AnimatedTulip>
                <TulipRed />
              </AnimatedTulip>
            );
          case 'orange':
            return (
              <AnimatedTulip>
                <TulipOrange />
              </AnimatedTulip>
            );
        }
      })}
    </div>
  );
};
