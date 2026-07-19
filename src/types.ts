export interface Book {
  id: string;
  volume: number;
  title: string;
  subtitle: string;
  tagline: string;
  coverImage: string;
  colorTheme: string; // Tailwind tint/accent color name (e.g. "blue", "emerald", "amber")
  accentHex: string; // Hex code for custom styles (e.g. "#60a5fa", "#34d399", "#fbbf24")
  releaseDate: string;
  pages: number;
  classification: string;
  synopsis: string;
  excerpt: string;
  coordinates: string;
  decodedLocation: string;
  keyThemes: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface LoreFragment {
  id: string;
  title: string;
  date: string;
  classification: string;
  content: string;
  redactedWords: string[];
}

export const BOOKS_DATA: Book[] = [
  {
    id: "volume-1",
    volume: 1,
    title: "Rendlesham Signals From the Threshold",
    subtitle: "The Hidden Race for UAP Technology",
    tagline: "The darkness of the woods hides more than just shadows.",
    coverImage: "/src/assets/images/signals_threshold_cover_v2_1784429118477.jpg",
    colorTheme: "blue",
    accentHex: "#60a5fa",
    releaseDate: "Autumn 2026",
    pages: 384,
    classification: "DECLASS_LEVEL_ONE",
    synopsis: "In the freezing early hours of December 1980, deep within the pine-dense enclosure of Rendlesham Forest, a military patrol detects unusual lights. What they discover at the East Gate is not a downed aircraft, but a triangular metallic craft hums with cold static. When touched, it transmits an intricate matrix of binary code directly into the minds of the witnesses. Thus begins the first chapter of a mystery that spans generations.",
    excerpt: "The needles of the pines did not rustle. The cold was absolute, freezing the moisture in our breath before it could fall. And then, the gate hummed. Not a sound, but a vibration in the marrow of our bones. It was metallic, yet it breathed.",
    coordinates: "52.0917° N, 1.4389° E",
    decodedLocation: "Suffolk, Sector 4",
    keyThemes: ["First Encounter", "Tactile Transmission", "Military Covert Ops"],
    metrics: [
      { label: "Radiation Peak", value: "4.2 mR/hr" },
      { label: "Witness Count", value: "3 Primary" },
      { label: "Artifact Dimension", value: "3m x 2.5m" }
    ]
  },
  {
    id: "volume-2",
    volume: 2,
    title: "Project Rendlesham",
    subtitle: "Crossing the Threshold of Revelation",
    tagline: "The subconscious code unlocks. The true threshold of contact has been crossed.",
    coverImage: "/src/assets/images/project_rendlesham_cover_1784429461811.jpg",
    colorTheme: "emerald",
    accentHex: "#34d399",
    releaseDate: "Winter 2026",
    pages: 412,
    classification: "DECLASS_LEVEL_TWO",
    synopsis: "The ground-breaking sequel investigating the 1980 Rendlesham Forest Incident. John Burroughs and Toby Martinez delve deep into declassified military records, medical evidence, and secret intelligence programs to expose the true scale of the encounter. Rather than a simple sighting, the phenomenon represents a physical and biological transmission. This volume documents the hidden race for advanced UAP technology and the profound spiritual, military, and cosmic implications of crossing the threshold of revelation.",
    excerpt: "We weren't just witnesses; we were receivers. The physical toll recorded in our military medical files is proof of a biological transmission that bypassed our senses. The government didn't want to hide what we saw—they wanted to hide what we became.",
    coordinates: "30.0131° N, 31.2089° E",
    decodedLocation: "Giza / Altiplano Link",
    keyThemes: ["Declassified Records", "Biological Impact", "Intelligence Programs"],
    metrics: [
      { label: "Declassified Pages", value: "12,000+" },
      { label: "Physical Impact", value: "Recorded" },
      { label: "Document Source", value: "DoD / MoD" }
    ]
  },
  {
    id: "volume-3",
    volume: 3,
    title: "The Monumental Silence",
    subtitle: "The Architecture of the Unknown",
    tagline: "The final frequency resolves not in sound, but in absolute stillness.",
    coverImage: "/src/assets/images/book3_cover_1784331543466.jpg",
    colorTheme: "amber",
    accentHex: "#fbbf24",
    releaseDate: "Spring 2027",
    pages: 448,
    classification: "DECLASS_LEVEL_THREE",
    synopsis: "The culmination of the trilogy leads to an isolated mountain observatory where the ultimate signal is scheduled to resolve. As massive architectural structures around the world begin to resonate in perfect, silent unison, humanity is forced to confront a humbling truth: we are not the masters of this planet, nor were we its first tenants. The monument is opening, and the silence is about to end.",
    excerpt: "We stood on the high ridge, the observatory dome open above us like an eye looking into the infinite. When the alignment occurred, there was no explosion, no flash of light. Only a profound, heavy silence that pressed against our ears, and then—the stones began to rise.",
    coordinates: "38.2572° N, 22.4439° E",
    decodedLocation: "Parnassus Observatory",
    keyThemes: ["Cosmic Alignment", "Monument Resonance", "Ancient Architects"],
    metrics: [
      { label: "Resonance Index", value: "0.00 Hz" },
      { label: "Elevation Peak", value: "2,457m" },
      { label: "Alignment Error", value: "< 0.001%" }
    ]
  }
];

export const LORE_FRAGMENTS: LoreFragment[] = [
  {
    id: "log-1",
    title: "Initial Contact Report excerpt",
    date: "Dec 26, 1980",
    classification: "RESTRICTED // INTELLIGENCE UNIT",
    content: "At approximately 03:00 hours, security patrol observed unusual lights near the East Gate. Officers entered the forest, anticipating a downed commercial aircraft. Upon approaching coordinates 52.0917 N, 1.4389 E, they encountered a triangular metallic object, approximately 3 meters in width, emitting a pulsing blue-white light. The air was heavy with ozone and charged with static electricity. Airman Burroughs approached the object and made direct hand-to-hull contact, immediately collapsing into an alpha-wave trance state. The object vanished silently shortly thereafter.",
    redactedWords: ["security patrol", "triangular metallic", "Burroughs", "hand-to-hull", "alpha-wave trance"]
  },
  {
    id: "log-2",
    title: "Subconscious Download Analysis",
    date: "Jan 12, 1981",
    classification: "SECRET // MEDICAL DIVISION",
    content: "Psychiatric evaluation of subject Burroughs reveals recurring dreams consisting of high-speed optical flashes of binary sequences. Subject reports feeling as if a massive physical weight is pressed into his cortex. Under deep hypnotic regression, subject verbally recited a sequence of eight-bit blocks. Initial analysis by cryptographers indicates these represent geodetic coordinates pointing directly to ancient architectural monuments and specific oceanic trenches. The file has been classified under project REDLIGHT and transferred to higher authority.",
    redactedWords: ["Burroughs", "binary sequences", "geodetic coordinates", "monuments", "REDLIGHT"]
  },
  {
    id: "log-3",
    title: "Signal Detection Log (Delphi Station)",
    date: "Oct 04, 2025",
    classification: "TOP SECRET // OBSERVATORY NET",
    content: "Our deep-space radio telescope arrays have detected a highly localized, repeating microwave signal broadcasting from empty space aligned with the Orion Spur. Uniquely, the frequency sits exactly at the 1420 MHz hydrogen line but contains a complex, layered binary modulation matching the 1980 download sequence. More disturbingly, ground sensors at the ancient megalithic sites in Wiltshire, Giza, and Teotihuacán have detected a sympathetic, low-frequency electromagnetic resonance peaking in perfect coordination with the orbital passes of the source.",
    redactedWords: ["radio telescope arrays", "hydrogen line", "download sequence", "megalithic sites", "electromagnetic resonance"]
  }
];
