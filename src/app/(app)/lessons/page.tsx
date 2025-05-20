import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LanguageIcon } from "@/components/icons/LanguageIcon";
import { BookOpen, Volume2, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { lessons, type Lesson } from "@/lib/lessons-data";

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
              <Button variant="ghost" size="sm" aria-label="Écouter la leçon" disabled={!lesson.audioUrl}>
                <Volume2 className="h-5 w-5 mr-2" />
                Écouter
              </Button>
              <Link href={`/lessons/${lesson.id}`} legacyBehavior passHref>
                <Button variant="default" size="sm" as="a">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Commencer la Leçon
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
