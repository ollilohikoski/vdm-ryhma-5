import { Link } from 'react-router-dom';
import './About.css';
import UffLogo from '../assets/uff-logo.png';
import InstagramLogo from '../assets/instagram-logo.png';
import YoutubeLogo from '../assets/youtube-logo.png';
import TiktokLogo from '../assets/tiktok-logo.png';

export default function About() {
    return (
        <div className="container">
            <div className="wrapper">
                <section>
                    <h1 className="title">Kampanjan nimi</h1>

                    <div className="box">
                        <p>tekstiä jotenki tänne</p>
                    </div>
                </section>

                <section>
                    <h2 className="title">Kulutustottumustesti</h2>
                    <div className="box">
                        <p>Kuinka vastuullinen muodin kuluttaja olet?</p>
                        <p>Kulutustyylisi selviää tällä testillä!</p>
                        <Link to={"/survey"}>
                            <button className="button">
                                Tee testi <span style={{ marginLeft: '8px' }}>→</span>
                            </button>
                        </Link>
                    </div>
                </section>

                <section>
                    <h2 className='title'>Paljon sun outfit <span style={{ textDecoration: 'underline' }}>oikeesti</span> maksaa?</h2>
                    <p>Katso lyhytvideo ja selviää, mitä vaatteiden todellinen hinta merkitsee.</p>
                    <div className="video">
                        <p>Video tähän</p>
                    </div>
                </section>

                <section>
                    <h2 className='title'>#UFFlifestyle</h2>
                    <p>Löydä meidät somesta!<br />(arvonta?)</p>
                    <div className='social-icons'>
                        <img src={InstagramLogo} alt="Instagram" style={{ width: '50px', margin: '0 5px' }} />
                        <img src={YoutubeLogo} alt="Youtube" style={{ width: '60px', margin: '0 0px' }} />
                        <img src={TiktokLogo} alt="TikTok" style={{ width: '30px', margin: '0 15px' }} />
                    </div>
                    <p>@kampanjannimi</p>

                    <div className="grid">
                        <div className="grid-item">
                            <p>postaus 1</p>
                        </div>
                        <div className="grid-item">
                            <p>postaus 2</p>
                        </div>
                        <div className="grid-item">
                            <p>postaus 3</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="footer">
                <div className='footer-section'>
                    <p className='footer-heading'>Kampanjan nimi</p>
                    <img src={UffLogo} alt="UFF" style={{marginTop: '-40px', marginLeft: '20px', width: '150px'}} />
                </div>
                <div className='footer-section'>
                    <p className='footer-heading'>Yhteystiedot</p>
                    <p>kampanjannimi@gmail.com</p>
                </div>
                <div className='footer-section'>
                    <p className='footer-heading'>Seuraa meitä</p>
                    <div className='social-icons'>
                        <img src={InstagramLogo} alt="Instagram" style={{ width: '50px', margin: '0 5px' }} />
                        <img src={YoutubeLogo} alt="Youtube" style={{ width: '60px', margin: '0 0px' }} />
                        <img src={TiktokLogo} alt="TikTok" style={{ width: '30px', margin: '0 15px' }} />
                    </div>
                </div>
            </section>
        </div>
    );
}