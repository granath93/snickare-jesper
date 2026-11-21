const about = () => {
  return (
    <>
      <p>
        Letar ni efter en snickare som verkligen bryr sig om resultatet? Då har
        ni hittat rätt.
      </p>
      <p>Mitt namn är Jesper Pettersson och jag driver egen firma i Alingsås med omnejd. Firman grundades hösten 2024, men bakom verksamheten finns en snickare med erfarenhet sedan 2008.
      </p>
      <p>
        För mig är bra kvalitet och ett väl utfört arbete en självklarhet, oavsett om ni planerar en omfattande renovering, ett nytt altanbygge eller behöver hjälp med finsnickeri.
      </p>
      <p>
        Tjänsterna riktar sig till privatpersoner, företag och föreningar. Även byggföretag som behöver förstärkning eller söker en underentreprenör är varmt välkomna att höra av sig.
      </p>
      <p>
        Jag är registrerad med F-skatt och är sökbar på <a className="underline" href="https://www.allabolag.se/foretag/jesper-pettersson/alings%C3%A5s/byggm%C3%A4stare/V7LWB3J97I5YDDT" target="_blank" rel="noopener noreferrer">Allabolag</a>.
        Utgångspunkten är Alingsås och arbetsområdet sträcker sig allt mellan Vara, Falköping, Borås och Göteborg.
      </p>
      <p>Välkommen att höra av er för att diskutera erat nästa projekt!</p>
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
    <p>
      Här hittar ni ett urval av de tjänster som erbjuds, oavsett om ni är privatperson, företag eller bostadsrättsförening. Utöver dessa finns även möjlighet att diskutera andra typer av snickeri- och byggarbeten.
    </p>
    <p>
      För byggföretag erbjuds även uppdrag som inhyrd snickare eller underentreprenör, med möjlighet till både kortare inhopp och längre samarbeten vid behov av extra förstärkning.</p>
    <ul className="list-inside list-disc flex flex-col gap-2 my-4">
      <li>
        <b>Nybygge</b> -  Bygger allt från altaner, staket och trappor till väggar och andra byggnationer.
      </li>
      <li>
        <b>Kök</b> - Kompletta köksrenoveringar, köksmontering och anpassningar efter dina önskemål.
      </li>
      <li>
        <b>Golvläggning</b> - Lägger parkett, laminat och andra golvtyper.
      </li>
      <li>
        <b>Byte av fönster och dörrar</b> - Byte och montering av fönster och dörrar med fokus på funktion, passform och finish.
      </li>
      <li>
        <b>Renoveringar</b> - Renovering och ombyggnation, bland annat fasadbyten och invändiga arbeten.
      </li>
      <li>
        <b>Snickeri</b> - Platsbyggda möbler, garderober, hyllor, speciallösningar och finsnickeri.
      </li>
      <li><b>Underentreprenör & resursförstärkning</b> -  Inhyrd snickare till byggföretag och andra aktörer inom byggbranschen. Tillgänglig för både vid kortare inhopp och längre uppdrag.</li>
    </ul>
    <p>Exempel på tidigare projekt och arbeten finns i mitt <a className="underline" href="#library">galleri</a>.</p>

    <div>
      <h3>ROT-avdrag</h3>
      <p>
        Som privatperson kan du i många fall nyttja ROT-avdrag när du anlitar mig för bygg- och renoveringsarbeten. Det innebär att du kan få skattereduktion på en del av arbetskostnaden, förutsatt att arbetet och dina förutsättningar uppfyller <a href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html" className="underline" target="_blank" rel="noopener noreferrer">Skatteverkets villkor</a>.
      </p>
    </div>
  </>)
}


export const content = { about, contact, library, services };
export const url = "https://snickare-jesper.se";
