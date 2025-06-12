import { FunctionComponent } from 'react';

const InvestorsScreen: FunctionComponent = () => {

    return (
        <section className="investors-screen">
            <div className="investors-container">
                <div className="investors-screen__team">
                    <a target='_blank' href='https://x.com/Venom_710'>
                        <div className="investors-screen__team__player">
                            <img className="investors-screen__team__player__image" src="/venom.png" alt="" />
                            <div className="investors-screen__team__player__text">
                                <h3>Venom</h3>
                                <span>Memeland</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/bubits_'>
                        <div className="investors-screen__team__player">
                            <img className="investors-screen__team__player__image" src="/trance.png" alt="" />
                            <div className="investors-screen__team__player__text">
                                <h3>Trance</h3>
                                <span>Trader</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/KookCapitalLLC'>
                        <div className="investors-screen__team__player">
                            <img className="investors-screen__team__player__image" src="/bubits.png" alt="" />
                            <div className="investors-screen__team__player__text">
                                <h3>Bubits</h3>
                                <span>Avalanche</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/Trancerc20'>
                        <div className="investors-screen__team__player">
                            <img className="investors-screen__team__player__image" src="/kook.png" alt="" />
                            <div className="investors-screen__team__player__text">
                                <h3>Kook</h3>
                                <span>Trader</span>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://x.com/cryptoleon_xyz '>
                        <div className="investors-screen__team__player">
                            <img className="investors-screen__team__player__image" src="/cryptoleon.png" alt="" />
                            <div className="investors-screen__team__player__text">
                                <h3>CryptoLeon</h3>
                                <span>Content Creator</span>
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

export { InvestorsScreen }
