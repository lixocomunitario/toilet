import { FunctionComponent } from 'react';
import { IndexScreen } from './screens/IndexScreen';
import { useLocation, BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './constants/routes';
import { TopBar } from './screens/TopBar';
import { TeamScreen } from './screens/TeamScreen';
import { InvestorsScreen } from './screens/InvestorsScreen';
import { JobsScreen } from './screens/JobsScreen';
import { Footer } from './screens/Footer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AppRouter: FunctionComponent = () => {
    const location = useLocation();

    return (
        <>
            <TopBar />
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="page-transition"
                    timeout={600}
                >
                    <Routes location={location}>
                        <Route path={AppRoute.INDEX} element={<IndexScreen />} />
                        <Route path={AppRoute.TEAM} element={<TeamScreen />} />
                        <Route path={AppRoute.INVESTORS} element={<InvestorsScreen />} />
                        <Route path={AppRoute.JOBS} element={<JobsScreen />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </>
    );
}

const AppWrapper: FunctionComponent = () => (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);

export { AppWrapper };


