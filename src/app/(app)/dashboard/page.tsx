
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, MessageCircle, Laptop, DownloadCloud, Users, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Bienvenue sur Jàngandoo Numérique !</h1>
        <p className="text-muted-foreground text-lg">
          Votre portail d'apprentissage et d'alphabétisation numérique en langues locales.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">Leçons Traduites</CardTitle>
            <BookOpen className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Accédez à des leçons en Wolof, Sérère, Peul, et plus encore. Apprenez à votre rythme avec du texte et de la voix.
            </p>
            <Link href="/lessons" legacyBehavior passHref>
              <Button variant="default" className="w-full">
                Explorer les Leçons <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">Tuteur IA (Chatbot)</CardTitle>
            <MessageCircle className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Obtenez de l'aide instantanée et des explications de notre tuteur IA qui parle votre langue.
            </p>
            <Link href="/chatbot" legacyBehavior passHref>
              <Button variant="default" className="w-full">
                Demander au Tuteur <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">Alphabétisation Numérique</CardTitle>
            <Laptop className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Apprenez les compétences numériques essentielles dans votre langue locale pour naviguer dans le monde en ligne.
            </p>
            <Link href="/literacy" legacyBehavior passHref>
              <Button variant="default" className="w-full">
                Commencer l'Apprentissage <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
         <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Pourquoi Jàngandoo Numérique ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Éducation Inclusive</h3>
                <p className="text-sm text-muted-foreground">Apprenez dans votre langue maternelle, rendant l'éducation plus accessible et efficace.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-2 rounded-full">
                <DownloadCloud className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Accès Hors Ligne</h3>
                <p className="text-sm text-muted-foreground">Continuez à apprendre même sans connexion Internet, idéal pour les zones rurales.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md overflow-hidden">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Enfants sénégalais apprenant" 
            width={600} 
            height={400} 
            className="w-full h-auto object-cover"
            data-ai-hint="children learning" 
          />
        </Card>
      </section>
    </div>
  );
}
