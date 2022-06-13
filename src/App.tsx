import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsModule from './components/ProjectsModule';

import Lootbox from './assets/images/infurabox_open_trans_optimized_cropped.png';
import NFTExample from './assets/images/nft_example.png';

function App() {
  return (
    <div className='pb-64'>
      <Header />
      <Hero
        title='The Infura NFT Lootbox'
        descriptions={[
          'Below, you’ll find two unique fast-track projects that use Infura to perform powerful NFT access operations that you can use in your projects.',
          'You’ll be provided with all the code, examples, tutorials, and front-end assets you need to create production-perfect working projects.'
        ]}
        image={Lootbox}
      />
      <ProjectsModule />
      <Hero
        title='Earn Rewards'
        descriptions={[
          'Help us get the word out about the Infura NFT Lootbox and earn rewards!',
          ' Are you a blogger, vlogger or social media personality in tech? Complete one of the projects above and share your experience on your blog, twitter or youtube channel and receive an exclusive Infura NFT – not only will it look great in your collection, but it will give you access to exclusive Infura rewards and events in the future.'
        ]}
        image={NFTExample}
        buttonText='Learn More And Submit'
        onClick={() => {
          return;
        }}
      />
    </div>
  );
}

export default App;
