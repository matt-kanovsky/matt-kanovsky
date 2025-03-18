import { motion } from 'motion/react';
import { useEffect, useMemo, useState, type PropsWithChildren } from 'react';

export const AnimatedTulip: React.FC<PropsWithChildren> = ({ children }) => {
  const [start, setStart] = useState(false);
  const repeatDelay = useMemo(() => {
    return Math.random() * 10 + 3;
  }, []);

  const duration = useMemo(() => {
    return Math.random() * 4 + 4;
  }, []);

  useEffect(() => {
    const delay = Math.random() * 20;
    setTimeout(() => setStart(true), delay * 1000);
  }, []);

  return (
    <motion.div
      style={{
        transformOrigin: '50% 100%'
      }}
      animate={
        start
          ? {
              rotate: [0, 7, -5, 3, 0]
            }
          : {}
      }
      transition={{ duration: duration, ease: 'easeInOut', repeat: Infinity, repeatDelay: repeatDelay }}
    >
      {children}
    </motion.div>
  );
};
