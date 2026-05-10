export interface Suite {
  id: string;
  slug: string;
  name: { en: string; el: string; fr: string };
  tagline: { en: string; el: string; fr: string };
  description: { en: string; el: string; fr: string };
  shortDescription: { en: string; el: string; fr: string };
  capacity: { guests: number; extraGuests?: number };
  bedrooms: number;
  bathrooms: number;
  size?: string;
  moodLine: { en: string; el: string; fr: string };
  hasJacuzzi: boolean;
  hasKitchen: boolean;
  hasBalcony: boolean;
  hasPrivateYard: boolean;
  bestFor: { en: string[]; el: string[]; fr: string[] };
  highlights: { en: string[]; el: string[]; fr: string[] };
  order: number;
}

export const suites: Suite[] = [
  {
    id: 'boutique',
    slug: 'boutique-suite',
    name: { en: 'Boutique Suite', el: 'Σουίτα Boutique', fr: 'Suite Boutique' },
    tagline: { en: 'Intimate charm in the heart of Apollonia', el: 'Οικεία γοητεία στην καρδιά της Απολλωνίας', fr: 'Charme intime au cœur d’Apollonia' },
    description: { en: 'Our smallest suite is situated in the center of Apollonia, in our traditional Cycladic settlement of Rabagas. Despite being built prior to 1910, the suite offers unique and modern amenities fused with a lovely private yard, kitchen, and ensuite bathroom. The studio is secluded from the other settlements and surprisingly quiet, despite being only 7 steps away from the central pedestrian pathway of Apollonia. By blending modern amenities with traditional Greek practices, the suite provides unparalleled comfort by leveraging custom-made full latex mattresses, feather pillows, and a unique amenities package.', el: 'Η μικρότερη σουίτα μας βρίσκεται στο κέντρο της Απολλωνίας, στον παραδοσιακό κυκλαδίτικο οικισμό Ραμπάγκας. Παρά το γεγονός ότι είναι χτισμένη πριν από το 1910, η σουίτα προσφέρει μοναδικές και σύγχρονες ανέσεις που συνδυάζονται με μια υπέροχη ιδιωτική αυλή, κουζίνα και ιδιωτικό μπάνιο. Το στούντιο είναι απομονωμένο από τους άλλους οικισμούς και εκπληκτικά ήσυχο, παρά το γεγονός ότι απέχει μόλις 7 βήματα από τον κεντρικό πεζόδρομο της Απολλωνίας. Συνδυάζοντας τις σύγχρονες ανέσεις με τις παραδοσιακές ελληνικές πρακτικές, η σουίτα παρέχει απαράμιλλη άνεση αξιοποιώντας ειδικά κατασκευασμένα στρώματα από πλήρες λάτεξ, πουπουλένια μαξιλάρια και ένα μοναδικό πακέτο ανέσεων.', fr: 'Notre plus petite suite est située au centre d’Apollonia, dans le village cycladique traditionnel de Rabagas. Bien qu’elle ait été construite avant 1910, la suite offre des équipements uniques et modernes, combinés à une belle cour privée, une cuisine et une salle de bain attenante. Le studio est isolé des autres établissements et étonnamment calme, bien qu’il ne soit qu’à sept pas de l’allée piétonne centrale d’Apollonia. Alliant les équipements modernes aux pratiques grecques traditionnelles, la suite offre un confort inégalé grâce à des matelas en latex intégral faits sur mesure, des oreillers en plumes et un ensemble d’équipements uniques.' },
    shortDescription: { en: 'Our smallest suite is situated in the center of Apollonia, in our traditional Cycladic settlement of Rabagas.', el: 'Η μικρότερη σουίτα μας βρίσκεται στο κέντρο της Απολλωνίας, στον παραδοσιακό κυκλαδίτικο οικισμό Ραμπάγκας.', fr: 'Notre plus petite suite est située au centre d’Apollonia, dans le village cycladique traditionnel de Rabagas.' },
    capacity: { guests: 2 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: { en: 'The smallest suite, the biggest charm. Your own Cycladic secret.', el: 'Η πιο μικρή σουίτα, η μεγαλύτερη γοητεία. Το δικό σας κυκλαδίτικο μυστικό.', fr: 'La plus petite suite, le plus grand charme. Votre secret cycladique à vous.' },
    hasJacuzzi: false,
    hasKitchen: true,
    hasBalcony: false,
    hasPrivateYard: true,
    bestFor: { en: ['Couples', 'Solo travellers', 'Budget-conscious luxury'], el: ['Ζευγάρια', 'Μεμονωμένοι ταξιδιώτες', 'Προσιτή πολυτέλεια'], fr: ['Couples', 'Voyageurs en solo', 'Luxe accessible'] },
    highlights: { en: ['Private yard', 'Full kitchen', 'Pre-1910 architecture', 'Central yet secluded', 'Most intimate suite'], el: ['Ιδιωτικός κήπος', 'Πλήρης κουζίνα', 'Αρχιτεκτονική προ 1910', 'Κεντρική αλλά απομονωμένη', 'Η πιο οικεία σουίτα'], fr: ['Cour privée', 'Cuisine équipée', 'Architecture d’avant 1910', 'Centrale et pourtant retirée', 'La plus intime des suites'] },
    order: 1,
  },
  {
    id: 'epicure',
    slug: 'epicure-suite',
    name: { en: 'Epicure Suite', el: 'Σουίτα Epicure', fr: 'Suite Epicure' },
    tagline: { en: 'Mindful living, refined simplicity', el: 'Συνειδητή διαβίωση, εκλεπτισμένη απλότητα', fr: 'Vie consciente, simplicité raffinée' },
    description: { en: 'Epicure Suite is located on the ground floor of a beautifully restored traditional Cycladic residence dating back to before 1910, within our Cycladic settlement. Offering direct access and a serene outdoor sitting area, the suite invites guests to unwind while embracing the authentic atmosphere of Sifnos and the timeless charm of its surroundings. Inspired by the philosophy of mindful living and refined simplicity, Epicure Suite blends modern comforts with traditional Greek elements. Its interior reflects thoughtful design, contemporary artistic touches, and carefully selected natural materials that enhance a sense of calm and indulgence. From our premium amenities package to the feather pillows and custom-made full latex mattresses exclusive to Rabagas, every detail has been carefully curated to ensure superior comfort and relaxation. Ideal for two guests, Epicure Suite’s spacious layout can also accommodate up to two additional guests on a comfortable sofa bed. Rooted in Cycladic elegance and Sifnian heritage, Epicure Suite offers a warm and immersive retreat—an invitation to savor life’s simple pleasures and experience a truly authentic escape.', el: 'Η Epicure Suite βρίσκεται στο ισόγειο ενός όμορφα ανακαινισμένου παραδοσιακού κυκλαδίτικου κτηρίου που χρονολογείται πριν από το 1910, εντός του κυκλαδίτικου οικισμού μας. Με άμεση πρόσβαση και έναν ήσυχο εξωτερικό χώρο καθιστικού, η σουίτα προσκαλεί τους επισκέπτες να χαλαρώσουν, απολαμβάνοντας την αυθεντική ατμόσφαιρα της Σίφνου και τη διαχρονική γοητεία του περιβάλλοντος. Εμπνευσμένη από τη φιλοσοφία της συνειδητής διαβίωσης και της εκλεπτυσμένης απλότητας, η Epicure Suite συνδυάζει σύγχρονες ανέσεις με παραδοσιακά ελληνικά στοιχεία. Το εσωτερικό της αποτυπώνει προσεγμένο σχεδιασμό, σύγχρονες καλλιτεχνικές πινελιές και επιλεγμένα φυσικά υλικά που ενισχύουν το αίσθημα ηρεμίας και απόλαυσης. Από το πακέτο παροχών υψηλής ποιότητας έως τα πούπουλα μαξιλάρια και τα ειδικά κατασκευασμένα στρώματα πλήρους λάτεξ, αποκλειστικά για το Rabagas, κάθε λεπτομέρεια έχει επιμεληθεί με στόχο την ανώτερη άνεση και χαλάρωση. Ιδανική για δύο επισκέπτες, η ευρύχωρη διαρρύθμιση της Epicure Suite μπορεί να φιλοξενήσει άνετα έως και δύο επιπλέον άτομα σε καναπέ-κρεβάτι. Βαθιά ριζωμένη στην κυκλαδίτικη κομψότητα και τη σιφνέικη κληρονομιά, η Epicure Suite προσφέρει ένα ζεστό και καθηλωτικό καταφύγιο — μια πρόσκληση να απολαύσετε τις απλές χαρές της ζωής και να ζήσετε μια αυθεντική εμπειρία απόδρασης.', fr: 'Epicure Suite est située au rez-de-chaussée d’une magnifique demeure traditionnelle cycladique magnifiquement restaurée, datant d’avant 1910, au sein de notre village cycladique Rabagas. Offrant un accès direct et un espace extérieur tranquille pour se détendre, la suite invite les clients à se relaxer tout en profitant de l’atmosphère authentique de Sifnos et du charme intemporel de ses environs. Inspirée par la philosophie du « mindful living » et de la simplicité raffinée, l’Epicure Suite allie confort moderne et éléments traditionnels grecs. Son intérieur reflète un design soigné, des touches artistiques contemporaines et des matériaux naturels soigneusement sélectionnés, créant une ambiance de calme et d’indulgence. Du package d’équipements premium aux oreillers en plumes et aux matelas en latex intégral sur mesure, exclusifs à Rabagas, chaque détail a été pensé pour garantir un confort et une détente supérieurs. Idéale pour deux personnes, la disposition spacieuse de l’Epicure Suite peut également accueillir jusqu’à deux invités supplémentaires sur un canapé-lit confortable. Ancrée dans l’élégance cycladique et le patrimoine de Sifnos, l’Epicure Suite offre un refuge chaleureux et immersif — une invitation à savourer les plaisirs simples de la vie et à vivre une véritable expérience authentique.' },
    shortDescription: { en: 'Epicure Suite is located on the ground floor of a beautifully restored traditional Cycladic residence dating back to before 1910, within our Cycladic settlement.', el: 'Η Epicure Suite βρίσκεται στο ισόγειο ενός όμορφα ανακαινισμένου παραδοσιακού κυκλαδίτικου κτηρίου που χρονολογείται πριν από το 1910, εντός του κυκλαδίτικου οικισμού μας.', fr: 'Epicure Suite est située au rez-de-chaussée d’une magnifique demeure traditionnelle cycladique magnifiquement restaurée, datant d’avant 1910, au sein de notre village cycladique Rabagas.' },
    capacity: { guests: 2, extraGuests: 2 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: { en: 'Ground-level calm. Step from bed to garden to jacuzzi to stillness.', el: 'Ησυχία ισογείου. Από το κρεβάτι στον κήπο, στο τζακούζι, στη γαλήνη.', fr: 'Calme au rez-de-chaussée. Du lit au jardin, du jardin au jacuzzi, à la quiétude.' },
    hasJacuzzi: true,
    hasKitchen: true,
    hasBalcony: false,
    hasPrivateYard: true,
    bestFor: { en: ['Couples', 'Wellness seekers', 'Nature lovers'], el: ['Ζευγάρια', 'Λάτρεις ευεξίας', 'Λάτρεις φύσης'], fr: ['Couples', 'Bien-être', 'Amateurs de nature'] },
    highlights: { en: ['Private heated jacuzzi', 'Ground-floor garden access', 'Pre-1910 architecture', 'Natural materials', 'Contemporary art'], el: ['Ιδιωτικό θερμαινόμενο τζακούζι', 'Πρόσβαση σε κήπο ισογείου', 'Αρχιτεκτονική προ 1910', 'Φυσικά υλικά', 'Σύγχρονη τέχνη'], fr: ['Jacuzzi privé chauffé', 'Accès direct au jardin', 'Architecture d’avant 1910', 'Matériaux naturels', 'Art contemporain'] },
    order: 2,
  },
  {
    id: 'euphoria',
    slug: 'euphoria-suite',
    name: { en: 'Euphoria Suite', el: 'Σουίτα Euphoria', fr: 'Suite Euphoria' },
    tagline: { en: 'Heritage views over the Aegean', el: 'Θέα στο Αιγαίο με ιστορία', fr: 'Vues patrimoniales sur la mer Égée' },
    description: { en: 'Euphoria Suite is nestled on the first floor of a restored traditional Cycladic residence pre-dating 1910, located in our Cycladic settlement “Rabagas”. The suite’s exterior offers a relaxing balcony with an exquisite view of the island “Antiparos” and the traditional Sifnian village “Artemonas”. Imbued with a unique blend of architectural elegance, travel-induced inspiration, and monumental history, Euphoria Suites is the amalgam of a calm and relaxing Cycladic haven. Derived from the principles of modern amenities and traditional Greek practices, Euphoria’s interior stands as a triumph of meticulous design and contemporary art. From our amenities package to the feather pillows and custom-made full latex mattresses exclusive to Rabagas, the suite can promise unparalleled comfort. While being the perfect retreat for two, its generous layout can comfortably host up to two more guests on a sofa bed. Euphoria Suites stands as a testament to the Sifnian and Cycladic elegance, a powerful symbol of Greek heritage, and offers an immersive experience for the perfect escape from the ordinary.', el: 'Η σουίτα Euphoria βρίσκεται στον πρώτο όροφο μιας ανακαινισμένης παραδοσιακής κυκλαδίτικης κατοικίας προ του 1910, στον κυκλαδίτικο οικισμό «Ραμπάγκας». Ο εξωτερικός χώρος της σουίτας προσφέρει ένα χαλαρωτικό μπαλκόνι με εξαιρετική θέα στο νησί «Αντίπαρος» και το παραδοσιακό σιφνέικο χωριό «Αρτεμώνας». Διαποτισμένο με ένα μοναδικό μείγμα αρχιτεκτονικής κομψότητας, ταξιδιωτικής έμπνευσης και μνημειώδους ιστορίας, το Euphoria Suites είναι το αμάλγαμα ενός ήρεμου και χαλαρωτικού κυκλαδίτικου καταφυγίου. Προερχόμενο από τις αρχές των σύγχρονων ανέσεων και των παραδοσιακών ελληνικών πρακτικών, το εσωτερικό του Euphoria στέκεται ως ένας θρίαμβος του σχολαστικού σχεδιασμού και της σύγχρονης τέχνης. Από το πακέτο ανέσεων μέχρι τα πουπουλένια μαξιλάρια και τα κατά παραγγελία στρώματα full latex που διατίθενται αποκλειστικά στη Rabagas, η σουίτα μπορεί να υποσχεθεί απαράμιλλη άνεση. Ενώ αποτελεί το τέλειο καταφύγιο για δύο άτομα, η γενναιόδωρη διαρρύθμισή της μπορεί να φιλοξενήσει άνετα έως και δύο ακόμη επισκέπτες σε έναν καναπέ-κρεβάτι. Το Euphoria Suites αποτελεί απόδειξη της σιφνέικης και κυκλαδίτικης κομψότητας, ισχυρό σύμβολο της ελληνικής κληρονομιάς, και προσφέρει μια καθηλωτική εμπειρία για την τέλεια απόδραση από τα συνηθισμένα.', fr: 'La suite Euphoria est nichée au premier étage d’une résidence cycladique traditionnelle restaurée datant d’avant 1910, située dans notre village cycladique « Rabagas ». L’extérieur de la suite offre un balcon relaxant avec une vue exquise sur l’île d’Antiparos et le village traditionnel de Sifnian, Artemonas. Imprégné d’un mélange unique d’élégance architecturale, d’inspiration de voyage et d’histoire monumentale, Euphoria Suites est l’amalgame d’un havre calme et relaxant des Cyclades. L’intérieur de l’hôtel Euphoria Suites est un triomphe du design méticuleux et de l’art contemporain, fondé sur les principes des équipements modernes et des pratiques grecques traditionnelles. De l’ensemble des équipements aux oreillers en plumes et aux matelas en latex intégral faits sur mesure et exclusifs à Rabagas, la suite peut promettre un confort inégalé. Tout en étant la retraite parfaite pour deux, son agencement généreux peut accueillir confortablement jusqu’à deux personnes supplémentaires sur un canapé-lit. Euphoria Suites est un témoignage de l’élégance sifnienne et cycladique, un symbole puissant de l’héritage grec, et offre une expérience immersive pour une parfaite évasion de l’ordinaire.' },
    shortDescription: { en: 'Euphoria Suite is nestled on the first floor of a restored traditional Cycladic residence pre-dating 1910, located in our Cycladic settlement “Rabagas”.', el: 'Η σουίτα Euphoria βρίσκεται στον πρώτο όροφο μιας ανακαινισμένης παραδοσιακής κυκλαδίτικης κατοικίας προ του 1910, στον κυκλαδίτικο οικισμό «Ραμπάγκας».', fr: 'La suite Euphoria est nichée au premier étage d’une résidence cycladique traditionnelle restaurée datant d’avant 1910, située dans notre village cycladique « Rabagas ».' },
    capacity: { guests: 2, extraGuests: 2 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: { en: 'Wake to the Aegean. Watch Antiparos glow at sunset from your balcony.', el: 'Ξυπνήστε με το Αιγαίο. Δείτε την Αντίπαρο να λάμπει στο ηλιοβασίλεμα.', fr: 'Réveillez-vous face à la mer Égée. Regardez Antiparos s’embraser au coucher du soleil depuis votre balcon.' },
    hasJacuzzi: false,
    hasKitchen: true,
    hasBalcony: true,
    hasPrivateYard: false,
    bestFor: { en: ['Couples', 'View lovers', 'Art enthusiasts'], el: ['Ζευγάρια', 'Λάτρεις θέας', 'Λάτρεις τέχνης'], fr: ['Couples', 'Amateurs de vues', 'Amateurs d’art'] },
    highlights: { en: ['Panoramic Aegean views', 'Pre-1910 architecture', 'Contemporary art', 'Views of Antiparos', 'Artemonas village views'], el: ['Πανοραμική θέα Αιγαίου', 'Αρχιτεκτονική προ 1910', 'Σύγχρονη τέχνη', 'Θέα Αντιπάρου', 'Θέα Αρτεμώνας'], fr: ['Vues panoramiques sur la mer Égée', 'Architecture d’avant 1910', 'Art contemporain', 'Vue sur Antiparos', 'Vue sur le village d’Artemonas'] },
    order: 3,
  },
  {
    id: 'moonshine',
    slug: 'moonshine-suite',
    name: { en: 'Moonshine Suite', el: 'Σουίτα Moonshine', fr: 'Suite Moonshine' },
    tagline: { en: 'Intimate luxury for two', el: 'Πολυτελής απομόνωση για δύο', fr: 'Luxe intime pour deux' },
    description: { en: 'The Moonshine Suite is an embodiment of timeless charm, nestling as one of the newest additions to our Cycladic settlement “Rabagas”, crafted impeccably using the traditional Crooked Plaster technique. This suite is the epitome of comfort, offering a unique outdoor space and a spacious hot tub perfect for a romantic escape from the ordinary. The Suite is not only about the exterior allure but also features an interior that radiates warmth and comfort. It offers a spacious bathroom with dual showers and two sinks. By blending modern amenities with traditional Greek practices, the suite provides unparalleled comfort by leveraging custom-made full latex mattresses, feather pillows, and a unique amenities package. Even if the suite is designed to provide a comfortable setting for two, its generous layout can accommodate an extra guest on the sofa. Our Suite is the amalgam of the Sifnian and Cycladic heritage, endorsing a stylish, homey, and comfortable environment for an immersive experience in a tranquil Cycladic haven.', el: 'Η σουίτα Moonshine είναι μια ενσάρκωση της διαχρονικής γοητείας, που βρίσκεται ως μια από τις νεότερες προσθήκες στον κυκλαδίτικο οικισμό μας «Rabagas», κατασκευασμένη άψογα με την παραδοσιακή τεχνική Crooked Plaster. Αυτή η σουίτα είναι η επιτομή της άνεσης, προσφέροντας έναν μοναδικό εξωτερικό χώρο και ένα ευρύχωρο υδρομασάζ ιδανικό για μια ρομαντική απόδραση από τα συνηθισμένα. Η σουίτα δεν έχει να κάνει μόνο με την εξωτερική γοητεία, αλλά διαθέτει και ένα εσωτερικό που εκπέμπει ζεστασιά και άνεση. Προσφέρει ένα ευρύχωρο μπάνιο με δύο ντους και δύο νιπτήρες. Συνδυάζοντας τις σύγχρονες ανέσεις με τις παραδοσιακές ελληνικές πρακτικές, η σουίτα προσφέρει απαράμιλλη άνεση αξιοποιώντας ειδικά κατασκευασμένα στρώματα full latex, πουπουλένια μαξιλάρια και ένα μοναδικό πακέτο ανέσεων. Παρόλο που η σουίτα έχει σχεδιαστεί για να παρέχει ένα άνετο περιβάλλον για δύο άτομα, η γενναιόδωρη διαρρύθμισή της μπορεί να φιλοξενήσει έναν επιπλέον επισκέπτη στον καναπέ. Η σουίτα μας είναι το αμάλγαμα της σιφνέικης και της κυκλαδίτικης κληρονομιάς, υποστηρίζοντας ένα κομψό, οικείο και άνετο περιβάλλον για μια καθηλωτική εμπειρία σε ένα γαλήνιο κυκλαδίτικο καταφύγιο.', fr: 'La suite Moonshine est l’incarnation d’un charme intemporel. Elle est l’un des nouveaux ajouts à notre établissement cycladique « Rabagas » et a été fabriquée de manière impeccable en utilisant la technique traditionnelle du plâtre tordu. Cette suite est la quintessence du confort, offrant un espace extérieur unique et un bain à remous spacieux, idéal pour une escapade romantique hors du commun. La suite ne se limite pas à l’allure extérieure, elle offre également un intérieur qui rayonne de chaleur et de confort. Elle dispose d’une salle de bains spacieuse avec deux douches et deux lavabos. Alliant les équipements modernes aux pratiques grecques traditionnelles, la suite offre un confort inégalé grâce à des matelas en latex intégral faits sur mesure, des oreillers en plumes et un ensemble d’équipements uniques. Même si la suite est conçue pour offrir un cadre confortable à deux personnes, son agencement généreux permet d’accueillir un invité supplémentaire sur le canapé. Notre suite est l’amalgame de l’héritage sifnien et cycladique, offrant un environnement élégant, accueillant et confortable pour une expérience immersive dans un havre de paix cycladique.' },
    shortDescription: { en: 'The Moonshine Suite is an embodiment of timeless charm, nestling as one of the newest additions to our Cycladic settlement “Rabagas”, crafted impeccably using the traditional Crooked Plaster technique.', el: 'Η σουίτα Moonshine είναι μια ενσάρκωση της διαχρονικής γοητείας, που βρίσκεται ως μια από τις νεότερες προσθήκες στον κυκλαδίτικο οικισμό μας «Rabagas», κατασκευασμένη άψογα με την παραδοσιακή τεχνική Crooked Plaster.', fr: 'La suite Moonshine est l’incarnation d’un charme intemporel.' },
    capacity: { guests: 2, extraGuests: 1 },
    bedrooms: 1,
    bathrooms: 1,
    moodLine: { en: 'Designed for two. A place to disappear together.', el: 'Σχεδιασμένη για δύο. Ένα μέρος να χαθείτε μαζί.', fr: 'Conçue pour deux. Un lieu où disparaître ensemble.' },
    hasJacuzzi: true,
    hasKitchen: false,
    hasBalcony: false,
    hasPrivateYard: true,
    bestFor: { en: ['Couples', 'Honeymoons', 'Romantic getaways'], el: ['Ζευγάρια', 'Μήνας του μέλιτος', 'Ρομαντικές αποδράσεις'], fr: ['Couples', 'Lunes de miel', 'Escapades romantiques'] },
    highlights: { en: ['Private heated jacuzzi', 'Dual rain showers', 'Twin sinks', 'Newest suite', 'Unique outdoor space'], el: ['Ιδιωτικό τζακούζι', 'Διπλό ντους βροχής', 'Διπλοί νιπτήρες', 'Νεότερη σουίτα', 'Μοναδικός εξωτερικός χώρος'], fr: ['Jacuzzi privé chauffé', 'Doubles douches pluie', 'Doubles vasques', 'Suite la plus récente', 'Espace extérieur unique'] },
    order: 4,
  },
  {
    id: 'sunshine',
    slug: 'sunshine-suite',
    name: { en: 'Sunshine Suite', el: 'Σουίτα Sunshine', fr: 'Suite Sunshine' },
    tagline: { en: 'Our most spacious residence', el: 'Η πιο ευρύχωρη κατοικία μας', fr: 'Notre demeure la plus spacieuse' },
    description: { en: 'Our most spacious suite, the Sunshine Suite, provides accommodation for up to 5 people across two distinct buildings. This Suite is an embodiment of timeless charm, nestling as one of the newest additions to our Cycladic settlement “Rabagas”, crafted impeccably using the traditional Crooked Plaster technique. The Sunshine Suite boasts a majestic outdoor area complete with a hot tub designed for four people, making it the amalgam of relaxation. The suite also includes a dining table, a comfortable living area, an outdoor dining setting, and a hammock, all aimed at providing a unique and unforgettable social experience for the guests. By blending modern amenities with traditional Greek practices, the suite provides unparalleled comfort by leveraging custom-made full latex mattresses, feather pillows, and a unique amenities package. Even if the suite is designed to provide a comfortable setting for 4, its generous layout can accommodate an extra guest on the sofa. The suite’s interior radiates warmth and comfortability with an ensuite bathroom in each bedroom and a spacious bathtub in the main building.', el: 'Η πιο ευρύχωρη σουίτα μας, η Sunshine Suite, προσφέρει διαμονή για έως και 5 άτομα σε δύο διαφορετικά κτίρια. Αυτή η σουίτα είναι η ενσάρκωση της διαχρονικής γοητείας, που βρίσκεται ως μία από τις νεότερες προσθήκες στον κυκλαδίτικο οικισμό μας «Rabagas», κατασκευασμένη άψογα με την παραδοσιακή τεχνική του στραβού σοβά. Η Σουίτα Sunshine διαθέτει έναν μεγαλοπρεπή εξωτερικό χώρο με υδρομασάζ σχεδιασμένο για τέσσερα άτομα, καθιστώντας την το αμάλγαμα της χαλάρωσης. Η σουίτα περιλαμβάνει επίσης ένα τραπέζι, ένα άνετο καθιστικό, ένα υπαίθριο τραπέζι και μια αιώρα, όλα με στόχο να προσφέρουν μια μοναδική και αξέχαστη κοινωνική εμπειρία στους επισκέπτες. Συνδυάζοντας τις σύγχρονες ανέσεις με τις παραδοσιακές ελληνικές πρακτικές, η σουίτα παρέχει απαράμιλλη άνεση, αξιοποιώντας ειδικά κατασκευασμένα στρώματα full latex, πουπουλένια μαξιλάρια και ένα μοναδικό πακέτο ανέσεων. Παρόλο που η σουίτα έχει σχεδιαστεί για να παρέχει ένα άνετο περιβάλλον για 4 άτομα, η γενναιόδωρη διαρρύθμισή της μπορεί να φιλοξενήσει έναν επιπλέον επισκέπτη στον καναπέ. Το εσωτερικό της σουίτας εκπέμπει ζεστασιά και άνεση με ένα ιδιωτικό μπάνιο σε κάθε υπνοδωμάτιο και μια ευρύχωρη μπανιέρα στο κεντρικό κτίριο.', fr: 'Notre suite la plus spacieuse, la Sunshine Suite, peut accueillir jusqu’à 5 personnes dans deux bâtiments distincts. Cette suite est l’incarnation d’un charme intemporel, nichée dans l’un des plus récents ajouts à notre établissement cycladique « Rabagas », réalisé de manière impeccable en utilisant la technique traditionnelle du plâtre tordu. La suite Sunshine dispose d’un espace extérieur majestueux avec un bain à remous conçu pour quatre personnes, ce qui en fait l’amalgame de la relaxation. La suite comprend également une table à manger, un coin salon confortable, une salle à manger en plein air et un hamac, tous destinés à offrir une expérience sociale unique et inoubliable aux hôtes. Alliant les équipements modernes aux pratiques grecques traditionnelles, la suite offre un confort inégalé grâce à des matelas en latex intégral faits sur mesure, des oreillers en plumes et un ensemble d’équipements uniques. Même si la suite est conçue pour offrir un cadre confortable à quatre personnes, son agencement généreux permet d’accueillir un invité supplémentaire sur le canapé. L’intérieur de la suite rayonne de chaleur et de confort avec une salle de bains attenante dans chaque chambre et une baignoire spacieuse dans le bâtiment principal.' },
    shortDescription: { en: 'Our most spacious suite, the Sunshine Suite, provides accommodation for up to 5 people across two distinct buildings.', el: 'Η πιο ευρύχωρη σουίτα μας, η Sunshine Suite, προσφέρει διαμονή για έως και 5 άτομα σε δύο διαφορετικά κτίρια.', fr: 'Notre suite la plus spacieuse, la Sunshine Suite, peut accueillir jusqu’à 5 personnes dans deux bâtiments distincts.' },
    capacity: { guests: 4, extraGuests: 1 },
    bedrooms: 2,
    bathrooms: 2,
    moodLine: { en: 'Space to breathe. Room to gather. A hammock for doing nothing at all.', el: 'Χώρος να αναπνεύσεις. Μέρος να μαζευτείς. Μια αιώρα για το τίποτα.', fr: 'De l’espace pour respirer. La place pour se réunir. Un hamac pour ne rien faire du tout.' },
    hasJacuzzi: true,
    hasKitchen: true,
    hasBalcony: true,
    hasPrivateYard: true,
    bestFor: { en: ['Families', 'Groups', 'Extended stays'], el: ['Οικογένειες', 'Παρέες', 'Παρατεταμένες διαμονές'], fr: ['Familles', 'Groupes', 'Longs séjours'] },
    highlights: { en: ['Private heated jacuzzi', 'Two separate buildings', 'Spacious bathtub', 'Outdoor dining area', 'Hammock'], el: ['Ιδιωτικό θερμαινόμενο τζακούζι', 'Δύο ανεξάρτητα κτίρια', 'Ευρύχωρη μπανιέρα', 'Εξωτερικό τραπεζάκι', 'Αιώρα'], fr: ['Jacuzzi privé chauffé', 'Deux bâtiments distincts', 'Baignoire spacieuse', 'Coin repas extérieur', 'Hamac'] },
    order: 5,
  },
/**
 * Απολλωνία is a DISTINCT property from Sunshine.
 * Note: the legacy WordPress site (rabagas-suites.com) shows Apollonia's <meta description>
 * verbatim copied from Sunshine — that was a copy/paste error in the live CMS, not a sign
 * the suites are aliases. Do not merge.
 */
  {
    id: 'apollonia',
    slug: 'apollonia-suite',
    name: { en: 'Apollonia Suite', el: 'Σουίτα Apollonia', fr: 'Suite Apollonia' },
    tagline: { en: 'The grand residence', el: 'Η μεγάλη κατοικία', fr: 'La grande demeure' },
    description: { en: 'The Apollonia Suite is the flagship residence of the Rabagas settlement, spanning two distinct traditional buildings with multiple bedrooms. Each bedroom has its own ensuite bathroom, while the main building features a spacious bathtub. The majestic outdoor area includes dining, lounging, a hammock, and a private heated jacuzzi for four. A true Cycladic estate in the heart of Apollonia.', el: 'Η σουίτα Απολλωνία είναι η κορυφαία κατοικία του οικισμού Rabagas, εκτεινόμενη σε δύο διακριτά παραδοσιακά κτίρια με πολλαπλά υπνοδωμάτια, εξωτερικό χώρο και ιδιωτικό τζακούζι.', fr: 'La Suite Apollonia est la résidence emblématique du village Rabagas, s’étendant sur deux bâtiments traditionnels distincts avec plusieurs chambres. Chaque chambre dispose d’une salle de bain attenante, tandis que le bâtiment principal offre une baignoire spacieuse. Le majestueux espace extérieur réunit salle à manger, coin détente, hamac et un jacuzzi privé chauffé pour quatre personnes. Un véritable domaine cycladique au cœur d’Apollonia.' },
    shortDescription: { en: 'Flagship two-building residence with multiple bedrooms, bathtub, grand outdoor area, and private heated jacuzzi.', el: 'Κορυφαία κατοικία δύο κτιρίων με πολλαπλά υπνοδωμάτια, εξωτερικό χώρο και τζακούζι.', fr: 'Résidence emblématique sur deux bâtiments avec plusieurs chambres, baignoire, vaste espace extérieur et jacuzzi privé chauffé.' },
    capacity: { guests: 4, extraGuests: 1 },
    bedrooms: 2,
    bathrooms: 2,
    moodLine: { en: 'The grand residence. Two buildings, one private world.', el: 'Η μεγάλη κατοικία. Δύο κτίρια, ένας ιδιωτικός κόσμος.', fr: 'La grande demeure. Deux bâtiments, un seul monde privé.' },
    hasJacuzzi: true,
    hasKitchen: true,
    hasBalcony: true,
    hasPrivateYard: true,
    bestFor: { en: ['Families', 'Groups', 'Celebrations'], el: ['Οικογένειες', 'Παρέες', 'Εορτασμοί'], fr: ['Familles', 'Groupes', 'Célébrations'] },
    highlights: { en: ['Private heated jacuzzi', 'Two separate buildings', 'Spacious bathtub', 'Grand outdoor dining', 'Hammock & lounging'], el: ['Ιδιωτικό τζακούζι', 'Δύο ανεξάρτητα κτίρια', 'Ευρύχωρη μπανιέρα', 'Εξωτερικό τραπεζάκι', 'Αιώρα & χαλάρωση'], fr: ['Jacuzzi privé chauffé', 'Deux bâtiments distincts', 'Baignoire spacieuse', 'Grand espace repas extérieur', 'Hamac & coin détente'] },
    order: 6,
  },
];

export function getSuiteBySlug(slug: string): Suite | undefined {
  return suites.find((s) => s.slug === slug);
}

export function getAllSuites(): Suite[] {
  return [...suites].sort((a, b) => a.order - b.order);
}
