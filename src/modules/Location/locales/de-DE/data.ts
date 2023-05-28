import { City, State } from "../../types";

export class LocationData {
  static states: State[] = [
    { name: "Baden-Württemberg", abbreviation: "BW" },
    { name: "Bayern", abbreviation: "BY" },
    { name: "Berlin", abbreviation: "BE" },
    { name: "Brandenburg", abbreviation: "BB" },
    { name: "Bremen", abbreviation: "HB" },
    { name: "Hamburg", abbreviation: "HH" },
    { name: "Hessen", abbreviation: "HE" },
    { name: "Niedersachsen", abbreviation: "NI" },
    { name: "Mecklenburg-Vorpommern", abbreviation: "MV" },
    { name: "Nordrhein-Westfalen", abbreviation: "NRW" },
    { name: "Rheinland-Pfalz", abbreviation: "RP" },
    { name: "Saarland", abbreviation: "SL" },
    { name: "Sachsen", abbreviation: "SN" },
    { name: "Sachsen", abbreviation: "ST" },
    { name: "Schleswig-Holstein", abbreviation: "SH" },
    { name: "Thüringen", abbreviation: "TH" },
  ];

  static cities: City[] = [
    { name: "Berlin", state: "Berlin", zipCode: "10115" },
    { name: "Hamburg", state: "Hamburg", zipCode: "20095" },
    { name: "München", state: "Bayern", zipCode: "80331" },
    { name: "Köln", state: "Nordrhein-Westfalen", zipCode: "50667" },
    { name: "Frankfurt am Main", state: "Hessen", zipCode: "60311" },
    { name: "Stuttgart", state: "Baden-Württemberg", zipCode: "70173" },
    { name: "Düsseldorf", state: "Nordrhein-Westfalen", zipCode: "40213" },
    { name: "Dortmund", state: "Nordrhein-Westfalen", zipCode: "44135" },
    { name: "Essen", state: "Nordrhein-Westfalen", zipCode: "45127" },
    { name: "Leipzig", state: "Sachsen", zipCode: "04109" },
    { name: "Dresden", state: "Sachsen", zipCode: "01067" },
    { name: "Hannover", state: "Niedersachsen", zipCode: "30159" },
    { name: "Nürnberg", state: "Bayern", zipCode: "90402" },
    { name: "Duisburg", state: "Nordrhein-Westfalen", zipCode: "47051" },
    { name: "Bochum", state: "Nordrhein-Westfalen", zipCode: "44787" },
    { name: "Wuppertal", state: "Nordrhein-Westfalen", zipCode: "42103" },
    { name: "Bielefeld", state: "Nordrhein-Westfalen", zipCode: "33602" },
    { name: "Bonn", state: "Nordrhein-Westfalen", zipCode: "53111" },
    { name: "Münster", state: "Nordrhein-Westfalen", zipCode: "48143" },
    { name: "Karlsruhe", state: "Baden-Württemberg", zipCode: "76131" },
    { name: "Mannheim", state: "Baden-Württemberg", zipCode: "68161" },
    { name: "Augsburg", state: "Bayern", zipCode: "86150" },
    { name: "Wiesbaden", state: "Hessen", zipCode: "65183" },
    { name: "Gelsenkirchen", state: "Nordrhein-Westfalen", zipCode: "45879" },
    { name: "Mönchengladbach", state: "Nordrhein-Westfalen", zipCode: "41061" },
    { name: "Braunschweig", state: "Niedersachsen", zipCode: "38100" },
    { name: "Chemnitz", state: "Sachsen", zipCode: "09111" },
    { name: "Kiel", state: "Schleswig-Holstein", zipCode: "24103" },
    { name: "Aachen", state: "Nordrhein-Westfalen", zipCode: "52062" },
    { name: "Magdeburg", state: "Sachsen-Anhalt", zipCode: "39104" },
    { name: "Freiburg im Breisgau", state: "Baden-Württemberg", zipCode: "79098" },
    { name: "Lübeck", state: "Schleswig-Holstein", zipCode: "23552" },
    { name: "Erfurt", state: "Thüringen", zipCode: "99084" },
    { name: "Rostock", state: "Mecklenburg-Vorpommern", zipCode: "18055" },
    { name: "Kassel", state: "Hessen", zipCode: "34117" },
    { name: "Hagen", state: "Nordrhein-Westfalen", zipCode: "58095" },
    { name: "Saarbrücken", state: "Saarland", zipCode: "66111" },
    { name: "Mainz", state: "Rheinland-Pfalz", zipCode: "55116" },
    { name: "Halle (Saale)", state: "Sachsen-Anhalt", zipCode: "06108" },
    { name: "Ludwigshafen am Rhein", state: "Rheinland-Pfalz", zipCode: "67059" },
    { name: "Osnabrück", state: "Niedersachsen", zipCode: "49074" },
    { name: "Oldenburg", state: "Niedersachsen", zipCode: "26122" },
    { name: "Leverkusen", state: "Nordrhein-Westfalen", zipCode: "51379" },
    { name: "Solingen", state: "Nordrhein-Westfalen", zipCode: "42651" },
    { name: "Potsdam", state: "Brandenburg", zipCode: "14467" },
    { name: "Neuss", state: "Nordrhein-Westfalen", zipCode: "41460" },
    { name: "Heidelberg", state: "Baden-Württemberg", zipCode: "69117" },
    { name: "Darmstadt", state: "Hessen", zipCode: "64283" },
    { name: "Regensburg", state: "Bayern", zipCode: "93047" },
    { name: "Ingolstadt", state: "Bayern", zipCode: "85049" },
    { name: "Würzburg", state: "Bayern", zipCode: "97070" },
    { name: "Wolfsburg", state: "Niedersachsen", zipCode: "38440" },
    { name: "Fürth", state: "Bayern", zipCode: "90762" },
    { name: "Ulm", state: "Baden-Württemberg", zipCode: "89073" },
    { name: "Heilbronn", state: "Baden-Württemberg", zipCode: "74072" },
    { name: "Paderborn", state: "Nordrhein-Westfalen", zipCode: "33098" },
    { name: "Offenbach am Main", state: "Hessen", zipCode: "63065" },
    { name: "Göttingen", state: "Niedersachsen", zipCode: "37073" },
    { name: "Bottrop", state: "Nordrhein-Westfalen", zipCode: "46236" },
    { name: "Hildesheim", state: "Niedersachsen", zipCode: "31134" },
    { name: "Cottbus", state: "Brandenburg", zipCode: "03046" },
    { name: "Witten", state: "Nordrhein-Westfalen", zipCode: "58452" },
    { name: "Ratingen", state: "Nordrhein-Westfalen", zipCode: "40878" },
    { name: "Lünen", state: "Nordrhein-Westfalen", zipCode: "44532" },
    { name: "Villingen-Schwenningen", state: "Baden-Württemberg", zipCode: "78050" },
    { name: "Gera", state: "Thüringen", zipCode: "07545" },
    { name: "Iserlohn", state: "Nordrhein-Westfalen", zipCode: "58636" },
    { name: "Trier", state: "Rheinland-Pfalz", zipCode: "54290" },
    { name: "Gütersloh", state: "Nordrhein-Westfalen", zipCode: "33330" },
    { name: "Marl", state: "Nordrhein-Westfalen", zipCode: "45768" },
    { name: "Lüneburg", state: "Niedersachsen", zipCode: "21335" },
    { name: "Düren", state: "Nordrhein-Westfalen", zipCode: "52349" },
    { name: "Velbert", state: "Nordrhein-Westfalen", zipCode: "42549" },
    { name: "Viersen", state: "Nordrhein-Westfalen", zipCode: "41747" },
    { name: "Delmenhorst", state: "Niedersachsen", zipCode: "27749" },
    { name: "Neumünster", state: "Schleswig-Holstein", zipCode: "24534" },
    { name: "Konstanz", state: "Baden-Württemberg", zipCode: "78462" },
    { name: "Landshut", state: "Bayern", zipCode: "84028" },
    { name: "Norderstedt", state: "Schleswig-Holstein", zipCode: "22844" },
    { name: "Rheine", state: "Nordrhein-Westfalen", zipCode: "48429" },
    { name: "Detmold", state: "Nordrhein-Westfalen", zipCode: "32756" },
    { name: "Bayreuth", state: "Bayern", zipCode: "95444" },
    { name: "Stralsund", state: "Mecklenburg-Vorpommern", zipCode: "18439" },
    { name: "Lippstadt", state: "Nordrhein-Westfalen", zipCode: "59555" },
    { name: "Celle", state: "Niedersachsen", zipCode: "29221" },
    { name: "Weimar", state: "Thüringen", zipCode: "99423" },
    { name: "Fulda", state: "Hessen", zipCode: "36037" },
    { name: "Brandenburg an der Havel", state: "Brandenburg", zipCode: "14770" },
    { name: "Sindelfingen", state: "Baden-Württemberg", zipCode: "71063" },
    { name: "Frankfurt (Oder)", state: "Brandenburg", zipCode: "15230" },
    { name: "Schwerin", state: "Mecklenburg-Vorpommern", zipCode: "19053" },
    { name: "Gladbeck", state: "Nordrhein-Westfalen", zipCode: "45964" },
    { name: "Wesel", state: "Nordrhein-Westfalen", zipCode: "46483" },
    { name: "Minden", state: "Nordrhein-Westfalen", zipCode: "32423" },
    { name: "Rosenheim", state: "Bayern", zipCode: "83022" },
    { name: "Bamberg", state: "Bayern", zipCode: "96047" },
    { name: "Offenburg", state: "Baden-Württemberg", zipCode: "77652" },
    { name: "Friedrichshafen", state: "Baden-Württemberg", zipCode: "88045" },
    { name: "Alsdorf", state: "Nordrhein-Westfalen", zipCode: "52477" },
    { name: "Stolberg (Rheinland)", state: "Nordrhein-Westfalen", zipCode: "52222" },
    { name: "Görlitz", state: "Sachsen", zipCode: "02826" },
    { name: "Herford", state: "Nordrhein-Westfalen", zipCode: "32049" },
    { name: "Hattingen", state: "Nordrhein-Westfalen", zipCode: "45527" },
    { name: "Herten", state: "Nordrhein-Westfalen", zipCode: "45699" },
    { name: "Greifswald", state: "Mecklenburg-Vorpommern", zipCode: "17489" },
    { name: "Bad Homburg vor der Höhe", state: "Hessen", zipCode: "61348" },
    { name: "Meerbusch", state: "Nordrhein-Westfalen", zipCode: "40667" },
    { name: "Wolfenbüttel", state: "Niedersachsen", zipCode: "38300" },
    { name: "Gießen", state: "Hessen", zipCode: "35390" },
    { name: "Wilhelmshaven", state: "Niedersachsen", zipCode: "26382" },
    { name: "Lörrach", state: "Baden-Württemberg", zipCode: "79539" },
    { name: "Neubrandenburg", state: "Mecklenburg-Vorpommern", zipCode: "17033" },
    { name: "Eschweiler", state: "Nordrhein-Westfalen", zipCode: "52249" },
  ];

  static streetNames: string[] = [
    "Goethestraße",
    "Berliner Straße",
    "Hauptstraße",
    "Schillerstraße",
    "Mozartstraße",
    "Bahnhofstraße",
    "Lindenstraße",
    "Kaiserstraße",
    "Friedrichstraße",
    "Adenauerplatz",
    "Rathausplatz",
    "Steinstraße",
    "Schlossallee",
    "Bismarckstraße",
    "Parkstraße",
    "Am Markt",
    "Kirchstraße",
    "Bachstraße",
    "Am Bahnhof",
    "Schulweg",
    "Gartenstraße",
    "Bahnhofsweg",
    "Bergstraße",
    "Rosenstraße",
    "Heinrichstraße",
    "Feldstraße",
    "Jahnstraße",
    "Königstraße",
    "Eichenweg",
    "Mühlenstraße",
    "Schwalbenweg",
    "Drosselweg",
    "Lerchenweg",
    "Wiesenstraße",
    "Dammstraße",
    "Buchenweg",
    "Erlenweg",
    "Sonnenallee",
    "Am Stadtpark",
    "Fasanenweg",
    "Schillerplatz",
    "Adlerstraße",
    "Blumenstraße",
    "Rathausstraße",
    "Brückenstraße",
    "Seestraße",
    "Rathenaustraße",
    "Hermannstraße",
    "Poststraße",
    "Ludwigstraße",
    "Schulstraße",
  ];
}
