import React, { useState } from 'react';
import './SurveyPage.css';
import figmaBgImage from '../assets/figma-background.png';

export default function FashionSurvey() {
  const [currentView, showView] = useState('introduction');
  const [userChoices, storeChoice] = useState({
    howOftenShop: '',
    itemsPerYear: '',
    oldClothesAction: [],
    monthlySpend: '',
    ecoImportance: '',
    favMaterials: [],
  });
  const [qIdx, nextQIdx] = useState(0);

  const allQuestions = [
    { id: 'howOftenShop', prompt: 'Kuinka usein ostat uusia vaatteita?', options: ['Viikoittain', 'Kuukausittain', 'Sesongeittain', 'Harvemmin kuin 4 kertaa vuodessa'], inputType: 'radio' },
    { id: 'itemsPerYear', prompt: 'Kuinka monta vaatekappaletta ostat vuodessa?', options: ['Alle 10', '10-20', '20-50', 'Yli 50'], inputType: 'radio' },
    { id: 'oldClothesAction', prompt: 'Mitä teet vaatteille, joita et enää käytä?', options: ['Lahjoitan hyväntekeväisyyteen', 'Myyn kirpputorilla/netissä', 'Kierrätän tekstiilinä', 'Heitän roskiin', 'Annan ystäville/perheelle', 'Säilytän varastossa'], inputType: 'checkbox' },
    { id: 'monthlySpend', prompt: 'Kuinka paljon käytät rahaa vaatteisiin kuukaudessa?', options: ['Alle 20€', '20-50€', '50-100€', 'Yli 100€'], inputType: 'radio' },
    { id: 'ecoImportance', prompt: 'Kuinka tärkeää sinulle on vaatteiden ekologisuus?', options: ['Erittäin tärkeää - vaikuttaa ostopäätöksiini', 'Melko tärkeää - huomioin joskus', 'En juurikaan mieti asiaa', 'Ei vaikuta ostopäätöksiini lainkaan'], inputType: 'radio' },
    { id: 'favMaterials', prompt: 'Mitä materiaaleja suosit vaatteissasi?', options: ['Puuvilla', 'Polyesteri', 'Viskoosi', 'Villa', 'Pellava', 'Kierrätetyt materiaalit', 'En kiinnitä huomiota materiaaleihin'], inputType: 'checkbox' },
  ];

  const recordRadioSelection = (questionIdentifier, selectedValue) => {
    storeChoice({ ...userChoices, [questionIdentifier]: selectedValue });
  };

  const recordCheckboxSelection = (questionIdentifier, selectedValue) => {
    const currentSelections = userChoices[questionIdentifier] || [];
    const newSelections = currentSelections.includes(selectedValue)
      ? currentSelections.filter((val) => val !== selectedValue)
      : [...currentSelections, selectedValue];
    storeChoice({ ...userChoices, [questionIdentifier]: newSelections });
  };

  const proceedToNextStep = () => {
    const activeQuestion = allQuestions[qIdx];
    let answerProvided = false;
    if (activeQuestion.inputType === 'radio') {
      if (userChoices[activeQuestion.id] && userChoices[activeQuestion.id] !== '') answerProvided = true;
    } else if (activeQuestion.inputType === 'checkbox') {
      if (userChoices[activeQuestion.id] && userChoices[activeQuestion.id].length > 0) answerProvided = true;
    }
    if (!answerProvided) {
      alert('Valitse vähintään yksi vaihtoehto jatkaaksesi!');
      return;
    }
    if (qIdx < allQuestions.length - 1) {
      nextQIdx(qIdx + 1);
    } else {
      showView('summary');
    }
  };

  const generateUserSummary = () => {
    let profileType = 'Tarkkaavainen kuluttaja';
    let profileDescription = 'Pohdit ostoksiasi ja teet valintoja tietoisesti.';
    let environmentalImpact = 'Pienempi';
    let customTips = ['Hienoa, jatka samaan malliin!', 'Tutustu vaatteiden korjausmahdollisuuksiin.'];

    const { favMaterials, ecoImportance } = userChoices;

    if (userChoices.itemsPerYear === 'Yli 50' && userChoices.howOftenShop === 'Viikoittain') {
      profileType = 'Muodin edelläkävijä';
      profileDescription = 'Vaatekaappisi elää trendien mukana ja päivittyy tiheään.';
      environmentalImpact = 'Huomattava';
      customTips = ['Kokeile vaatehaastetta: kuukausi ilman uusia ostoksia.', 'Löydä iloa vaatteiden vuokraamisesta tai lainaamisesta.', 'Pysähdy hetkeksi: onko tämä todella tarpeellinen hankinta?'];
      
      if (favMaterials.includes('Polyesteri') && !favMaterials.includes('Kierrätetyt materiaalit')) {
        profileDescription += ' Suosikkimateriaalisi, kuten polyesteri, voi lisätä pikamuodin ympäristötaakkaa.';
        customTips.push('Vaikka seuraat trendejä, yritä etsiä kestävämpiä materiaaleja, kuten kierrätettyä polyesteria tai luomupuuvillaa.');
      } else if (favMaterials.includes('En kiinnitä huomiota materiaaleihin')) {
        profileDescription += ' Et myöskään kiinnitä huomiota materiaaleihin, mikä voi johtaa vähemmän kestäviin valintoihin.';
        customTips.push('Pysähdy hetkeksi miettimään myös vaatteiden materiaaleja ja niiden vaikutuksia.');
      }

    } else if (userChoices.oldClothesAction.includes('Heitän roskiin') && (ecoImportance === 'En juurikaan mieti asiaa' || ecoImportance === 'Ei vaikuta ostopäätöksiini lainkaan')) {
      profileType = 'Pragmaattinen pukeutuja';
      profileDescription = 'Arvostat vaatteissa käytännöllisyyttä etkä niinkään murehdi niiden elinkaarta.';
      environmentalImpact = 'Kohtalainen';
      customTips = ['Pienikin teko auttaa: kokeile lahjoittaa tai myydä käyttämättömät vaatteesi.', 'Tutustu brändeihin, jotka panostavat kestävyyteen.', 'Laadukas vaate kestää pidempään ja säästää luontoa.'];

      if (favMaterials.includes('En kiinnitä huomiota materiaaleihin')) {
        profileDescription += ' Et myöskään juuri pohdi materiaalien ympäristövaikutuksia.';
        environmentalImpact = 'Kohtalainen tai suurempi';
        customTips.push('Tutustu eri materiaalien ympäristövaikutuksiin – pieni tietoisuus voi ohjata parempiin valintoihin.');
      } else if (favMaterials.includes('Polyesteri') && favMaterials.length === 1) { 
        profileDescription += ' Suosimalla pääasiassa polyesteriä, vaatevalintojesi ympäristövaikutus voi olla isompi.';
        environmentalImpact = 'Kohtalainen tai suurempi';
        customTips.push('Harkitse luonnonkuitujen tai kierrätettyjen materiaalien osuuden lisäämistä vaatekaapissasi.');
      }

    } else if (userChoices.monthlySpend === 'Yli 100€' && ecoImportance === 'Erittäin tärkeää - vaikuttaa ostopäätöksiini') {
      profileType = 'Eettinen sijoittaja';
      profileDescription = 'Olet valmis panostamaan laatuun ja eettisyyteen vaatevalinnoissasi.';
      environmentalImpact = 'Pieni';
      customTips = ['Mahtavaa, jatka valitsemallasi tiellä!', 'Etsi ja tue paikallisia, vastuullisia suunnittelijoita ja valmistajia.'];

      if (favMaterials.includes('Kierrätetyt materiaalit') || favMaterials.includes('Pellava') || favMaterials.includes('Villa')) {
        profileDescription += ' Suosit myös kestäviä ja laadukkaita materiaaleja, mikä on erinomainen yhdistelmä eettisyyden kanssa.';
        customTips.push('Jatkaessasi näin olet todellinen kestävän muodin edelläkävijä!');
      } else if (favMaterials.includes('En kiinnitä huomiota materiaaleihin')) {
        customTips.push('Vaikka panostat eettisyyteen, materiaalivalintoihin perehtyminen voisi tehostaa positiivista vaikutustasi entisestään.');
      } else if (favMaterials.includes('Polyesteri') && !favMaterials.includes('Kierrätetyt materiaalit')) {
        customTips.push('Harkitse, voisitko korvata osan polyesteri-hankinnoistasi luonnonkuiduilla tai kierrätetyillä vaihtoehdoilla tukeaksesi ekologisuutta vielä paremmin.');
      }
    } else {
        if (
            (ecoImportance === 'Erittäin tärkeää - vaikuttaa ostopäätöksiini' || ecoImportance === 'Melko tärkeää - huomioin joskus') &&
            (favMaterials.includes('Kierrätetyt materiaalit') || favMaterials.includes('Pellava') || favMaterials.includes('Villa')) &&
            !favMaterials.includes('En kiinnitä huomiota materiaaleihin')
        ) {
            profileType = 'Materiaalitietoinen Vastuunkantaja';
            profileDescription = 'Kiinnität huomiota vaatteiden ekologisuuteen ja teet tietoisia materiaalivalintoja, suosien kestävämpiä vaihtoehtoja.';
            environmentalImpact = 'Pienempi';
            customTips = [
                'Hienoa, että materiaalivalinnat ovat sinulle tärkeitä ekologisuuden kannalta!',
                'Tutustu lisää eettisiin sertifikaatteihin (esim. GOTS, Fair Trade) valitsemillesi materiaaleille.',
                'Jaa tietämystäsi kestävistä materiaaleista ja innosta muitakin.'
            ];
            if (favMaterials.includes('Puuvilla') && !favMaterials.includes('Kierrätetyt materiaalit') && !ecoImportance.startsWith('Erittäin')) {
                 customTips.push('Jos suosit puuvillaa, harkitse luomupuuvillan tai kierrätetyn puuvillan etsimistä sen ympäristövaikutusten pienentämiseksi.');
            }
        } else if (profileType === 'Tarkkaavainen kuluttaja') {
            if (favMaterials.includes('Kierrätetyt materiaalit') && (ecoImportance === 'Erittäin tärkeää - vaikuttaa ostopäätöksiini' || ecoImportance === 'Melko tärkeää - huomioin joskus')) {
                profileDescription = 'Olet tarkkaavainen kuluttaja, joka tekee tietoisia valintoja ja suosii kestäviä materiaaleja. Hienoa!';
                customTips.unshift('Jatka hyvää työtä kestävien materiaalien parissa!');
            } else if (favMaterials.includes('En kiinnitä huomiota materiaaleihin') && !(ecoImportance === 'Erittäin tärkeää - vaikuttaa ostopäätöksiini')) {
                customTips.push('Voisit syventyä materiaalivalintoihin vielä enemmän – se voi auttaa tekemään entistä kestävämpiä päätöksiä.');
            } else if (favMaterials.includes('Polyesteri') && !favMaterials.includes('Kierrätetyt materiaalit') && favMaterials.length < 3) { 
                 customTips.push('Kiinnitä huomiota polyesterin määrään vaatekaapissasi ja harkitse sen korvaamista kestävämmillä vaihtoehdoilla aina kun mahdollista.');
            }
        }
    }


    return { profileType, profileDescription, environmentalImpact, customTips, yearlyItems: userChoices.itemsPerYear || 'Ei tietoa' };
  };

  const pageStyleSettings = {
    backgroundImage: `url(${figmaBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const IntroductionView = () => (
    <div className="survey-component page-container intro-page" style={pageStyleSettings}>
      <div className="content-wrapper">
        <h1>Pikamuodin Peili</h1>
        <p>
          Astu peilin eteen ja selvitä, millainen on suhteesi pikamuotiin. Vastaa rehellisesti!
        </p>
        <button onClick={() => showView('questions')}>Aloita matka</button>
      </div>
    </div>
  );

  const QuestionsView = () => {
    const currentQ = allQuestions[qIdx];
    return (
      <div className="survey-component page-container questions-page" style={pageStyleSettings}>
        <div className="content-wrapper">
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{
                width: `${((qIdx + 1) / allQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="question-counter">
            Kysymys {qIdx + 1} / {allQuestions.length}
          </p>
          <h2>{currentQ.prompt}</h2>
          <div className="options-container">
            {currentQ.options.map((optionText, idx) => (
              <div key={idx} className="option-item">
                <input
                  type={currentQ.inputType}
                  id={`option-${currentQ.id}-${idx}`}
                  name={currentQ.id}
                  value={optionText}
                  checked={
                    currentQ.inputType === 'radio'
                      ? userChoices[currentQ.id] === optionText
                      : (userChoices[currentQ.id] || []).includes(optionText)
                  }
                  onChange={() =>
                    currentQ.inputType === 'radio'
                      ? recordRadioSelection(currentQ.id, optionText)
                      : recordCheckboxSelection(currentQ.id, optionText)
                  }
                />
                <label htmlFor={`option-${currentQ.id}-${idx}`}>{optionText}</label>
              </div>
            ))}
          </div>
          <button onClick={proceedToNextStep}>
            {qIdx < allQuestions.length - 1 ? 'Seuraava' : 'Näytä yhteenveto'}
          </button>
        </div>
      </div>
    );
  };

  const SummaryView = () => {
    const finalResults = generateUserSummary();
    return (
      <div className="survey-component page-container results-page" style={pageStyleSettings}>
        <div className="content-wrapper">
          <h1>Pikamuoti Wrapped {new Date().getFullYear()}</h1>
          <div className="result-section">
            <h2>Henkilökohtainen profiilisi:</h2>
            <p className="user-type">{finalResults.profileType}</p>
            <p>{finalResults.profileDescription}</p>
          </div>
          <div className="result-section">
            <h3>Muotifaktojasi:</h3>
            <p>Vaatteita vuodessa: {finalResults.yearlyItems}</p>
            <p>Suhtautuminen ekologisuuteen: {userChoices.ecoImportance || 'Ei tietoa'}</p>
            <p>Mieluisimmat materiaalit: {(userChoices.favMaterials && userChoices.favMaterials.length > 0) ? userChoices.favMaterials.join(', ') : 'Ei valittu'}</p>
            <p>Ympäristövaikutus (arvioitu): {finalResults.environmentalImpact}</p>
          </div>
          <div className="result-section">
            <h3>Vinkkejä jatkoon:</h3>
            <ul>
              {finalResults.customTips.map((tipText, idx) => (
                <li key={idx}>{tipText}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              showView('introduction');
              nextQIdx(0);
              storeChoice({
                howOftenShop: '',
                itemsPerYear: '',
                oldClothesAction: [],
                monthlySpend: '',
                ecoImportance: '',
                favMaterials: [],
              });
            }}
          >
            Aloita alusta
          </button>
          <div className="share-section">
            <p>Jaa tuloksesi ystävillesi!</p>
          </div>
        </div>
      </div>
    );
  };

  if (currentView === 'introduction') return <IntroductionView />;
  if (currentView === 'questions') return <QuestionsView />;
  if (currentView === 'summary') return <SummaryView />;
  return <div style={pageStyleSettings}><div className="content-wrapper"><p>Hups! Jotain meni pieleen.</p></div></div>;
}