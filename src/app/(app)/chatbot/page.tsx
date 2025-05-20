"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Bot, User, Loader2, Info } from "lucide-react";
import { explainLessonWolof, type ExplainLessonWolofInput, type ExplainLessonWolofOutput } from "@/ai/flows/explain-lesson-wolof";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export default function ChatbotPage() {
  const [lessonContent, setLessonContent] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSendMessage = async () => {
    if (!question.trim()) {
      toast({ title: "Error", description: "Please enter a question.", variant: "destructive" });
      return;
    }
    if (!lessonContent.trim()) {
      toast({ title: "Error", description: "Please provide some lesson content for context.", variant: "destructive" });
      return;
    }

    const userMessage: Message = { id: Date.now().toString(), text: question, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setQuestion("");
    setIsLoading(true);

    try {
      const input: ExplainLessonWolofInput = {
        lessonContent,
        question,
      };
      const output: ExplainLessonWolofOutput = await explainLessonWolof(input);
      
      const aiMessage: Message = { id: (Date.now() + 1).toString(), text: output.explanation, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error calling AI tutor:", error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, I couldn't process your request. Please try again.", sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      toast({ title: "AI Error", description: "There was an issue with the AI tutor.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Chatbot Tutor (Wolof)</h1>
        <p className="text-muted-foreground text-lg">
          Ask questions about a lesson in Wolof and get explanations.
        </p>
      </header>

      <Alert className="mb-6 bg-accent/50 border-accent">
        <Info className="h-5 w-5 text-accent-foreground" />
        <AlertTitle className="text-accent-foreground">How to use</AlertTitle>
        <AlertDescription className="text-accent-foreground/80">
          1. Paste or type the lesson content you want to discuss in the &quot;Lesson Content&quot; box.
          <br />
          2. Type your question in Wolof in the &quot;Your Question&quot; box.
          <br />
          3. Click &quot;Send&quot; or press Enter to get an explanation from the AI tutor.
        </AlertDescription>
      </Alert>

      <Card className="flex-grow flex flex-col shadow-lg">
        <CardHeader>
          <CardTitle>Chat with AI Tutor</CardTitle>
          <CardDescription>The AI will respond in Wolof.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col space-y-4">
          <div className="space-y-2">
            <label htmlFor="lessonContent" className="text-sm font-medium">Lesson Content (for context)</label>
            <Textarea
              id="lessonContent"
              placeholder="Paste or type the lesson material here..."
              value={lessonContent}
              onChange={(e) => setLessonContent(e.target.value)}
              className="h-24 resize-none bg-background"
              disabled={isLoading}
            />
          </div>
          <ScrollArea className="flex-grow border rounded-md p-4 bg-muted/20" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 text-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-card-foreground border"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                     <Avatar className="h-8 w-8">
                      <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                  </Avatar>
                  <div className="max-w-[70%] rounded-lg p-3 text-sm bg-card text-card-foreground border">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              type="text"
              placeholder="Type your question in Wolof..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 bg-background"
              disabled={isLoading}
              aria-label="Your question in Wolof"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
