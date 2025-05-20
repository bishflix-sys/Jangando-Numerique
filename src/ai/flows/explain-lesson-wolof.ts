// src/ai/flows/explain-lesson-wolof.ts
'use server';
/**
 * @fileOverview Un chatbot IA qui explique les leçons en Wolof.
 *
 * - explainLessonWolof - Une fonction qui gère le processus d'explication des leçons en Wolof.
 * - ExplainLessonWolofInput - Le type d'entrée pour la fonction explainLessonWolof.
 * - ExplainLessonWolofOutput - Le type de retour pour la fonction explainLessonWolof.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainLessonWolofInputSchema = z.object({
  lessonContent: z.string().describe('The content of the lesson to be explained.'),
  question: z.string().describe('The question about the lesson in Wolof.'),
});
export type ExplainLessonWolofInput = z.infer<typeof ExplainLessonWolofInputSchema>;

const ExplainLessonWolofOutputSchema = z.object({
  explanation: z.string().describe('The explanation of the lesson in Wolof.'),
});
export type ExplainLessonWolofOutput = z.infer<typeof ExplainLessonWolofOutputSchema>;

export async function explainLessonWolof(input: ExplainLessonWolofInput): Promise<ExplainLessonWolofOutput> {
  return explainLessonWolofFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainLessonWolofPrompt',
  input: {schema: ExplainLessonWolofInputSchema},
  output: {schema: ExplainLessonWolofOutputSchema},
  prompt: `You are a Wolof-speaking AI tutor, skilled at explaining lessons to students.

  Lesson Content: {{{lessonContent}}}

  Question (in Wolof): {{{question}}}

  Please provide a clear and helpful explanation in Wolof.
  Output:
`,
});

const explainLessonWolofFlow = ai.defineFlow(
  {
    name: 'explainLessonWolofFlow',
    inputSchema: ExplainLessonWolofInputSchema,
    outputSchema: ExplainLessonWolofOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
