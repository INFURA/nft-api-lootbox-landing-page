import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsModule from './components/ProjectsModule';

import Lootbox from './assets/images/infurabox_open_trans_optimized_cropped.png';

function App() {
  return (
    <div className='pb-64'>
      <Header />
      <Hero
        title='The Infura NFT API Lootbox Challenge'
        descriptions={[
          'Below, you’ll find two unique fast-track projects that use Infura to perform NFT access operations that you can use in your projects.',
          'You’ll be provided with all the code, examples, tutorials, and front-end assets you need to create production-grade working projects.'
        ]}
        image={Lootbox}
      />
      <ProjectsModule />
      <Hero
        title='Earn Rewards'
        descriptions={[
          'Help us get the word out about the Infura NFT API and earn Infura prizes!',
          ' Complete one of the projects above and share your experience on your Blog, Twitter or Youtube channel and receive Infura goodies and prizes!'
        ]}
        image={Lootbox}
      />
    </div>
  );
}

export default App;
