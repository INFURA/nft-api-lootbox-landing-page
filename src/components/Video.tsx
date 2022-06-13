import { useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import PlayButton from './PlayButton';

export interface VideoProps {
  id: number;
}

const Video = ({ id }: VideoProps) => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(!playing);
  };

  return (
    <div className="relative w-full">
      {!playing && (
        <>
          <PlayButton
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            onClick={handlePlayClick}
          />
          <img
            className={`blur-sm ${playing && 'invisible'}`}
            src={`https://vumbnail.com/${id}_large.jpg`}
            alt="Video thumbnail"
          />
        </>
      )}
      {playing && (
        <Vimeo
          showByline={false}
          showTitle={false}
          responsive
          video={id}
          autoplay
        />
      )}
    </div>
  );
};

export default Video;
