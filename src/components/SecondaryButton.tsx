import DownloadIcon from '@/assets/images/download.svg';

export interface SecondaryButtonProps extends React.PropsWithChildren<unknown> {
  onClick?: () => void;
  icon?: 'download' | undefined;
  showIcon?: boolean;
}

const SecondaryButton = ({
  children,
  showIcon,
  icon,
  onClick,
}: SecondaryButtonProps) => {
  const icons = {
    download: DownloadIcon,
  };

  let mappedIcon = icons.download;

  if (icon) {
    mappedIcon = icons[icon];
  }

  return (
    <button
      className="uppercase text-[#F76342] flex items-center content-center"
      onClick={onClick}
    >
      <span className="text-2xl pt-1">{children}</span>
      {showIcon && icon && (
        <img className="ml-6 mb-0" src={mappedIcon} alt="" />
      )}
    </button>
  );
};

export default SecondaryButton;
