import { FunctionComponent, ReactNode } from 'react'
import { IndexScreen } from './screens/IndexScreen';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AppRoute } from './constants/routes';
import { AnimatePresence, motion } from 'framer-motion'
import { DetailsPage } from './screens/DetailsPage';


const pageVariants = {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit:    { y: '-100%' },
}
  
const pageTransition = {
    type: 'spring',
    stiffness: 90,
    damping: 20,
    duration: 0.9,
    // ease: 'easeInOut',
}
  
const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}
    >
        {children}
    </motion.div>
);

const AppRouter: FunctionComponent = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route path={AppRoute.INDEX} element={<><IndexScreen /></>} />
                <Route path={AppRoute.COOL} element={<PageWrapper><DetailsPage /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

export { AppRouter }
