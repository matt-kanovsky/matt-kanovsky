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
          gap: { base: '30px', lg: '60px' },
          justifySelf: 'center',
          alignItems: 'end',
          height: { base: 'calc(100% - 54px - 10px)', lg: 'calc(100% - 96px - 10px)' },
          paddingTop: { base: '55px', lg: '100px' }
        }),
        cssProp
      )}
    >
      {Array.from({ length: columns }, (_, i) => (
        <TulipColumn key={i} rows={rows} index={i} style={{ '--column-index': i } as React.CSSProperties} />
      ))}
    </div>
  );
};
