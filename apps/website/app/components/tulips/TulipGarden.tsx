import { css } from '../../../styled-system/css';
import { hstack } from '../../../styled-system/patterns';
import type { SystemStyleObject } from '../../../styled-system/types';
import { TulipColumn } from './TulipColumn';

type TulipGardenProps = {
  rows: number;
  columns: number;
  rowOffset: number;
  css?: SystemStyleObject;
};

export const TulipGarden: React.FC<TulipGardenProps> = ({ rows, columns, rowOffset, css: cssProp }) => {
  return (
    <div
      className={css(
        hstack.raw({
          gap: { base: '30px', lg: '60px' },
          // width: '100vw',
          width: '100%',
          justifySelf: 'center',
          alignItems: 'end',
          justifyContent: 'center'
        }),
        cssProp
      )}
    >
      {Array.from({ length: columns }, (_, i) => (
        <TulipColumn key={i} rows={rows} index={i} style={{ marginBottom: `${i * rowOffset}px` }} />
      ))}
    </div>
  );
};
