import SecondaryButton from './SecondaryButton';
import ProjectDetail from './ProjectDetail';
export interface IProject {
  number: number;
  title: string;
  descriptions: string[];
  language: string;
  timeToComplete: string;
  difficulty: string;
  codeUrl: string;
}

export interface ProjectProps {
  project: IProject;
}

const Project = ({ project }: ProjectProps) => {

  return (
    <article className="flex flex-col flex-1 content-center align-middle justify-center max-w-xl">
      <p className="text-xl font-thin">Project {project.number}</p>
      <h2 className="text-5xl font-thin mt-1 tablet:whitespace-nowrap">
        {project.title}
      </h2>
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-3 flex flex-col">
          {project.descriptions.map((description, i) => (
            <p
              className="text-xl font-thin mt-[2.25rem]"
              key={`${project.title}-description-${i}`}
            >
              {description}
            </p>
          ))}
          <div className="mt-[2.25rem] flex">

          <a href={project.codeUrl} target="_blank" rel="noreferrer noopener">
          <SecondaryButton
              showIcon
              icon="download"
            >
              Github Repository
            </SecondaryButton>
          </a>

          </div>
        </div>
        <div className="col-span-2 col-start-4 mt-[2.25rem]">
          <ProjectDetail title="Language" content={project.language} />
          <ProjectDetail
            className="mt-6"
            title="Time To Complete"
            content={project.timeToComplete}
          />
          <ProjectDetail
            className="mt-6"
            title="Difficulty Level"
            content={project.difficulty}
          />
        </div>
      </div>
    </article>
  );
};

export default Project;
