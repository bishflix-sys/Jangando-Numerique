// src/ai/flows/translate-text-flow.ts
'use server';
/**
 * @fileOverview Un service de traduction de texte utilisant Genkit.
 *
 * - translateText - Une fonction qui gère la traduction de texte entre langues.
 * - TranslateTextInput - Le type d'entrée pour la fonction translateText.
 * - TranslateTextOutput - Le type de retour pour la fonction translateText.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextInputSchema = z.object({
  textToTranslate: z.string().describe('Le texte à traduire.'),
  sourceLanguage: z.string().describe('La langue source du texte (ex: "Français", "Wolof").'),
  targetLanguage: z.string().describe('La langue cible pour la traduction (ex: "Wolof", "Français").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
  translatedText: z.string().describe('Le texte traduit.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
  return translateTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateTextPrompt',
  input: {schema: TranslateTextInputSchema},
  output: {schema: TranslateTextOutputSchema},
  prompt: `Tu es un traducteur expert et professionnel. Ta tâche est de traduire le texte suivant de {{sourceLanguage}} en {{targetLanguage}}.
  Assure-toi que la traduction est extrêmement précise, fidèle au sens original et de la plus haute qualité possible. Évite les approximations et conserve les nuances du texte source.

  Texte à traduire :
  {{{textToTranslate}}}

  Traduction précise et fidèle :
`,
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('La traduction a échoué ou n\'a retourné aucun résultat.');
    }
    return output;
  }
);
