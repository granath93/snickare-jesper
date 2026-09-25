type PopupItem = Pick<LibraryResource, "alt" | "description" | "imageUrl">;
export type LibraryResource = {
  title: string;
  description?: string;
  imageUrl: string;
  alt: string;
  popup?: ("original" | PopupItem)[];
};

export const libraryResources: LibraryResource[] = [
  {
    title: "Platsbyggd hylla - enbart snickeri",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/hylla-efter-MkxuWKCzR75FSfnNpbZaRJ2Z8sfqxT.png",
    alt: "målad bokhylla",
    popup: [
      {
        imageUrl:
          "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/hylla-Jkel6Vakdqh0XIxHqyamHd9c3ZAtQF.png",
        description: "En platsbyggd bokhylla i MDF - innan och efter målning.",
        alt: "omålad bokhylla",
      },
      "original",
    ],
  },
  {
    title: "Utesoffa",
    description: "En rustik platsbyggt soffa, byggd efter kundens önskan på storlek.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/soffa-mJ0JKZTWCMz6KNrpyCdwveM2TueshY.png",
    alt: "soffa",
  },
  {
    title: "Utomhustappa uppifrån",
    description:
      "En trappa anpassad efter naturen - sedd från toppen av trappan.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/trappa-uppifran.png",
    alt: "trappa uppifrån",
  },
  {
    title: "Utomhustrappa framifrån",
    description:
      "En trappa anpassad efter naturen - sedd framifrån av trappan.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/trappa-framifran-KLBrr3KSYtGtYxnnffbJRU57clFrRh.png",
    alt: "trappa framifrån",
  },
  {
    title: "Utomhustrappa nedifrån",
    description:
      "En trappa anpassad efter naturen - sedd från foten av trappan.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/trappa-nedanfor.png",
    alt: "soffa",
  },
  {
    title: "Ny vägg med ny inbyggd skjutdörr",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/skjutdorrar-JjalG6dMZcb84a3bx5yLCHWXLuWKoM.png",
    alt: "stängd skjutdörr",
    description:
      "En ny vägg med en ny inbyggd skjutdörr. Målningen har kunden själv stått för.",
    popup: [
      "original",
      {
        imageUrl:
          "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/stangd-skjutdorr-cvnnwYIXMgmhaPl5DtlzYmSX8Pbu4x.png",
        alt: "öppen skjutdörr",
      },
    ],
  },
  {
    title: "Platsbyggd garderob med skjutdörrar",
    imageUrl:
    "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/grarderob-stangd-ZRlXBJldNFTPMOiaY1vaCXOYlFhiJr.png",
    alt: "garderob - stängd",
  },
  {
    title: "Platsbyggt garderob - inredning",
    description: "Inredningen är monterad efter kundens önskemål.",
    imageUrl:
    "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/garderob-hoger-oppen-IoDCS4L1oMkouqvWELjFy1Fo1hvuls.png",
    alt: "garderob - öppen med inredning",
  },
  {
    title: "Renoverat staket",
    description: "Ett staket som behövde renoveras efter en mindre incident.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/staget-O7C2IPaB2xK0jEU1zXzOhYSlqm3ohY.png",
    alt: "staket",
  },
  {
    title: "Nytt staket, räcke och trappa",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/altan-m-sjoutsikt-CXsHCyswJNInh1z9o6Z2EAeNBDtPTk.png",
    alt: "staket, räcke och trappa",
    description:
      "Staket, trappa och trappräcke byggdes efter kundens önskemål.",
    popup: [
      "original",
      {
        imageUrl:
          "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/altan-LolJph13eXgTIECbzFi517oyXTZTuC.png",
        alt: "omålad bokhylla",
      },
    ],
  },
  {
    title: "Fasadbyte",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/fasad-c9pFHh1MiQbfUjy3EKRTdpB2nlPbrw.png",
    alt: "fasad",
    description: "Fasaden är utbytt på sidan som syns.",
  },
  {
    title: "Utbytta köksskåp och kakel",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/kok-ry9JxOTT8xh1Xs7IpA1zw7FVW16ky5.png",
    alt: "kök",
    description:
      "Köket byttes ut efter kundens önskemål som innebar mellanväggen/köksön, skåpen och kaklet byttes ut.",
    popup: [
      "original",
      {
        imageUrl:
          "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/kokso-305unWbSgXAaft3zGIaTrdQbluNQdU.png",
        alt: "Mellanvägg med kylskåp och köksskåp",
      },
      {
        imageUrl:
          "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/koksvagg-11zsubP3nWz9tcfMbjjIGPD3YI0tS7.png",
        alt: "Baksidan av mellanväggen i köket",
      },
    ],
  },
  {
    title: "Altandörr och fasadbyte",
    description:
      "Altandörren behövde bytas pga brister och slitage. Resultatet blev en större altandörr där fasaden även fick sig ett lyft för att få dörren att passa in.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/altandorr-ABzB15KlDReIzQL1olprcUi1mlXqpp.png",
    alt: "altandörr och fasad",
  },
];
