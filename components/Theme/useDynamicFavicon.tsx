import { type FC } from 'react';

import { renderToStaticMarkup } from 'react-dom/server';

import { type Theme } from '~/consts/themes.const';

const FAVICON_DIMENSION = 256;

const FavIcon: FC<{ size?: number; theme: Theme }> = ({
  size = FAVICON_DIMENSION,
  theme,
}) => {
  const isBrowserDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const selectedTheme = isBrowserDarkMode ? theme.dark : theme.light;

  return (
    <svg
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop
            offset="25%"
            style={{ stopColor: selectedTheme['primary-bright'] }}
          />
          <stop
            offset="100%"
            style={{ stopColor: selectedTheme['secondary-bright'] }}
          />
        </linearGradient>
      </defs>

      {/* AB monogram */}
      <text
        dominantBaseline="central"
        fill="url(#grad1)"
        fontFamily="'Major Mono Display', monospace"
        fontSize={size * 0.72}
        fontWeight="bold"
        textAnchor="middle"
        x="50%"
        y="54%"
      >
        AB
      </text>
    </svg>
  );
};

export const useDynamicFavicon = (theme: Theme): string => {
  if (typeof window === 'undefined') return '/favicon.ico';

  const svgMarkup = renderToStaticMarkup(<FavIcon theme={theme} />);
  const encodedMarkup = encodeURIComponent(svgMarkup);

  return `data:image/svg+xml,${encodedMarkup}`;
};
