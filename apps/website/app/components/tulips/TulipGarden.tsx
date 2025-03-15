import { hstack } from '../../../styled-system/patterns';
import { TulipColumn } from './TulipColumn';

type TulipGardenProps = {
  rows: number;
  columns: number;
};

export const TulipGarden: React.FC<TulipGardenProps> = ({ rows, columns }) => {
  return (
    <div className={hstack({ gap: '30px', justifySelf: 'center', alignItems: 'end' })}>
      {Array.from({ length: columns }, (_, i) => (
        <TulipColumn key={i} rows={rows} index={i} style={{ marginBottom: `${i * 25}px` }} />
      ))}
    </div>
  );
};
