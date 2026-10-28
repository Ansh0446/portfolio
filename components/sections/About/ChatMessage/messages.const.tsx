import {
  type Message,
  type OptionSelectMessage,
} from './messages.types';

export const FAST_MODE_ID = 'fast-mode';

const incoming: Message[] = [
  {
    content: (
      <>
        I&apos;m <strong>Ansh Banga</strong>, here are some quick
        facts about me:{' '}
        <ul
          style={{ listStyle: 'none', margin: 0, padding: '0 1em' }}
        >
          <li>🇮🇳 Based in India</li>
          <li>🎓 B.Tech, AI &amp; Data Science (VIPS, GGSIPU)</li>
          <li>🔬 Research Intern @ DRDO-SSPL</li>
          <li>🏆 15+ national-level hackathons</li>
          <li>🤖 Building things with Python &amp; ML</li>
        </ul>
      </>
    ),
    direction: 'incoming',
    id: '1',
    status: 'writing',
    type: 'text',
  },
  {
    content: (
      <>What would you like to know about me? Ask right away!</>
    ),
    direction: 'incoming',
    id: '2',
    status: 'writing',
    type: 'text',
  },
];

export const optionSelect: OptionSelectMessage = {
  content: [
    {
      id: 'career',
      label: 'Tell me about your career',
      responses: [
        {
          content: (
            <>
              I&apos;m currently a <strong>B.Tech student</strong> in
              Artificial Intelligence &amp; Data Science at{' '}
              <strong>
                Vivekananda Institute of Professional Studies
              </strong>{' '}
              (GGSIPU), and I&apos;ve been chasing anything
              AI-related ever since I started.
            </>
          ),
          direction: 'incoming',
          id: 'career-1',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              Right now I&apos;m a <strong>Research Intern</strong>{' '}
              at <strong>DRDO-SSPL</strong>, working on deep
              learning-based passive missile detection using YOLOv5
              for real-time aerial object detection — dataset
              preprocessing, model evaluation, the whole pipeline.
            </>
          ),
          direction: 'incoming',
          id: 'career-2',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              Outside of that, I&apos;ve done job simulations with{' '}
              <strong>BCG</strong> and <strong>Deloitte</strong>, and
              I&apos;ve competed in <strong>15+</strong> national-level
              hackathons, including a Top 10 finish at INNERVE 2026.
            </>
          ),
          direction: 'incoming',
          id: 'career-3',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              You can check out the{' '}
              <strong>
                <a href="#experience">Experience</a>
              </strong>{' '}
              section if you&apos;re interested in learning more about
              my trajectory.
              <br />
              <br />
              The{' '}
              <strong>
                <a href="#skills">Skills</a>
              </strong>{' '}
              section details some of my abilities — click any of
              those cards if you&apos;re interested in more context.
              <br />
              <br />
              Make sure to also take a look at my builds in the{' '}
              <strong>
                <a href="#projects">Projects</a>
              </strong>{' '}
              section.
            </>
          ),
          direction: 'incoming',
          id: 'career-4',
          status: 'invisible',
          type: 'text',
        },
      ],
    },
    {
      id: 'team',
      label: 'Who are you in a team?',
      responses: [
        {
          content: (
            <>
            I like taking a rough idea and turning it into a working demo fast. Hackathons taught me that.
            </>
          ),
          direction: 'incoming',
          id: 'team-1',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              I like <strong>picking things up fast</strong> — new
              APIs, new frameworks, whatever a project needs — and
              I&apos;m always happy to explain what I&apos;ve learned
              to whoever&apos;s stuck.
            </>
          ),
          direction: 'incoming',
          id: 'team-2',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              <strong>I genuinely enjoy building things</strong>, and
              I like working with people who get excited about the
              same kind of problems I do.
            </>
          ),
          direction: 'incoming',
          id: 'team-3',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              <strong>Curious what that looks like in practice?</strong>
              <br />
              <br />
              Go check the{' '}
              <strong>
                <a href="#achievements">Achievements</a>
              </strong>{' '}
              section for a peek at the hackathons and recognitions
              that came out of working this way 😄
            </>
          ),
          direction: 'incoming',
          id: 'team-4',
          status: 'invisible',
          type: 'text',
        },
      ],
    },
    {
      id: 'working-on',
      label: "What are you working on right now?",
      responses: [
        {
          content: (
            <>
              At <strong>DRDO-SSPL</strong>, I&apos;m researching
              passive missile detection and warning systems —
              training and evaluating <strong>YOLOv5</strong> models
              for real-time aerial object detection using{' '}
              <strong>Python</strong>, <strong>PyTorch</strong>, and{' '}
              <strong>OpenCV</strong>.
            </>
          ),
          direction: 'incoming',
          id: 'working-on-1',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              On the side, I&apos;m still iterating on{' '}
              <strong>AI Career Success Advisor</strong>, a platform
              that predicts employability scores and generates
              personalized career roadmaps using Gemini AI. You can
              read more about it in the{' '}
              <strong>
                <a href="#projects">Projects</a>
              </strong>{' '}
              section.
            </>
          ),
          direction: 'incoming',
          id: 'working-on-2',
          status: 'invisible',
          type: 'text',
        },
      ],
    },
    {
      id: 'contact',
      label: 'How can I contact you?',
      responses: [
        {
          content: (
            <>
              I&apos;m glad you asked 😄
              <br />
              <br />
              Just fill this form and I&apos;ll get back to you ASAP.
            </>
          ),
          direction: 'incoming',
          id: 'contact-1',
          status: 'invisible',
          type: 'text',
        },
        {
          direction: 'outgoing',
          id: 'contact-2',
          status: 'invisible',
          type: 'contact-form',
        },
      ],
    },
    {
      id: FAST_MODE_ID,
      label: 'Can you please just type faster?',
      responses: [
        {
          content: (
            <>
              Absolutely!
              <br />
              <strong>
                <em style={{ fontSize: '0.8em' }}>
                  *cracks knuckles*
                </em>
              </strong>
            </>
          ),
          direction: 'incoming',
          id: `${FAST_MODE_ID}-response`,
          status: 'invisible',
          type: 'text',
        },
      ],
    },
  ],
  direction: 'outgoing',
  id: 'option-select',
  status: 'visible',
  type: 'option-select',
};

export const end: Message = {
  content: (
    <>
      Well, that was a lovely conversation 🤩
      <br />
      <br />
      If you want to know more about me, feel free to keep on
      scrolling!
    </>
  ),
  direction: 'incoming',
  id: 'end',
  status: 'writing',
  type: 'text',
};

export const messages = [...incoming, optionSelect];
