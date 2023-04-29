interface TextOptions {
  words?: number;
  asString?: boolean;
  sentences?: number;
  paragraphs?: number;
}

export type WordsOptions = Omit<TextOptions, "sentences" | "paragraphs">;

export type SentenceOptions = Omit<TextOptions, "sentences" | "paragraphs">;

export type SentencesOptions = Omit<TextOptions, "paragraphs">;

export type ParagraphOptions = TextOptions;
