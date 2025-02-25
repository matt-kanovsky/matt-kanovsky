import React from 'react';

interface TulipLogoProps {
  width?: number;
  className?: string;
}

export const TulipOrange: React.FC<TulipLogoProps> = ({ width = 53, className }) => {
  return (
    <svg width={width} viewBox="0 0 53 133" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fill="#FDEB7F"
        d="M1 80c12.61 0 17.82 6.713 19.16 13.308L19.529 87V61.5l7.322 1v5.334L29 90.5c-.07-15 14.494-18.194 19-16.5 0 18-13.33 21.564-19.15 21L27 133s-7.471-.5-7.471-6.5V101C6 100.177 1 93 1 80Z"
      />
      <path
        fill="#FDEB7F"
        d="M0 39.816V7.5c18.745 0 24.341 16.38 24.341 24.79C24.341 23.88 31.5 0 48 0v25c0 6.994-1 27.645-17 33.5-2.228.816-3.767 4-6.659 4C6.493 62.5 0 47.785 0 39.816Z"
      />
      <path
        fill="#0671FF"
        d="M5 78c15 0 19.529 9.5 19.529 17V60.5h7.322v5.334L32 92.5c-.07-15 14.494-17.194 19-15.5 0 18-13.33 20.564-19.15 20l.15 34s-7.471-.5-7.471-6.5V99.323C11 98.5 5 91 5 78Z"
      />
      <path
        fill="#FF7500"
        d="M4 37.816V5.5c18.745 0 24.341 16.38 24.341 24.79C28.341 21.88 35.5 1.5 52 1.5V23c0 7.968 0 38.5-23.659 38.5C10.493 61.5 4 45.785 4 37.816Z"
      />
    </svg>
  );
};
