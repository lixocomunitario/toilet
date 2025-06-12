import { FunctionComponent, useState } from 'react';
import { Collapse } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

type Jobs = {
    first: boolean
    second: boolean
}

const JobsScreen: FunctionComponent = () => {
    const [jobs, setJobs] = useState<Jobs>({
        first: false,
        second: false,
    });

    const onClick = (jobClicked: keyof Jobs) => {
        setJobs((prevJobs) => ({
            ...prevJobs,
            [jobClicked]: !prevJobs[jobClicked],
        }))
    }

    return (
        <div className="jobs-screen">
            <main className="jobs-screen__container">
                <section className="jobs-screen__container__jobs">
                    <div className='jobs-screen__container__jobs__title-container'>
                        <h1 className="jobs-screen__container__jobs__title-container__title">JOB BOARD</h1>
                        <p className="jobs-screen__container__jobs__title-container__subtitle">See our open positions</p>
                    </div>
                    <div className="underline" />
                    
                    <div className="jobs-screen__container__jobs__item">
                        <div className="jobs-screen__container__jobs__item__header">
                            <h2 className="jobs-screen__container__jobs__item__header__title">Head of Production</h2>
                            <div className="jobs-screen__container__jobs__item__header__location-container">
                                <span className="jobs-screen__container__jobs__item__header__location-container__label">LOCATION:</span>
                                <span className="jobs-screen__container__jobs__item__header__location-container__location">Lisbon</span>
                                <button
                                    title='toggle info'
                                    type="button"
                                    onClick={() => onClick('first')}
                                    className={`jobs-screen__container__jobs__item__header__location-container__toggle ${jobs.first && 'collapse'}`}
                                >
                                    <KeyboardArrowUp />
                                </button>
                            </div>
                        </div>
                        <div className="underline" />
                        <Collapse
                            in={jobs.first}
                        >
                            <>
                                <span className="jobs-screen__container__jobs__item__description">Phasellus dapibus imperdiet nulla. Praesent consequat non dui dignissim.Nullam a sapien sit amet odio sodales tristique. In in sodales nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit hendrerit felis, vel convallis ipsum cursus sed. Nullam sit amet rutrum ligula, eu varius massa. Proin blandit enim sem, quis cursus enim lobortis a. Nulla ligula mi, semper at lectus quis, cursus porta quam. Nunc sed neque dignissim, tincidunt magna nec, mattis nibh. Nulla venenatis gravida augue nec consectetur. Nunc aliquet porta diam, vitae porta orci congue vitae.
                                </span>
                                {/* <div className='jobs-screen__container__jobs__item__actions'>
                                    <button className="jobs-screen__container__jobs__item__actions__button">APPLY</button>
                                </div> */}
                            </>                        
                        </Collapse>
                    </div>

                    <div className="jobs-screen__container__jobs__item">
                        <div className="jobs-screen__container__jobs__item__header">
                            <h2 className="jobs-screen__container__jobs__item__header__title">Business Development </h2>
                            <div className="jobs-screen__container__jobs__item__header__location-container">
                                <span className="jobs-screen__container__jobs__item__header__location-container__label">LOCATION:</span>
                                <span className="jobs-screen__container__jobs__item__header__location-container__location">Remote</span>
                                
                                <button
                                    title='toggle info'
                                    type="button"
                                    onClick={() => onClick('second')}
                                    className={`jobs-screen__container__jobs__item__header__location-container__toggle ${jobs.second && 'collapse'}`}
                                >
                                    <KeyboardArrowUp />
                                </button>
                            </div>
                        </div>
                        <div className="underline" />
                        <Collapse
                            in={jobs.second}
                        >
                            <>
                                <span className="jobs-screen__container__jobs__item__description">Phasellus dapibus imperdiet nulla. Praesent consequat non dui dignissim.Nullam a sapien sit amet odio sodales tristique. In in sodales nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit hendrerit felis, vel convallis ipsum cursus sed. Nullam sit amet rutrum ligula, eu varius massa. Proin blandit enim sem, quis cursus enim lobortis a. Nulla ligula mi, semper at lectus quis, cursus porta quam. Nunc sed neque dignissim, tincidunt magna nec, mattis nibh. Nulla venenatis gravida augue nec consectetur. Nunc aliquet porta diam, vitae porta orci congue vitae.
                                </span>
                                {/* <div className='jobs-screen__container__jobs__item__actions'>
                                    <button className="jobs-screen__container__jobs__item__actions__button">APPLY</button>
                                </div> */}
                            </>                        
                        </Collapse>
                    </div>

                </section>
            </main>
        </div>
    );
};

export { JobsScreen }
