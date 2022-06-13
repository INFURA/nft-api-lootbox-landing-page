import LogoImage from '@/assets/images/logo.png';

const Header = () => {
  return (
    <header className="mt-12">
      <img className="mx-auto" src={LogoImage} alt="Infura Logo" />
    </header>
  );
};

export default Header;
