import { type FC } from 'react';

export const ExperienceVectors: FC = () => (
  <svg style={{ display: 'none' }}>
    {/* Radar-sweep mark, representing detection & signal research */}
    <symbol id="drdo" viewBox="0 0 100 100">
      <path d="M 50 4 A 46 46 0 1 1 4 50 A 46 46 0 0 1 50 4 Z M 50 14 A 36 36 0 1 0 86 50 A 36 36 0 0 0 50 14 Z" />
      <path d="M 50 50 L 50 20 A 30 30 0 0 1 76.6 35 Z" />
      <circle cx="50" cy="50" r="9" />
    </symbol>

    {/* Ascending-bars mark, representing growth & analysis */}
    <symbol id="bcg" viewBox="0 0 100 100">
      <rect height="34" width="16" x="12" y="58" />
      <rect height="52" width="16" x="42" y="40" />
      <rect height="70" width="16" x="72" y="22" />
    </symbol>

    {/* Insight-check mark, representing data-driven decisions */}
    <symbol id="deloitte" viewBox="0 0 100 100">
      <path d="M 50 6 A 44 44 0 1 1 49.9 6 Z M 50 18 A 32 32 0 1 0 50.1 18 Z" />
      <path d="M 28 51 L 43 66 L 74 30 L 66 23 L 43 50 L 35 42 Z" />
    </symbol>

    {/* Graduation-cap mark, representing academics */}
    <symbol id="vips" viewBox="0 0 100 100">
      <path d="M 50 16 L 94 38 L 50 60 L 6 38 Z" />
      <path d="M 24 46 L 24 68 C 24 78 76 78 76 68 L 76 46 L 50 59 Z" />
      <rect height="32" width="6" x="88" y="38" />
    </symbol>
  </svg>
);
