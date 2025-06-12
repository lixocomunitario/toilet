import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <div className="footer__item footer__item--left">© 2025 AstraVerse</div>
            <div className="footer__item footer__item--center">Built on Abstract</div>
            <div className="footer__item footer__item--right">
                <a target='_blank' href="https://x.com/astroversewtf">
                    <img src="/x-icon.png" alt="" />
                </a>
                <a target='_blank' href="https://discord.com">
                    <img src="/discord-icon.png" alt="" />
                </a>
            </div>
        </footer>
    );
};

export { Footer };
