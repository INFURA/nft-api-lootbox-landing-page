import ButtonStyles from '../styles/button.module.css';

export interface PrimaryButtonProps extends React.PropsWithChildren<unknown> {
  onClick?: () => void;
}

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return <button className={ButtonStyles.primary}>{children}</button>;
};

export default PrimaryButton;
