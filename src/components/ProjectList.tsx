import Project, { IProject } from './Project';

export interface ProjectListProps {
  projects: IProject[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="flex flex-col tablet:flex-row justify-center">
      {projects.map((project, i) => (
        <li
          className={i > 0 ? 'mt-24 tablet:mt-0 tablet:ml-24' : ''}
          key={`project-${i}`}
        >
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
