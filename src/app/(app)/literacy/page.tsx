import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MousePointerSquare, Globe, ShieldCheck, Smartphone, Wifi } from "lucide-react";
import Image from "next/image";

interface LiteracyTopic {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  image?: string;
  imageHint?: string;
}

const literacyTopics: LiteracyTopic[] = [
  {
    id: "1",
    title: "Introduction à Votre Smartphone",
    description: "Apprenez les bases de l'utilisation d'un smartphone, passer des appels et envoyer des messages.",
    icon: Smartphone,
    details: [
      "Allumer et éteindre votre téléphone.",
      "Comprendre les gestes de l'écran tactile.",
      "Passer et recevoir des appels.",
      "Envoyer et lire des messages texte (SMS).",
      "Gérer les contacts.",
    ],
    image: "https://placehold.co/600x300.png",
    imageHint: "smartphone usage"
  },
  {
    id: "2",
    title: "Naviguer sur le Web",
    description: "Découvrez comment utiliser Internet, rechercher des informations et naviguer sur des sites Web.",
    icon: Globe,
    details: [
      "Qu'est-ce qu'Internet ?",
      "Utiliser un navigateur Web (ex: Chrome, Firefox).",
      "Comment rechercher des informations avec Google.",
      "Comprendre les adresses de sites Web (URL).",
      "Identifier les sites Web sûrs et fiables.",
    ],
    image: "https://placehold.co/600x300.png",
    imageHint: "internet browsing"
  },
  {
    id: "3",
    title: "Sécurité et Confidentialité en Ligne",
    description: "Comprenez comment vous protéger et protéger vos informations en ligne.",
    icon: ShieldCheck,
    details: [
      "Créer des mots de passe forts.",
      "Reconnaître les arnaques en ligne et le phishing.",
      "Protéger vos informations personnelles.",
      "Pratiques sécurisées sur les médias sociaux.",
      "Comprendre les paramètres de confidentialité.",
    ],
    image: "https://placehold.co/600x300.png",
    imageHint: "online security"
  },
  {
    id: "4",
    title: "Se Connecter au Wi-Fi",
    description: "Apprenez à trouver et à vous connecter aux réseaux Wi-Fi pour accéder à Internet.",
    icon: Wifi,
    details: [
      "Qu'est-ce que le Wi-Fi ?",
      "Trouver les réseaux Wi-Fi disponibles.",
      "Se connecter à un réseau Wi-Fi sécurisé.",
      "Comprendre les mots de passe Wi-Fi.",
      "Dépannage des problèmes de connexion courants.",
    ],
     image: "https://placehold.co/600x300.png",
    imageHint: "wifi connection"
  },
];

export default function LiteracyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Module d'Alphabétisation Numérique</h1>
        <p className="text-muted-foreground text-lg">
          Renforcez vos capacités avec des compétences numériques essentielles dans votre langue locale.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {literacyTopics.map((topic) => (
          <Card key={topic.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            {topic.image && (
               <div className="relative h-56 w-full">
                <Image 
                  src={topic.image} 
                  alt={topic.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-lg"
                  data-ai-hint={topic.imageHint}
                />
              </div>
            )}
            <CardHeader className="flex flex-row items-start space-x-4 p-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <topic.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${topic.id}`}>
                  <AccordionTrigger className="text-base hover:no-underline">
                    Ce que vous allez apprendre
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {topic.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
