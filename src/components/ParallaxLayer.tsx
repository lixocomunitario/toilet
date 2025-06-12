import { CSSProperties, FC, ReactNode } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

export const ParallaxLayer: FC<{depth: number; styleProps: CSSProperties; children: ReactNode}> = ({ depth, styleProps, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, [-1, 1], [depth, -depth]);
  const y = useTransform(mouseY, [-1, 1], [depth, -depth]);

  return (
    <motion.div
      style={{ x, y, ...styleProps }}
      onMouseMove={e => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - (left + width/2)) / (width/2));
        mouseY.set((e.clientY - (top  + height/2)) / (height/2));
      }}
    >
      {children}
    </motion.div>
  );
};
