import { type ReactElement } from 'react';

export const skills: Skill[] = [
  {
    brief: (
      <>
        <span>
          <strong>Python</strong> is the language I reach for first —
          for machine learning experiments, backend APIs, and
          research work at DRDO.
        </span>
        <span>
          From Scikit-learn models to PyTorch object detection
          pipelines, it&apos;s the common thread across almost
          everything I build.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#ffe873',
        text: 'black',
      },
      normal: {
        background: '#ffd43b',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#8a7420' },
    },
    description: (
      <>
        <p>
          <strong>Python is the language I&apos;m most comfortable in</strong>
          , and the one I use for almost every AI/ML project I
          build.
        </p>
        <p>
          At <strong>DRDO-SSPL</strong>, I use it daily for dataset
          preprocessing, model training with <code>PyTorch</code>,
          and evaluation pipelines for real-time object detection.
        </p>
        <p>
          On the applied side, I&apos;ve used Python with{' '}
          <code>Flask</code> to build full-stack apps, and with{' '}
          <code>Scikit-learn</code>, <code>Pandas</code> and{' '}
          <code>NumPy</code> to build predictive models — like the
          employability scoring engine behind my{' '}
          <strong>AI Career Success Advisor</strong> project.
        </p>
        <p>
          I also used Python and <code>Pandas</code> during the{' '}
          <strong>BCG GenAI job simulation</strong> to analyse 10-K
          financial filings.
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'python',
    name: 'Python',
    studying: true,
    usageLevel: 3,
    yearsExperience: 3,
  },
  {
    brief: (
      <>
        <span>
          <strong>Java</strong> was one of the first languages I
          studied properly in college, through data structures and
          OOP coursework.
        </span>
        <span>
          It&apos;s also where I first got comfortable thinking about
          software design before jumping into code.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#f89820',
        text: 'black',
      },
      normal: {
        background: '#f89820',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#7a4c10' },
    },
    description: (
      <>
        <p>
          <strong>Java</strong> was my introduction to strongly-typed,
          object-oriented programming — I built my foundation in data
          structures, algorithms, and OOP principles with it.
        </p>
        <p>
          I use it for coursework, competitive programming practice
          on <strong>LeetCode</strong>, and whenever a problem calls
          for a more structured, statically-typed approach than
          Python.
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'java',
    name: 'Java',
    studying: false,
    usageLevel: 2,
    yearsExperience: 2,
  },
  {
    brief: (
      <>
        <span>
          <strong>JavaScript</strong> is what I use to bring the
          frontend of my projects to life, from dashboards to
          interactive forms.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#f7df1e',
        text: 'black',
      },
      normal: {
        background: '#f7df1e',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#645a0a' },
    },
    description: (
      <>
        <p>
          I use <strong>JavaScript</strong> alongside HTML and CSS to
          build the interactive parts of my full-stack projects —
          dashboards, dynamic forms, and real-time UI updates driven
          by Firebase.
        </p>
        <p>
          It&apos;s the glue between the Flask backends I build and
          the interfaces people actually interact with.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={35}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'javascript',
    name: 'JavaScript',
    studying: false,
    usageLevel: 1,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#c3d9ff',
        text: 'black',
      },
      normal: {
        background: '#a8b9cc',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#4c5866' },
    },
    description: (
      <>
        <p>
          <strong>C</strong> is where I learned how memory, pointers,
          and low-level logic actually work — the fundamentals course
          every engineering student remembers.
        </p>
        <p>
          I still reach for it when I want to think closer to the
          metal, especially for data structure and algorithm
          practice.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'c',
    name: 'C',
    studying: false,
    usageLevel: -1,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#c7e0ff',
        text: 'black',
      },
      normal: {
        background: '#4479a1',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#22394d' },
    },
    description: (
      <>
        <p>
          I use <strong>SQL</strong> for structured, relational data
          — course projects, backend design coursework, and whenever
          a problem needs joins and constraints more than a document
          store.
        </p>
        <p>
          It pairs with my Python backends whenever the data has a
          clear relational shape.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={20}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'sql',
    name: 'SQL',
    studying: false,
    usageLevel: 1,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#ffb199',
        text: 'black',
      },
      normal: {
        background: '#e34f26',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#7a2410' },
    },
    description: (
      <>
        <p>
          <strong>HTML</strong> is the backbone of every interface
          I&apos;ve shipped — from the dashboards in my AI Career
          Success Advisor to quick prototypes for hackathons.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'html5',
    name: 'HTML',
    studying: false,
    usageLevel: 1,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#a8d8ff',
        text: 'black',
      },
      normal: {
        background: '#2965f1',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#152f6b' },
    },
    description: (
      <>
        <p>
          I use <strong>CSS</strong> to make the interfaces I build
          actually feel polished — layout, responsiveness, and the
          small transitions that make a dashboard feel alive rather
          than static.
        </p>
        <p>
          Not a specialist by any means, but enough to turn a working
          prototype into something presentable.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill="#1c88c7" xlinkHref={`#${this.id}-2`} />
          <use fill={colors.text} xlinkHref={`#${this.id}-3`} />
        </svg>
      );
    },
    id: 'css',
    name: 'CSS',
    studying: false,
    usageLevel: 1,
    yearsExperience: 2,
  },
  {
    brief: (
      <>
        <span>
          <strong>Flask</strong> is my go-to for turning a Python
          model or script into a real, usable web application.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#bdeaf2',
        text: 'black',
      },
      normal: {
        background: '#3babc3',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#1c5867' },
    },
    description: (
      <>
        <p>
          <strong>Flask</strong> is the backend framework behind my{' '}
          <strong>AI Career Success Advisor</strong> — handling
          routing, Firebase authentication, and serving predictions
          from Scikit-learn models and Gemini AI responses.
        </p>
        <p>
          I like its minimalism: it stays out of the way and lets me
          structure the app around whatever the ML pipeline actually
          needs.
        </p>
        <p>
          I also used it during the <strong>BCG job simulation</strong>{' '}
          to build a financial chatbot on top of analysed 10-K data.
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'flask',
    name: 'Flask',
    studying: true,
    usageLevel: 2,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#ffb199',
        text: 'black',
      },
      normal: {
        background: '#dd2c00',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#701608' },
    },
    description: (
      <>
        <p>
          I use <strong>Firebase</strong> for authentication, and
          real-time data storage in my full-stack projects — it lets
          me ship a secure, working backend without standing up my
          own infrastructure.
        </p>
        <p>
          It powers the user accounts and dashboards in my{' '}
          <strong>AI Career Success Advisor</strong> platform.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'firebase',
    name: 'Firebase',
    studying: false,
    usageLevel: 1,
    yearsExperience: 1,
  },
  {
    brief: (
      <>
        <span>
          <strong>Scikit-learn</strong> is where most of my applied
          machine learning happens — from quick prototypes to the
          models behind my career-advisor project.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#ffd699',
        text: 'black',
      },
      normal: {
        background: '#f7931e',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#7a4a0f' },
    },
    description: (
      <>
        <p>
          <strong>Scikit-learn</strong> is my starting point for most
          classical ML problems — classification, regression, and
          feature engineering.
        </p>
        <p>
          I used it to build the models that predict employability
          score and placement probability in{' '}
          <strong>AI Career Success Advisor</strong>, training on
          structured candidate data and iterating on feature
          selection to improve accuracy.
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'scikitlearn',
    name: 'Scikit-learn',
    studying: true,
    usageLevel: 2,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#a8c7ff',
        text: 'black',
      },
      normal: {
        background: '#013243',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#010f15' },
    },
    description: (
      <>
        <p>
          <strong>NumPy</strong> sits underneath almost every ML
          pipeline I write — vectorized array operations, numerical
          preprocessing, and the math behind model features.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'numpy',
    name: 'NumPy',
    studying: false,
    usageLevel: 2,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#c9c3ff',
        text: 'black',
      },
      normal: {
        background: '#150458',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#0a0230' },
    },
    description: (
      <>
        <p>
          <strong>Pandas</strong> is my default tool for exploring and
          cleaning data before it goes anywhere near a model —
          especially useful during the <strong>BCG</strong> and{' '}
          <strong>Deloitte</strong> job simulations, where the whole
          task was extracting insight from messy real-world datasets.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'pandas',
    name: 'Pandas',
    studying: false,
    usageLevel: 2,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#a8e6a3',
        text: 'black',
      },
      normal: {
        background: '#47a248',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#255126' },
    },
    description: (
      <>
        <p>
          I use <strong>MongoDB</strong> whenever a project&apos;s
          data doesn&apos;t fit neatly into rows and columns — user
          profiles, nested preferences, or fast-moving prototypes
          where the schema is still evolving.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'mongodb',
    name: 'MongoDB',
    studying: false,
    usageLevel: 1,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#ffb199',
        text: 'black',
      },
      normal: {
        background: '#f03c2e',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#7a1e17' },
    },
    description: (
      <>
        <p>
          <strong>Git</strong> is second nature by now — branching,
          rebasing, and resolving merge conflicts under a hackathon
          countdown clock will do that to you.
        </p>
        <p>
          Every project I build, solo or in a team, lives on{' '}
          <strong>GitHub</strong> from the first commit.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}-2`} />
        </svg>
      );
    },
    id: 'git',
    name: 'Git',
    studying: false,
    usageLevel: 2,
    yearsExperience: 2,
  },
  {
    brief: (
      <>
        <span>
          I use the <strong>Gemini API</strong> to add real
          generative-AI features to my projects — not just calling an
          endpoint, but designing prompts that produce genuinely
          useful output.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#d6c9ff',
        text: 'black',
      },
      normal: {
        background: '#8e75b2',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#473a59' },
    },
    description: (
      <>
        <p>
          I integrated <strong>Google&apos;s Gemini AI</strong> into{' '}
          <strong>AI Career Success Advisor</strong> to generate
          personalized career roadmaps, skill-gap analysis, and
          interview preparation strategies based on a user&apos;s
          profile.
        </p>
        <p>
          This is also the space I&apos;m most actively learning in
          right now — prompt engineering, structuring model output,
          and combining generative responses with predictive ML.
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'googlegemini',
    name: 'Gemini API',
    studying: true,
    usageLevel: 2,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#ffb199',
        text: 'black',
      },
      normal: {
        background: '#ee4c2c',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#792617' },
    },
    description: (
      <>
        <p>
          <strong>PyTorch</strong> is the framework behind my current
          research work at <strong>DRDO-SSPL</strong>, where I train
          and evaluate <code>YOLOv5</code> models for real-time
          aerial object detection.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'pytorch',
    name: 'PyTorch',
    studying: true,
    usageLevel: 2,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#c9baff',
        text: 'black',
      },
      normal: {
        background: '#5c3ee8',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#2e1f74' },
    },
    description: (
      <>
        <p>
          I use <strong>OpenCV</strong> for image preprocessing and
          computer vision work at DRDO — frame handling, annotation
          pipelines, and preparing datasets before they go into a
          detection model.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={1.2}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'opencv',
    name: 'OpenCV',
    studying: true,
    usageLevel: 1,
    yearsExperience: 1,
  },
];

export const getColors = (
  skill: Skill,
  isContrastMode: boolean,
): Skill['colors']['contrast'] | Skill['colors']['normal'] =>
  isContrastMode ? skill.colors.contrast : skill.colors.normal;

type Skill = {
  brief?: ReactElement;
  colors: {
    contrast: {
      background: string;
      text: string;
    };
    normal: {
      background: string;
      text: string;
    };
    scrollBar?: {
      trackColor?: string;
    };
  };
  description: ReactElement;
  featured: boolean;
  icon?: (isContrastMode: boolean) => ReactElement;
  id: string;
  name: string;
  studying: boolean;
  usageLevel: -3 | -2 | -1 | 1 | 2 | 3;
  yearsExperience?: number;
};
