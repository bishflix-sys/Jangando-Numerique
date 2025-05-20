
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, MessageCircle, Laptop, DownloadCloud, Users, ArrowRight, Languages, Loader2 as LoaderTranslation } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { translateText, type TranslateTextInput, type TranslateTextOutput } from "@/ai/flows/translate-text-flow";
import { useToast } from "@/hooks/use-toast";


export default function DashboardPage() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("fr");
  const [targetLanguage, setTargetLanguage] = useState("wo");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const languageOptions = [
    { value: "fr", label: "Français" },
    { value: "wo", label: "Wolof" },
    { value: "ff", label: "Pulaar (Peul)" },
    { value: "sr", label: "Sérère" },
    { value: "joo", label: "Joola" },
    { value: "mnk", label: "Mandinka" },
    { value: "snk", label: "Soninké" },
    { value: "bal", label: "Balante" },
    { value: "mnj", label: "Manjak" },
    { value: "noon", label: "Noon" },
    { value: "leh", label: "Lehar" },
    { value: "saa", label: "Saafi" },
    { value: "bsc", label: "Bassari" },
    { value: "tnr", label: "Bedik" },
  ];

  const handleTranslate = async () => {
    if (!textToTranslate.trim()) {
      toast({ title: "Erreur", description: "Veuillez entrer du texte à traduire.", variant: "destructive" });
      return;
    }
    if (sourceLanguage === targetLanguage) {
      toast({ title: "Erreur", description: "Les langues source et cible doivent être différentes.", variant: "destructive" });
      return;
    }
    setIsTranslating(true);
    setTranslatedText("");
    try {
      const input: TranslateTextInput = {
        textToTranslate,
        sourceLanguage: languageOptions.find(l => l.value === sourceLanguage)?.label || sourceLanguage,
        targetLanguage: languageOptions.find(l => l.value === targetLanguage)?.label || targetLanguage,
      };
      const output: TranslateTextOutput = await translateText(input);
      setTranslatedText(output.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
      toast({ title: "Erreur de traduction", description: "Un problème est survenu lors de la traduction. Le modèle ne peut peut-être pas traduire entre ces langues.", variant: "destructive" });
    } finally {
      setIsTranslating(false);
    }
  };


  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Bienvenue sur Jàngandoo Numérique !</h1>
        <p className="text-muted-foreground text-lg">
          Votre portail d'apprentissage et d'alphabétisation numérique en langues locales.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">Traducteur en Langue Locale</CardTitle>
            <Languages className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sourceLanguage" className="block text-sm font-medium text-muted-foreground mb-1">
                  De
                </label>
                <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                  <SelectTrigger id="sourceLanguage" aria-label="Langue source">
                    <SelectValue placeholder="Langue source" />
                  </SelectTrigger>
                  <SelectContent>
                    {languageOptions.map((lang) => (
                      <SelectItem key={`source-${lang.value}`} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="targetLanguage" className="block text-sm font-medium text-muted-foreground mb-1">
                  À
                </label>
                <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                  <SelectTrigger id="targetLanguage" aria-label="Langue cible">
                    <SelectValue placeholder="Langue cible" />
                  </SelectTrigger>
                  <SelectContent>
                    {languageOptions.map((lang) => (
                      <SelectItem key={`target-${lang.value}`} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Textarea
              id="textToTranslate"
              placeholder="Entrez le texte à traduire ici..."
              value={textToTranslate}
              onChange={(e) => setTextToTranslate(e.target.value)}
              className="min-h-[100px] resize-none"
              aria-label="Texte à traduire"
            />
            <Button onClick={handleTranslate} disabled={isTranslating} className="w-full">
              {isTranslating ? (
                <LoaderTranslation className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Languages className="mr-2 h-4 w-4" /> 
              )}
              Traduire
            </Button>
            {translatedText && (
              <div className="mt-4">
                <label htmlFor="translatedTextOutput" className="block text-sm font-medium text-muted-foreground mb-1">
                  Texte Traduit :
                </label>
                <Textarea
                  id="translatedTextOutput"
                  value={translatedText}
                  readOnly
                  className="min-h-[100px] bg-muted/30 resize-none"
                  aria-label="Texte traduit"
                />
              </div>
            )}
             {!translatedText && isTranslating && (
              <div className="mt-4 flex items-center justify-center text-muted-foreground">
                <LoaderTranslation className="mr-2 h-5 w-5 animate-spin" />
                Traduction en cours...
              </div>
            )}
          </CardContent>
        </Card>

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
            data-ai-hint="senegal education" 
          />
        </Card>
      </section>
    </div>
  );
}

