import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LanguageIcon } from "@/components/icons/LanguageIcon";
import { BookOpen, Volume2, PlayCircle } from "lucide-react";
import Image from "next/image";

interface Lesson {
  id: string;
  title: string;
  description: string;
  language: string; // e.g., "Wolof", "Serer", "Peul"
  langCode: string; // e.g., "wo", "sr", "ff"
  tags: string[];
  imageUrl?: string;
  imageHint?: string;
}

const lessons: Lesson[] = [
  {
    id: "1",
    title: "Greetings in Wolof",
    description: "Learn common greetings and introductions in Wolof.",
    language: "Wolof",
    langCode: "wo",
    tags: ["Beginner", "Conversation"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "greeting people"
  },
  {
    id: "2",
    title: "Basic Numbers in Serer",
    description: "Understand and use numbers from 1 to 10 in Serer.",
    language: "Serer",
    langCode: "sr",
    tags: ["Beginner", "Numeracy"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "numbers counting"
  },
  {
    id: "3",
    title: "Family Members in Peul",
    description: "Learn the vocabulary for family members in Peul.",
    language: "Peul",
    langCode: "ff", // Fula/Peul code
    tags: ["Vocabulary", "Culture"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "family gathering"
  },
  {
    id: "4",
    title: "Market Shopping in Wolof",
    description: "Essential phrases for shopping at a local market.",
    language: "Wolof",
    langCode: "wo",
    tags: ["Intermediate", "Daily Life"],
    imageUrl: "https://placehold.co/600x300.png",
    imageHint: "market scene"
  },
];

export default function LessonsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Leçons Traduites</h1>
        <p className="text-muted-foreground text-lg">
          Explorez les leçons disponibles dans diverses langues locales.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {lesson.imageUrl && (
              <div className="relative h-48 w-full">
                <Image 
                  src={lesson.imageUrl} 
                  alt={lesson.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={lesson.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <LanguageIcon langCode={lesson.langCode} className="h-8 w-8 text-primary" />
                <Badge variant="secondary">{lesson.language}</Badge>
              </div>
              <CardTitle className="text-xl">{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-x-2">
                {lesson.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-2 border-t pt-4">
              {/* Placeholder for voice content */}
              <Button variant="ghost" size="sm" aria-label="Écouter la leçon">
                <Volume2 className="h-5 w-5 mr-2" />
                Écouter
              </Button>
              <Button variant="default" size="sm">
                <PlayCircle className="h-5 w-5 mr-2" />
                Commencer la Leçon
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
