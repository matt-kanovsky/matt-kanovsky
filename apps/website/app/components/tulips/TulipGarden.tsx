import { css } from '../../../styled-system/css';
import { hstack } from '../../../styled-system/patterns';
import type { SystemStyleObject } from '../../../styled-system/types';
import { TulipColumn } from './TulipColumn';

type TulipGardenProps = {
  rows: number;
  columns: number;
  css?: SystemStyleObject;
};

export const TulipGarden: React.FC<TulipGardenProps> = ({ rows, columns, css: cssProp }) => {
  return (
    <div
      className={css(
        hstack.raw({
          gap: { base: '30px', lg: '40px' },
          justifySelf: 'center',
          alignItems: 'end'
        }),
        cssProp
      )}
    >
      {Array.from({ length: columns }, (_, i) => (
        <TulipColumn key={i} rows={rows} index={i} style={{ marginBottom: `${i * 25}px` }} />
      ))}
    </div>
  );
};
