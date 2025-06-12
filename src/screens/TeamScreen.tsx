import { FunctionComponent } from 'react';

const TeamScreen: FunctionComponent = () => {

    return (
        <section className="team-screen">
            <div className="team-container">
                <div className="team-screen__team">
                    <a target='_blank' href='https://x.com/0xArtur'>
                        <div className="team-screen__team__player">
                            <img className="team-screen__team__player__image" src="/artur.png" alt="" />
                            <div className="team-screen__team__player__text">
                                <h3>Artur</h3>
                                <span>Founder CEO</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/ruimiguelopes'>
                        <div className="team-screen__team__player">
                            <img className="team-screen__team__player__image" src="/rui.png" alt="" />
                            <div className="team-screen__team__player__text">
                                <h3>Rui</h3>
                                <span>Founder COO</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/emyhamilton_'>
                        <div className="team-screen__team__player">
                            <img className="team-screen__team__player__image" src="/emily.png" alt="" />
                            <div className="team-screen__team__player__text">
                                <h3>Emily</h3>
                                <span>Community Manager</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/kenjidgn'>
                        <div className="team-screen__team__player">
                            <img className="team-screen__team__player__image" src="/kenji.png" alt="" />
                            <div className="team-screen__team__player__text">
                                <h3>Kenji</h3>
                                <span>Chief Degen Officer</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='info'>
                    <div className='info__image-wrapper'>
                        <img src="/icon-astro.png" alt="" />
                    </div>
                    <span>Want to get involved?</span>
                </div>
            </div>
        </section>
    );
};

export { TeamScreen }
