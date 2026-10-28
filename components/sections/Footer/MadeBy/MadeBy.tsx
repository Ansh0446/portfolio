import { useState, type FC } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import { useTheme } from '~/hooks/useTheme';
import { useTypingEffect } from '~/hooks/useTypingEffect';

import styles from './MadeBy.module.css';

const TARGET_TEXT = 'anshBanga';

export const MadeBy: FC = () => {
  const { isReducedMotion } = useTheme();

  const name = useTypingEffect({ startDelayMs: 500 });
  const [showCaret, setShowCaret] = useState(isReducedMotion);

  const startTyping = () => {
    setShowCaret(true);
    name.type(TARGET_TEXT);
  };

  const endTyping = () => {
    setShowCaret(false);
    name.reset();
  };

  const [ref, inView] = useInView({
    onChange: (inView) => {
      if (!inView) endTyping();
    },
    threshold: 0,
  });

  return (
    <div
      aria-label="Made with love by: Ansh Banga"
      className={styles.container}
      ref={ref}
    >
      <span aria-hidden className={styles.madeWith}>
        Made with
      </span>

      <svg
        aria-hidden
        className={classNames(styles.heartSvg, {
          [styles.visible]: inView,
        })}
        height="20"
        viewBox="350 470 60 70"
        width="18"
      >
        <path
          className={styles.heart}
          d="M376.233+505.937C387.445+497.528+373.673+472.591+359.42+479.717C339.481+489.686+371.904+539.764+372.23+539.764C388.387+539.764+416.046+496.371+403.855+480.117C390.025+461.678+373.646+507.878+376.233+505.937Z"
          onTransitionEnd={startTyping}
        />
      </svg>

      <span aria-hidden className={styles.madeWith}>
        by
      </span>

      <span
        aria-hidden
        className={styles.name}
        data-caret={isReducedMotion || showCaret}
      >
        {isReducedMotion ? TARGET_TEXT : name.text}
      </span>
    </div>
  );
};
