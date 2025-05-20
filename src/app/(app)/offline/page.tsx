import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadCloud, WifiOff, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function OfflinePage() {
  // Basic PWA installation prompt logic (conceptual)
  // In a real app, you'd listen for 'beforeinstallprompt' event
  const handleInstallPWA = () => {
    alert("Pour installer cette application pour une utilisation hors ligne :\\n\\nSur Chrome (Ordinateur/Android) : Cliquez sur les trois points dans le menu du navigateur et sélectionnez 'Installer Jàngandoo Numérique' ou 'Ajouter à l'écran d'accueil'.\\n\\nSur Safari (iOS) : Appuyez sur le bouton Partager, puis faites défiler vers le bas et appuyez sur 'Ajouter à l'écran d'accueil'.");
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center">
        <DownloadCloud className="mx-auto h-16 w-16 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Accès Hors Ligne</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Apprenez n'importe quand, n'importe où, même sans connexion Internet. 
          Jàngandoo Numérique est conçu pour fonctionner hors ligne.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Comment Fonctionne le Mode Hors Ligne</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <WifiOff className="h-8 w-8 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Accéder au Contenu Sans Internet</h3>
                <p className="text-sm text-muted-foreground">
                  Une fois les leçons et modules chargés lorsque vous êtes en ligne, beaucoup d'entre eux seront disponibles lorsque vous perdez la connexion ou êtes dans une zone sans Internet.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Mise en Cache Automatique</h3>
                <p className="text-sm text-muted-foreground">
                  L'application enregistre automatiquement le contenu essentiel sur votre appareil. Recherchez les leçons marquées comme disponibles hors ligne.
                </p>
              </div>
            </div>
             <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Premier Chargement</h3>
                <p className="text-sm text-muted-foreground">
                  Pour une meilleure expérience hors ligne, veuillez parcourir les leçons et modules qui vous intéressent lorsque vous êtes connecté à Internet pour la première fois.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Personne utilisant un téléphone hors ligne en milieu rural" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
                data-ai-hint="offline access rural"
            />
        </div>
      </div>

      <Card className="shadow-lg bg-accent/30">
        <CardHeader>
          <CardTitle className="text-xl">Améliorez Votre Expérience Hors Ligne</CardTitle>
          <CardDescription>
            Installez Jàngandoo Numérique comme une application sur votre appareil pour un accès plus rapide et une expérience hors ligne plus fluide.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={handleInstallPWA} size="lg" className="bg-primary hover:bg-primary/90">
            <DownloadCloud className="mr-2 h-5 w-5" /> Installer l'Appli pour Usage Hors Ligne
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            (Suivez les invites du navigateur si disponibles, ou vérifiez le menu de votre navigateur pour les options 'Installer l'application' ou 'Ajouter à l'écran d'accueil'.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
