// src/lib/lessons-data.ts

export interface Lesson {
  id: string;
  title: string;
  description: string;
  language: string; // e.g., "Wolof", "Sérère", "Peul"
  langCode: string; // e.g., "wo", "sr", "ff"
  tags: string[];
  imageUrl?: string;
  imageHint?: string;
  content?: string; // Contenu principal de la leçon
  audioUrl?: string; // URL pour le contenu audio
}

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Salutations en Wolof",
    description: "Apprenez les salutations et présentations courantes en Wolof.",
    language: "Wolof",
    langCode: "wo",
    tags: ["Débutant", "Conversation"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "greeting people",
    content: "Nanga def? Maa ngi fi. Contenu détaillé sur les salutations en Wolof...",
    audioUrl: "/audio/wolof_greetings.mp3" // Placeholder
  },
  {
    id: "2",
    title: "Chiffres de base en Sérère",
    description: "Comprenez et utilisez les chiffres de 1 à 10 en Sérère.",
    language: "Sérère",
    langCode: "sr",
    tags: ["Débutant", "Numératie"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "numbers counting",
    content: "Un, deux, trois... Apprenez à compter en Sérère.",
  },
  {
    id: "3",
    title: "Membres de la famille en Peul",
    description: "Apprenez le vocabulaire des membres de la famille en Peul.",
    language: "Peul",
    langCode: "ff", // Fula/Peul code
    tags: ["Vocabulaire", "Culture"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "family gathering",
    content: "Baaba, Yaay... Découvrez les termes familiaux en Peul.",
  },
  {
    id: "4",
    title: "Faire les courses au marché en Wolof",
    description: "Phrases essentielles pour faire ses achats dans un marché local.",
    language: "Wolof",
    langCode: "wo",
    tags: ["Intermédiaire", "Vie quotidienne"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "market scene",
    content: "Ñaata la? Mën naa la waññi? Apprenez à négocier au marché.",
    audioUrl: "/audio/wolof_market.mp3" // Placeholder
  },
];
