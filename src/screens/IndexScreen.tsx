import { FunctionComponent, MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../constants/routes';

const MAX_SHIFT = 10;
const layers = [
  {
    id: 'planet',
    src: '/images/planet.png',
    style: { width: '500px' , top: '10%', right: '15%' },
    depth: 20,
  },
  {
    id: 'ship',
    src: '/images/ship.png',
    style: { width: '400px' , bottom: '10%', left: 'calc(50% - 200px)' },
    depth: 40,
  },
  {
    id: 'sign',
    src: '/images/sign.png',
    style: { width: '150px' , bottom: '10%', left: '20%' },
    depth: 15,
  },
  {
    id: 'stop',
    src: '/images/stop.png',
    style: { width: '100px' , bottom: '4%', right: '25%' },
    depth: 10,
  },
];

const hotspots = [
  { id: 1, top: '25%', right: '25%' },
  { id: 2, bottom: '10%', left: 'calc(50% - 1.6rem)' },
  { id: 3, bottom: '10%', left: '25%' },
  { id: 4, bottom: '4%', right: '25%' },
];

export const IndexScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPointClick = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    if (id === 3) {
      navigate(AppRoute.COOL);
    } else {
      alert(`Clicaste no ponto ${id}`);
    }
  };

  return (
    <section className="scene">

      {layers.map(({ id, src, style, depth }) => (
        <ParallaxLayer key={id} depth={depth} style={style} onHoverEnd={() => {}} onHoverStart={() => {}}>
          <img src={src} alt={id} className="layer__img" draggable={false} />
        </ParallaxLayer>
      ))}

      {hotspots.map(({ id, left, top, bottom, right }) => (
        <HotSpot
          key={id}
          id={id}
          left={left}
          top={top}
          bottom={bottom}
          right={right}
          onPointClick={(e: any) => onPointClick(e, id)}
        />
      ))}
    </section>
  );
};

type ParallaxLayerProps = {
  depth: number;
  style: React.CSSProperties;
  children: React.ReactNode;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

const ParallaxLayer: FunctionComponent<ParallaxLayerProps> = ({
  onHoverEnd,
  onHoverStart,
  style,
  children,
}) => {
  return (
    <motion.div
      className="layer"
      style={{ ...style }}
      onHoverStart={() => {
        onHoverStart();
      }}
      onHoverEnd={() => {
        onHoverEnd();
      }}
    >
      {children}
    </motion.div>
  );
};

type HotSpotProps = {
    id: number;
    right?: string;
    left?: string;
    top?: string;
    bottom?: string;
    onPointClick: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
}

const HotSpot: FunctionComponent<HotSpotProps> = ({
  left,
  bottom,
  right,
  top,
  id,
  onPointClick,
}) => {


    const [tx, setTx] = useState(0);
    const [ty, setTy] = useState(0);
    const [scale, setScale] = useState(1);
  
    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
      const r = e.currentTarget.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width/2)
      const dy = e.clientY - (r.top  + r.height/2)
      const nx = dx / (r.width/2)
      const ny = dy / (r.height/2)
      setTx(-nx * MAX_SHIFT)
      setTy(-ny * MAX_SHIFT)
      setScale(1.5)
    }
  
    const handleMouseLeave = () => {
      setTx(0)
      setTy(0)
      setScale(1)
    }
  
    return (
        <button
            className="hotspot"
            style={{
                left,
                right,
                bottom,
                top,
                // @ts-expect-error custom var
                '--tx': `${tx}px`,
                '--ty': `${ty}px`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => onPointClick(e, id)}
        >
            <div
                className="hotspot__inner"
                style={{ transform: `scale(${scale})` }}
            />
        </button>
    );
};
