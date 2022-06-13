import { IProject } from './Project';
import ProjectList from './ProjectList';

const ProjectsModule = () => {
  const projects: IProject[] = [
    {
      number: 1,
      title: 'NFT Gallery',
      descriptions: [
        'Use the Infura NFT API to query a metamask wallet and display any NFT’s that are in that wallet.',
        'Included in this package is a project skeleton containing the assets you’ll need to fully build out this project.',
      ],
      language: 'Typescript',
      timeToComplete: '~8 Hours',
      difficulty: '4/5',
      codeUrl: 'https://github.com/INFURA/nft-api-lootbox-gallery-app',
    },
    {
      number: 2,
      title: 'NFT as Authorization',
      descriptions: [
        'Leverage the Infura NFT API to check a metamask wallet and authorize the user based on the ownership of a specific Infura NFT.',
        'Included in this package is a project skeleton containing the assets you’ll need to fully build out this project.',
      ],
      language: 'Typescript',
      timeToComplete: '~4 Hours',
      difficulty: '2/5',
      codeUrl: 'https://github.com/INFURA/nft-api-lootbox-auth-app',
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
