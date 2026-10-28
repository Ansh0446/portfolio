import { type ReactElement } from 'react';

import { Button } from 'reakit/Button';

import styles from './Projects.module.css';

export const getProjects = (
  onEmailDialogOpen: () => void,
): Project[] => [
  {
    description: (
      <>
        <p>
          <strong>AI Career Success Advisor</strong> is a platform I
          built to help students figure out how employable they
          actually are, and what to do about it.
        </p>
        <p>
          It predicts an <strong>employability score</strong> and{' '}
          <strong>placement probability</strong>, then generates
          personalized career roadmaps, skill-gap analysis, and
          interview preparation strategies — all in one dashboard.
        </p>
        <p>
          The prediction layer runs on <code>Scikit-learn</code>{' '}
          models trained on structured candidate data, served through
          a <code>Flask</code> backend. On top of that, I integrated{' '}
          <strong>Google Gemini AI</strong> to turn raw predictions
          into genuinely useful, personalized guidance rather than
          just a number.
        </p>
        <p>
          Accounts and data are handled with{' '}
          <strong>Firebase Authentication</strong>, and the frontend
          is built with plain HTML, CSS, and JavaScript so the whole
          stack stays lightweight and easy to reason about.
        </p>
        <p>
          This is the project I keep coming back to whenever I want
          to test a new idea in ML or prompt engineering — it&apos;s
          as much a learning sandbox as it is a finished product.
        </p>
      </>
    ),
    folder: 'ai-career-advisor',
    name: 'AI career advisor',
    repo: 'ai-career-success-advisor',
    subtitle:
      'Predicting employability & generating personalized career roadmaps',
    title: 'AI Career Success Advisor',
  },
  {
    description: (
      <>
        <p>
          A <strong>Flask-based AI financial chatbot</strong>, built
          as part of the <strong>BCG GenAI job simulation</strong>.
        </p>
        <p>
          The task started with real <strong>10-K filings</strong> —
          messy, dense financial documents. I used{' '}
          <code>Python</code> and <code>Pandas</code> to parse and
          analyse the data, extracting the figures that actually
          mattered for the exercise.
        </p>
        <p>
          From there, I built a chatbot that could answer
          natural-language questions about the analysed data, wired
          up through a small <code>Flask</code> API — the kind of
          tool an analyst could actually use to query filings without
          digging through spreadsheets by hand.
        </p>
        <p>
          It was my first time combining <strong>traditional data
          analysis</strong> with a conversational interface, and it
          shaped how I think about making data accessible rather than
          just accurate.
        </p>
      </>
    ),
    folder: 'bcg-genai',
    name: 'bcg genai simulation',
    repo: 'bcg-genai-chatbot',
    subtitle: 'A Flask chatbot for querying analysed 10-K filings',
    title: 'BCG GenAI Financial Chatbot',
  },
  {
    description: (
      <>
        <p>
          As part of the <strong>Deloitte Data Analytics job
          simulation</strong>, I worked through a realistic
          client-style engagement: take a raw business dataset and
          turn it into insight someone could actually act on.
        </p>
        <p>
          That meant cleaning the data, spotting patterns worth
          calling out, and structuring the findings the way an
          analyst would present them to a client — clearly, and
          backed by the numbers.
        </p>
        <p>
          It was a good complement to the more ML-heavy work I do
          elsewhere: a reminder that not every problem needs a model,
          sometimes it just needs a clear read of the data.
        </p>
      </>
    ),
    folder: 'deloitte-analytics',
    name: 'deloitte analytics simulation',
    repo: 'deloitte-data-analytics',
    subtitle: 'Turning a business dataset into decision-ready insight',
    title: 'Deloitte Data Analytics',
  },
  {
    description: (
      <>
        <p>
          Yes, this page counts as a project too.
        </p>
        <p>
          I wanted a portfolio that felt <strong>alive</strong>{' '}
          rather than a static resume in a browser tab — an
          interactive chat instead of a wall of text, animated skill
          cards instead of a bullet list, and a project section you
          scroll <em>through</em> rather than past.
        </p>
        <p>
          It&apos;s also, honestly, the most fun way I&apos;ve found
          to show what I care about: clean structure, small details
          done well, and building things that are pleasant to use.
        </p>
        <p>
          <strong>
            If you&apos;d like to talk about any of this, feel free to{' '}
            <Button
              className={styles.getInTouch}
              onClick={onEmailDialogOpen}
            >
              get in touch
            </Button>{' '}
            😉
          </strong>
        </p>
      </>
    ),
    folder: 'this-portfolio',
    name: 'this page',
    repo: 'ansh-banga.github.io',
    subtitle: "Yeah, that's a little bit meta, I know",
    title: 'This Portfolio',
  },
];

export type Project = {
  description: ReactElement;
  folder: string;
  name: string;
  repo: string;
  subtitle: string;
  title: string;
};
