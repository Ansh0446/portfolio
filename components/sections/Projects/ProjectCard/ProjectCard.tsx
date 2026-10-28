import { type FC } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import { type RepositoryInfo } from '~/api/fetchProjectDetails';

import { type Project } from '../projects.const';

import { RepositoryDetails } from './RepositoryDetails/RepositoryDetails';

import styles from './ProjectCard.module.css';

type Props = {
  order: number;
  project: Project;
  repository?: RepositoryInfo;
};

export const ProjectCard: FC<Props> = ({
  order,
  project,
  repository,
}) => {
  const [cardRef, cardInView] = useInView({ threshold: 0.75 });

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.stickyContainer, styles.size)}
      >
        <span className={styles.sideTitle}>
          {order}.{project.name}
        </span>
        <div className={styles.videoContainer}>
          <img
            alt={`Cover art for ${project.title}`}
            className={styles.video}
            data-revealed={cardInView}
            src={`/images/projects/${project.folder}/poster.png`}
          />
        </div>
      </div>
      <article
        className={classNames(styles.card, styles.size)}
        ref={cardRef}
      >
        <div className={styles.cardContent}>
          <header className={styles.cardHeader}>
            <div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardSubtitle}>
                {project.subtitle}
              </p>
            </div>

            {repository && (
              <RepositoryDetails
                lastUpdate={repository.lastUpdate}
                liveUrl={repository.liveUrl}
                monthlyDownloads={repository.monthlyDownloads}
                name={repository.name}
                owner={repository.owner}
                repositoryUrl={repository.repositoryUrl}
                stars={repository.stars}
                title={project.title}
              />
            )}
          </header>
          <div className={styles.cardDescription}>
            {project.description}
          </div>
        </div>
      </article>
    </div>
  );
};
