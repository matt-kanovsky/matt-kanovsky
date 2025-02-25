import { vstack } from 'styled-system/patterns';
import { TulipRed } from './TulipRed';
import { TulipOrange } from './TulipOrange';

type TulipColor = 'red' | 'orange';

interface TulipLogoProps {
  width?: number;
  className?: string;
  leadingTulipColor: TulipColor;
}

export const TulipColumn: React.FC<TulipLogoProps> = ({ width, leadingTulipColor }) => {
  const tulips: Array<TulipColor> =
    leadingTulipColor === 'orange' ? ['orange', 'red', 'orange'] : ['red', 'orange', 'red'];

  return (
    <div className={vstack({ gap: '20px' })}>
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
