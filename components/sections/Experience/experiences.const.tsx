import { type ReactNode } from 'react';

const drdo: Company = {
  color: '#1b5e3f',
  logo: 'drdo',
};

const bcg: Company = {
  color: '#00693e',
  logo: 'bcg',
};

const deloitte: Company = {
  color: '#86bc25',
  logo: 'deloitte',
};

const vips: Company = {
  color: '#7f00ff',
  logo: 'vips',
};

export const experiences: Experience[] = [
  {
    company: drdo,
    description: (
      <>
        <p>
          <strong>DRDO-SSPL</strong> (Defence Research and Development
          Organisation — Solid State Physics Laboratory) is one of
          India&apos;s premier defence research labs.
        </p>
        <p>
          As a Research Intern, I&apos;m researching{' '}
          <strong>
            deep learning-based passive missile detection and warning
            systems
          </strong>
          , using <code>YOLOv5</code> for real-time aerial object
          detection.
        </p>
        <p>
          My day-to-day involves working with{' '}
          <strong>Python</strong>, <strong>PyTorch</strong>, and{' '}
          <strong>OpenCV</strong> across the full pipeline: dataset
          preprocessing, model training, and evaluating detection
          accuracy against real-world constraints.
        </p>
        <p>
          It&apos;s my first real exposure to applying computer vision
          research in a mission-critical setting, and it&apos;s
          shaped how I think about model reliability.
        </p>
      </>
    ),
    id: 'drdo',
    jobTitle: 'Research Intern',
    period: {
      from: new Date('2026-06-01T00:00:00Z'),
    },
    title: 'DRDO-SSPL',
  },
  {
    company: bcg,
    description: (
      <>
        <p>
          A virtual job simulation focused on{' '}
          <strong>GenAI-powered financial analysis</strong>.
        </p>
        <p>
          I analysed real 10-K filings using{' '}
          <strong>Python</strong> and <strong>Pandas</strong> to
          extract financial insights, then built a{' '}
          <strong>Flask-based AI financial chatbot</strong> that
          could answer natural-language questions about the data.
        </p>
      </>
    ),
    id: 'bcg',
    jobTitle: 'GenAI Job Simulation',
    period: {
      from: new Date('2025-11-01T00:00:00Z'),
      to: new Date('2025-11-01T00:00:00Z'),
    },
    title: 'BCG',
  },
  {
    company: deloitte,
    description: (
      <>
        <p>
          A virtual job simulation in{' '}
          <strong>data analytics for business decision-making</strong>
          .
        </p>
        <p>
          I performed data analysis on a business dataset and
          generated actionable insights, presenting findings the way
          a Deloitte analyst would for a client-facing engagement.
        </p>
      </>
    ),
    id: 'deloitte',
    jobTitle: 'Data Analytics Job Simulation',
    period: {
      from: new Date('2025-09-01T00:00:00Z'),
      to: new Date('2025-09-01T00:00:00Z'),
    },
    title: 'Deloitte',
  },
  {
    company: vips,
    description: (
      <>
        <p>
          I&apos;m pursuing a <strong>B.Tech in AI &amp; Data Science</strong>{' '}
          at Vivekananda Institute of Professional Studies (GGSIPU),
          currently holding a CGPA of <strong>8.64</strong>.
        </p>
        <p>
          Outside of coursework, I&apos;m an active member of{' '}
          <strong>ADVAIT</strong> (the AI Club) and{' '}
          <strong>EONICS</strong> (Electronics &amp; IoT Society), and
          I&apos;ve volunteered at campus events like Riwayat &amp;
          Abhivyakti.
        </p>
        <p>
          Most of my hands-on learning has happened outside the
          classroom — in <strong>15+ national-level hackathons</strong>{' '}
          spanning AI, software development, and innovation tracks,
          including a Top 10 finish at INNERVE 2026 (IGDTUW).
        </p>
      </>
    ),
    id: 'vips',
    jobTitle: 'B.Tech, AI & Data Science',
    period: {
      from: new Date('2024-08-01T00:00:00Z'),
    },
    title: 'VIPS, GGSIPU',
  },
];

export type Company = {
  color: string;
  logo: string;
  padding?: number;
};

export type Period = {
  from: Date;
  to?: Date;
};

type Experience = {
  company: Company;
  consultant?: boolean;
  description: ReactNode;
  id: string;
  jobTitle: string;
  period: Period;
  title: string;
};
