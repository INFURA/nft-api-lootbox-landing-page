import PlayIcon from '@/assets/images/play.svg';

export interface PlayButtonProps {
  onClick: () => void;
  className?: string;
}

const PlayButton = ({ onClick, className }: PlayButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      <span className='hidden'>Play</span>
      <img src={PlayIcon} alt="Play Icon" />
    </button>
  );
};

export default PlayButton;
