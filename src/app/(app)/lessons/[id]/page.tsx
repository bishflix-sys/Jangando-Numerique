// src/app/(app)/lessons/[id]/page.tsx
import { lessons, type Lesson } from "@/lib/lessons-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LanguageIcon } from "@/components/icons/LanguageIcon";
import { ArrowLeft, Volume2, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

export default async function LessonDetailPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find(l => l.id === params.id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <Link href="/lessons" legacyBehavior passHref>
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux leçons
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <LanguageIcon langCode={lesson.langCode} className="h-6 w-6 text-primary" />
            <Badge variant="secondary">{lesson.language}</Badge>
          </div>
        </div>
      </header>

      <Card className="overflow-hidden shadow-lg">
        {lesson.imageUrl && (
          <div className="relative h-64 w-full md:h-80">
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
          <CardTitle className="text-2xl">{lesson.title}</CardTitle>
          <CardDescription>{lesson.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-x-2">
            {lesson.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-foreground">
            <h2 className="text-xl font-semibold mt-4 mb-2 text-foreground">Contenu de la Leçon :</h2>
            <ScrollArea className="h-60 md:h-auto border rounded-md p-4 bg-muted/30">
              {lesson.content ? (
                <p>{lesson.content}</p>
              ) : (
                <p className="text-muted-foreground italic">Contenu de la leçon à venir...</p>
              )}
            </ScrollArea>
          </div>

          {lesson.audioUrl && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Écouter la Leçon :</h3>
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-muted/30">
                <Button size="lg" disabled> {/* Bouton désactivé car la fonctionnalité de lecture n'est pas implémentée */}
                  <Volume2 className="mr-2 h-5 w-5" />
                  Lire l'audio
                </Button>
                <span className="text-sm text-muted-foreground italic">(Fonctionnalité audio à venir)</span>
              </div>
               {/* <audio controls src={lesson.audioUrl} className="w-full">
                Votre navigateur ne supporte pas l'élément audio.
              </audio> */}
            </div>
          )}

          {!lesson.content && !lesson.audioUrl && (
             <Alert variant="default" className="mt-6 bg-accent/20 border-accent">
              <Info className="h-5 w-5 text-accent-foreground" />
              <AlertTitle className="text-accent-foreground">Contenu en préparation</AlertTitle>
              <AlertDescription className="text-accent-foreground/80">
                Le contenu détaillé et l'audio pour cette leçon sont en cours de préparation. Revenez bientôt !
              </AlertDescription>
            </Alert>
          )}

        </CardContent>
        <CardFooter className="border-t pt-4">
           <Link href="/lessons" legacyBehavior passHref>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux leçons
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
