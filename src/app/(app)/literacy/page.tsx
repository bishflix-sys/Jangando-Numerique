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
    title: "Introduction to Your Smartphone",
    description: "Learn the basics of using a smartphone, making calls, and sending messages.",
    icon: Smartphone,
    details: [
      "Turning your phone on and off.",
      "Understanding touchscreen gestures.",
      "Making and receiving calls.",
      "Sending and reading text messages (SMS).",
      "Managing contacts.",
    ],
    image: "https://placehold.co/600x300.png",
    imageHint: "smartphone usage"
  },
  {
    id: "2",
    title: "Navigating the Web",
    description: "Discover how to use the internet, search for information, and browse websites.",
    icon: Globe,
    details: [
      "What is the internet?",
      "Using a web browser (e.g., Chrome, Firefox).",
      "How to search for information using Google.",
      "Understanding website addresses (URLs).",
      "Identifying safe and reliable websites.",
    ],
    image: "https://placehold.co/600x300.png",
    imageHint: "internet browsing"
  },
  {
    id: "3",
    title: "Online Safety and Privacy",
    description: "Understand how to protect yourself and your information online.",
    icon: ShieldCheck,
    details: [
      "Creating strong passwords.",
      "Recognizing online scams and phishing.",
      "Protecting your personal information.",
      "Safe social media practices.",
      "Understanding privacy settings.",
    ],
    image: "https://placehold.co/600x300.png",
    imageHint: "online security"
  },
  {
    id: "4",
    title: "Connecting to Wi-Fi",
    description: "Learn how to find and connect to Wi-Fi networks for internet access.",
    icon: Wifi,
    details: [
      "What is Wi-Fi?",
      "Finding available Wi-Fi networks.",
      "Connecting to a secure Wi-Fi network.",
      "Understanding Wi-Fi passwords.",
      "Troubleshooting common connection issues.",
    ],
     image: "https://placehold.co/600x300.png",
    imageHint: "wifi connection"
  },
];

export default function LiteracyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Digital Literacy Module</h1>
        <p className="text-muted-foreground text-lg">
          Empower yourself with essential digital skills in your local language.
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
                    What you will learn
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
