import { IProject } from './Project';
import ProjectList from './ProjectList';

const ProjectsModule = () => {
  const projects: IProject[] = [
    {
      number: 1,
      title: 'NFT Carousel',
      videoId: 636138158,
      descriptions: [
        'In this project, you’ll use Infura to interrogate your metamask wallet and display any NFT’s that are contained in that wallet.',
        'Included in this package are all of the tutorials, examples and front-end assets you’ll need to create this project.',
      ],
      language: 'Javascript, C#',
      timeToComplete: '2 Hours',
      difficulty: '3/5',
      codeUrl: '',
      assetsUrl: '',
    },
    {
      number: 2,
      title: 'NFT as Authorization',
      videoId: 636138158,
      descriptions: [
        'In this project, you’ll use Infura to interrogate your metamask wallet and display any NFT’s that are contained in that wallet.',
        'Included in this package are all of the tutorials, examples and front-end assets you’ll need to create this project.',
      ],
      language: 'Javascript, C#',
      timeToComplete: '2 Hours',
      difficulty: '3/5',
      codeUrl: '',
      assetsUrl: '',
    },
  ];

  return (
    <section className="bg-neutral-900 p-14 desktop:p-24">
      <div className="container mx-auto">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsModule;
