
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, MessageCircle, Laptop, DownloadCloud, Users, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to LinguaLearn Sénégal!</h1>
        <p className="text-muted-foreground text-lg">
          Your gateway to learning and digital literacy in local languages.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">Translated Lessons</CardTitle>
            <BookOpen className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access lessons in Wolof, Serere, Peul, and more. Learn at your own pace with text and voice.
            </p>
            <Link href="/lessons" legacyBehavior passHref>
              <Button variant="default" className="w-full">
                Explore Lessons <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">AI Chatbot Tutor</CardTitle>
            <MessageCircle className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get instant help and explanations from our AI tutor that speaks your language.
            </p>
            <Link href="/chatbot" legacyBehavior passHref>
              <Button variant="default" className="w-full">
                Ask the Tutor <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-semibold">Digital Literacy</CardTitle>
            <Laptop className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Learn essential digital skills in your local language to navigate the online world.
            </p>
            <Link href="/literacy" legacyBehavior passHref>
              <Button variant="default" className="w-full">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
         <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Why LinguaLearn?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Inclusive Education</h3>
                <p className="text-sm text-muted-foreground">Learn in your mother tongue, making education more accessible and effective.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-2 rounded-full">
                <DownloadCloud className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Offline Access</h3>
                <p className="text-sm text-muted-foreground">Continue learning even without an internet connection, perfect for rural areas.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md overflow-hidden">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Senegalese children learning" 
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
