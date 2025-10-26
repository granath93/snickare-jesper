export type LibraryResource = {
  title: string;
  description?: string;
  imageUrl: string;
  alt: string;
  popup?: ("original" | LibraryResource)[];
};

export const libraryResources: LibraryResource[] = [
  {
    title: "Platsbyggd hylla - enbart snickeri",
    description:
      "En platsbyggd bokhylla i ek innan och efter målning. Jesper utförde enbart snickeriet.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/hylla-efter-MkxuWKCzR75FSfnNpbZaRJ2Z8sfqxT.png",
    alt: "bokhylla",
    popup: [
      {
        title: "Platsbyggd hylla - innan målning",
        imageUrl:
          "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/hylla-Jkel6Vakdqh0XIxHqyamHd9c3ZAtQF.png",
        alt: "hylla",
      },
      "original",
    ],
  },
  {
    title: "Utesoffa",
    description: "En rustik soffa som tål mycket.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/soffa-mJ0JKZTWCMz6KNrpyCdwveM2TueshY.png",
    alt: "soffa",
  },
  {
    title: "Utomhustappa uppifrån",
    description:
      "En formad trappa som följer naturen - sedd från toppen av trappan.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/trappa-uppifran.png",
    alt: "trappa uppifrån",
  },
  {
    title: "Utomhustrappa framifrån",
    description:
      "En formad trappa som följer naturen - sedd framifrån av trappan.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/trappa-framifran-KLBrr3KSYtGtYxnnffbJRU57clFrRh.png",
    alt: "trappa framifrån",
  },
  {
    title: "Utomhustrappa nedifrån",
    description:
      "En formad trappa som följer naturen - sedd från foten av trappan.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/trappa-nedanfor.png",
    alt: "soffa",
  },
  {
    title: "Renoverat staket",
    description: "Ett staket som behövde renoveras efter en mindre incident.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/staget-O7C2IPaB2xK0jEU1zXzOhYSlqm3ohY.png",
    alt: "staket",
  },
  {
    title: "Platsbyggd garderob med skjutdörrar",
    description:
      "En formad trappa som följer naturen - sedd från foten av trappan.",
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
    title: "Altandörr och fasadbyte",
    description:
      "Altandörren behövde bytas pga stora bristet. Resultatet blev en större där fasaden även fick sig ett lyft.",
    imageUrl:
      "https://ucwo2izryqq2mgwr.public.blob.vercel-storage.com/altandorr-ABzB15KlDReIzQL1olprcUi1mlXqpp.png",
    alt: "altandörr och fasad",
  },
];
