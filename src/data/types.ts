export type Article = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  minutes: number;
  related: string[];
  calc: { anchor: string; text: string };
  body: string;
};

export type Cause = { name: string; why: string; check: string; fix: string };

export type Trouble = {
  slug: string;
  title: string;
  shortTitle: string;
  desc: string;
  answer: string;
  causes: Cause[];
  workshop: string;
  prevent: string;
  caution?: string;
  related: string[];
  kirian?: boolean;
};

export type KirianSection =
  | { id: string; title: string; kind: "html"; body: string }
  | { id: string; title: string; kind: "demo" }
  | { id: string; title: string; kind: "parts" };

export type KirianPart = { name: string; alias: string; desc: string; wear: string };
