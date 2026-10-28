import { type FC, type ReactNode } from 'react';

import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { useSwiperSlide } from 'swiper/react';

import styles from './TestimonialCard.module.css';

type Props = {
  authorIcon: string;
  authorName: string;
  authorRole: string;
  children: ReactNode;
  currentTestimonial: number;
  totalTestimonial: number;
};

export const TestimonialCard: FC<Props> = ({
  authorIcon,
  authorName,
  authorRole,
  children,
  currentTestimonial,
  totalTestimonial,
}) => {
  const slide = useSwiperSlide();

  return (
    <div aria-hidden={!slide.isActive} className={styles.card}>
      <VisuallyHidden>
        Achievement {currentTestimonial} out of {totalTestimonial}.{' '}
        {authorName}, {authorRole}.
      </VisuallyHidden>

      <div className={styles.quote}>{children}</div>
      <div aria-hidden className={styles.author}>
        <span className={styles.authorPicture}>{authorIcon}</span>
        <div className={styles.authorTitle}>
          <span className={styles.authorName}>{authorName}</span>
          <span className={styles.authorRole}>{authorRole}</span>
        </div>
      </div>
    </div>
  );
};
