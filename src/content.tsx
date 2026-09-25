const about = () => {
  return (
    <>
      <p>
        Letar ni efter en snickare som verkligen bryr sig om resultatet? Då har
        ni hittat rätt. Jag är en skicklig hantverkare med öga för detaljer och en passion för mitt
        yrke. Oavsett om ni planerar en omfattande renovering, ett nytt
        altanbygge eller behöver hjälp med finsnickeri, så levererar jag alltid ett resultat av bra kvalitet.
      </p>

      <p>
        Med många nöjda kunder och ett rykte om att vara både trevlig
        och noggrann, är jag ett bra val för dig som vill ha jobbet
        gjort, på rätt sätt, från start till mål.
      </p>

      <p>Utgår från Alingsås och är verksam allt mellan Vara, Falköping, Borås och Göteborg.</p>
    </>
  );
};


const contact = "Antingen kan ni ringa direkt, skicka ett SMS eller skicka ett mail så kontaktar jag dig."
const library = () => {
  return <>
    <p>
      Under åren har jag fått tillfället att hjälpa både privatpersoner och företag med olika projekt. Här nedan finns några exempel. 
    </p>
    <p>
      Finns mer information och bilder om ni klickar på bilderna.
    </p>
  </>
};

const services = () => {
  return (<>
  <p>Nedan ser ni några av mina tjänster jag erbjuder, oavsett om ni är privatkund, företag eller en bostadsrättsförening.
    Tveka inte att höra av er om ni önkar något utöver dessa tjänster.</p>
  <ul className="list-inside list-disc flex flex-col gap-2">
    <li>
      <b>Nybygge</b> - Bygger allt från staket, trappor, väggar och altaner.
    </li>
    <li>
      <b>Kök</b> - Kompletta köksrenoveringar eller anpassningar efter behov.
    </li>
    <li>
      <b>Golvläggning</b> - Lägger parkett, laminat och andra golvtyper.
    </li>
    <li>
      <b>Byte av fönster och dörrar</b> - Energieffektiva och säkra installationer.
    </li>
    <li>
      <b>Renoveringar</b> - Bland annat fasadbyten.
    </li>
    <li>
      <b>Snickeri</b> - Platsbyggda möbler, hyllor och finsnickeri.
    </li>
  </ul>
  </>)
}


export const content = { about, contact, library, services };
export const url = "https://snickare-jesper.se";
