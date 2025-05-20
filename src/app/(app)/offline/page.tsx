import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadCloud, WifiOff, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function OfflinePage() {
  // Basic PWA installation prompt logic (conceptual)
  // In a real app, you'd listen for 'beforeinstallprompt' event
  const handleInstallPWA = () => {
    alert("To install this app for offline use:\n\nOn Chrome (Desktop/Android): Click the three dots in the browser menu and select 'Install LinguaLearn Sénégal' or 'Add to Home screen'.\n\nOn Safari (iOS): Tap the Share button, then scroll down and tap 'Add to Home Screen'.");
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center">
        <DownloadCloud className="mx-auto h-16 w-16 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Offline Access</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Learn anytime, anywhere, even without an internet connection. 
          LinguaLearn Sénégal is designed to work offline.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">How Offline Mode Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <WifiOff className="h-8 w-8 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Access Content Without Internet</h3>
                <p className="text-sm text-muted-foreground">
                  Once lessons and modules are loaded while you're online, many of them will be available when you lose connection or are in an area with no internet.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Automatic Caching</h3>
                <p className="text-sm text-muted-foreground">
                  The app automatically saves essential content to your device. Look for lessons marked as available offline.
                </p>
              </div>
            </div>
             <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">First-Time Load</h3>
                <p className="text-sm text-muted-foreground">
                  For the best offline experience, please browse through the lessons and modules you are interested in while connected to the internet for the first time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Person using phone offline in a rural setting" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
                data-ai-hint="offline access rural"
            />
        </div>
      </div>

      <Card className="shadow-lg bg-accent/30">
        <CardHeader>
          <CardTitle className="text-xl">Enhance Your Offline Experience</CardTitle>
          <CardDescription>
            Install LinguaLearn Sénégal as an app on your device for quicker access and a more seamless offline experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={handleInstallPWA} size="lg" className="bg-primary hover:bg-primary/90">
            <DownloadCloud className="mr-2 h-5 w-5" /> Install App for Offline Use
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            (Follow browser prompts if available, or check your browser menu for 'Install App' or 'Add to Home Screen' options.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
