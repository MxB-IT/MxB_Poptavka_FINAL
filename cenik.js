// Ukázkové jednotkové ceny a měsíční příplatky v Kč bez DPH.
window.MXB_CENIK = {
  verze: 'doklady-2026-09',
  // Zdroj: doklady.xlsx, List1!A4:G22. Součet čtyř druhů dokladů
  // zaokrouhlujeme nahoru na 50; celé množství se násobí sazbou pásma.
  // Banka se účtuje podle skutečného počtu, mimo pásma dokladů.
  dokladovaPasma: [
    { doPoctu: 100, zaklad: 35, profi: 50, komplet: 65 },
    { doPoctu: 150, zaklad: 35, profi: 50, komplet: 65 },
    { doPoctu: 200, zaklad: 35, profi: 50, komplet: 65 },
    { doPoctu: 250, zaklad: 35, profi: 50, komplet: 65 },
    { doPoctu: 300, zaklad: 31, profi: 44, komplet: 58 },
    { doPoctu: 350, zaklad: 28, profi: 40, komplet: 53 },
    { doPoctu: 400, zaklad: 26, profi: 37, komplet: 49 },
    { doPoctu: 450, zaklad: 24, profi: 35, komplet: 46 },
    { doPoctu: 500, zaklad: 23, profi: 33, komplet: 44 },
    { doPoctu: 550, zaklad: 21, profi: 32, komplet: 42 },
    { doPoctu: 600, zaklad: 20, profi: 31, komplet: 41 },
    { doPoctu: 650, zaklad: 20, profi: 29, komplet: 39 },
    { doPoctu: 700, zaklad: 19, profi: 29, komplet: 38 },
    { doPoctu: 750, zaklad: 18, profi: 28, komplet: 37 },
    { doPoctu: 800, zaklad: 18, profi: 27, komplet: 36 },
    { doPoctu: 850, zaklad: 17, profi: 26, komplet: 36 },
    { doPoctu: 900, zaklad: 17, profi: 26, komplet: 35 },
    { doPoctu: 950, zaklad: 17, profi: 25, komplet: 34 },
    { doPoctu: 1000, zaklad: 16, profi: 25, komplet: 34 }
  ],
  polozkyNaBance: 10,
  // Měsíční složka DPPO = (součet základních cen pěti účetních položek × násobek) / počet měsíců.
  // Přírůstky koeficientů se do základu DPPO nezahrnují.
  dppoPocetMesicu: 12,
  dppoNasobek: 1.5,
  // Pevný příplatek, na který se žádné koeficienty nevztahují.
  priplatekPlatceDph: 1000,
  // Doplňkové služby: pevné měsíční příplatky pouze pro Základní a Pokročilý.
  generalniPlnaMocFu: 750,
  obsluhaDatovychSchranek: 500,
  // Hodinové sazby v Kč bez DPH; minimum je za celé daňové přiznání.
  danovePoradenstviHodina: 2500,
  seniorUcetniHodina: 900,
  itPodporaHodina: 1500,
  danovePriznaniHodina: 900,
  danovePriznaniMinimum: 2500,
  financniAuditHodina: 2000,
  ekonomickePoradenstviHodina: 1500,
  pravniPoradenstviHodina: 2000,
  sluzbyAdvokataHodina: 2800,
  intrastatHodina: 900,
  rekonstrukceUcetnictviHodina: 1150,
  // Každý koeficient přidává základ × (koeficient − 1); přírůstky se sčítají.
  // Základ je součet cen faktur, pokladních dokladů, plateb kartou a položek na bance.
  // Skladový koeficient platí pouze při skladové evidenci Typ A.
  koeficientSkladovaEvidence: 1.2,
  // Násobí ceny dokladů při účtování středisek / zakázek.
  koeficientStrediskaZakazky: 1.1,
  // Násobí ceny dokladů při detailní analytice.
  koeficientDetailniAnalytika: 1.1,
  // Obratová pásma a koeficienty cen dokladů podle převládající činnosti.
  obratovaPasma: {
    zbozi: [
        { popis: 'do 50 mil. Kč', koeficient: 1 },
        { popis: '50 - 100 mil. Kč', koeficient: 1 },
      { popis: '100 - 150 mil. Kč', koeficient: 1 },
      { popis: '150 – 500 mil. Kč', koeficient: 1.2 },
      { popis: 'nad 500 mil. Kč', koeficient: 1.4 }
    ],
    sluzby: [
      { popis: 'do 10 mil. Kč', koeficient: 1 },
      { popis: '10 - 50 mil. Kč', koeficient: 1 },
      { popis: '50 – 100 mil. Kč', koeficient: 1.2 },
      { popis: 'nad 100 mil. Kč', koeficient: 1.4 }
    ],
    nezvoleno: [
      { popis: 'do 50 mil. Kč', koeficient: 1 },
      { popis: 'do 100 mil. Kč', koeficient: 1.2 },
      { popis: 'do 200 mil. Kč', koeficient: 1.2 },
      { popis: 'do 500 mil. Kč', koeficient: 1.4 },
      { popis: 'nad 500 mil. Kč', koeficient: 1.4 }
    ]
  },
  // Pásmo určuje součet HPP a DPP/DPČ. Sazba platí pro každého zaměstnance.
  // Na mzdy se žádné koeficienty nevztahují.
  // Nad poslední hranicí se mzdy oceňují individuálně.
  mzdovaPasma: [
    { doPoctu: 2, cenaZaZamestnance: 500 },
    { doPoctu: 50, cenaZaZamestnance: 350 },
    { doPoctu: 100, cenaZaZamestnance: 300 },
    { doPoctu: 200, cenaZaZamestnance: 275 },
    { doPoctu: 5000, cenaZaZamestnance: 250 }
  ]
};
