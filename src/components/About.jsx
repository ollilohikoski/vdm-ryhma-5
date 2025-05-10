import { Link } from 'react-router-dom';
import './About.css';
import UffLogo from '../assets/uff-logo.png';
import InstagramLogo from '../assets/instagram-logo.png';
import YoutubeLogo from '../assets/youtube-logo.png';
import TiktokLogo from '../assets/tiktok-logo.png';
import Some1 from '../assets/some/some1.png';
import Some2 from '../assets/some/some2.png';
import Some3 from '../assets/some/some3.png';

export default function About() {
    return (
        <div className="container">
            <div className="wrapper">
                <section>
                    <h1 className="title">Halpa nyt, kallis myöhemmin</h1>

                    <div className="box">
                        <p>
                            <span className='font-semibold block mb-4 text-xl'>Halpa nyt, kallis myöhemmin</span>
                            Pikamuoti saattaa näyttää halvalta, mutta mitä se oikeasti maksaa? Lyhytikäiset vaatteet, jotka hajoavat muutaman käyttökerran jälkeen, eivät ole vain harmi kukkarolle, vaan myös ympäristölle ja ihmisille, jotka ne valmistavat.
                        </p>
                    </div>
                    <div className="box">
                        <p>
                            <span className='font-semibold block mb-4 text-xl'>Kestävä tyyli on kaikkea muuta kuin tylsä</span>
                            Tiedätkö tunteen, kun uusi vaate tuntuu hyvältä hetken, mutta pian se jää kaapin perälle tai menee rikki? Entä jos voisit rakentaa tyylisi kestävämmin, laadukkaammin, edullisemmin ja vastuullisemmin? 
                            Käytettyjen ja kestävien vaatteiden valitseminen ei tarkoita tylsää tai vaikeaa, päinvastoin. 
                            Se on järkevää, trendikästä ja ennen kaikkea vaikuttavaa. Jokaisella valinnalla voit säästää rahaa ja pienentää jalanjälkeäsi.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="title">Kulutustottumustesti</h2>
                    <div className="box">
                        <p className='font-semibold'>Kuinka vastuullinen muodin kuluttaja olet?</p><br />
                        <p>Kulutustyylisi selviää tällä testillä!</p>
                        <Link to={"/survey"}>
                            <button className="button mt-4">
                                Tee testi <span style={{ marginLeft: '8px' }}>→</span>
                            </button>
                        </Link>
                    </div>
                    <div className="box">
                        <p>
                            <span className='font-semibold block mb-4 text-xl'>Muoti kuuluu myös sinulle, joka haluat parempaa</span>
                            Erityisesti nuorille ja opiskelijoille haluamme sanoa: sinun ei tarvitse tinkiä tyylistä tai yksilöllisyydestä tehdessäsi parempia valintoja. 
                            Me tiedämme, että trendit vaihtuvat nopeasti ja budjetti on rajallinen. 
                            Siksi haluamme auttaa löytämään vaihtoehtoja, jotka näyttävät hyvältä, kestävät käytössä ja tekevät hyvää.
                        </p>
                    </div>
                    <div className="box">
                        <p>
                            <span className='font-semibold block mb-4 text-xl'>Muutos alkaa sinusta</span>
                            Nyt on aika tehdä muotiin muutos. Lähde mukaan ja näytä, että vastuullinen valinta voi olla myös itsenäinen, rohkea ja tyylikäs teko. 
                            Seuraavan kerran kun olet ostoksilla, mieti hetki, voisiko parempi vaihtoehto löytyä käytettynä. 
                            Pienillä valinnoilla syntyy iso ero. Ja se ero alkaa sinusta.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className='title'>Paljon sun outfit <span style={{ textDecoration: 'underline' }}>oikeesti</span> maksaa?</h2>
                    <p>Katso lyhytvideo ja selviää, mitä vaatteiden todellinen hinta merkitsee.</p>
                    <div className="video">
                        <iframe
                            width="fit-content"
                            height="100%"
                            src="https://www.youtube.com/embed/Jar1to0XtKQ"
                        ></iframe>
                    </div>
                </section>

                <section>
                    <h2 className='title'>#UFFlifestyle</h2>
                    <div className="box">
                        <p>
                            <span className='font-semibold block mb-4 text-xl'>
                                Osallistu muutokseen ja tee maailmasta parempi paikka ostamalla UFF:n vaatteita!
                            </span>
                            Ota kuva uusista UFF-ostoksista, lisää kuvaan aihetunniste #ufflifestyle ja julkaise kuva millä tahansa somealustalla. 
                            Näin olet osallistunut UFF:n 300 euron lahjakortin arvontaan!
                            <br /><br />
                            Arvontaan on aikaa osallistua 1.7.2025 asti. Voittajalle ilmoitetaan henkilökohtaisesti.
                        </p>
                    </div>
                    <div className='social-icons'>
                        <img src={InstagramLogo} alt="Instagram" style={{ width: '50px', margin: '0 5px' }} />
                        <img src={YoutubeLogo} alt="Youtube" style={{ width: '60px', margin: '0 0px' }} />
                        <img src={TiktokLogo} alt="TikTok" style={{ width: '30px', margin: '0 15px' }} />
                    </div>
                    <p>@halpanyt</p>

                    <div className="some">
                        <div className="some-item">
                            <img src={Some1} alt="Social media post 1" />
                        </div>
                        <div className="some-item">
                            <img src={Some2} alt="Social media post 2" />
                        </div>
                        <div className="some-item">
                            <img src={Some3} alt="Social media post 3" />
                        </div>
                    </div>
                </section>
            </div>

            <section className="footer">
                <div className='footer-section flex flex-col justify-center items-center'>
                    <p className='footer-heading'>Halpa nyt, kallis myöhemmin</p>
                    <img className='invert' src={UffLogo} alt="UFF" style={{ width: '150px'}} />
                </div>
                <div className='footer-section'>
                    <p className='footer-heading'>Yhteystiedot</p>
                    <p>halpanyt@gmail.com</p>
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