import { FunctionComponent } from 'react'
import { IndexScreen } from './screens/IndexScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './constants/routes';
import { TopBar } from './screens/TopBar';
import { TeamScreen } from './screens/TeamScreen';
import { InvestorsScreen } from './screens/InvestorsScreen';
import { JobsScreen } from './screens/JobsScreen';
import { Footer } from './screens/Footer';

const AppRouter: FunctionComponent = () => {

    return (
        <>
            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path={AppRoute.INDEX} element={<IndexScreen />} />
                    <Route path={AppRoute.TEAM} element={<TeamScreen />} />
                    <Route path={AppRoute.INVESTORS} element={<InvestorsScreen />} />
                    <Route path={AppRoute.JOBS} element={<JobsScreen />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export { AppRouter }
