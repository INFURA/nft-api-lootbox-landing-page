import PrimaryButton from './PrimaryButton';

export interface HeroProps {
  title: string;
  descriptions: string[];
  image: string;
}

const Hero = ({
  title,
  descriptions,
  image,
}: HeroProps) => {
  return (
    <section className="container mx-auto mt-36 mb-36 px-14 tablet:px-8 desktop:px-60">
      <div className="flex flex-col-reverse tablet:flex-row">
        <div className="flex flex-col justify-center content-center flex-1 mt-12 tablet:mt-0">
          <h1 className="text-6xl font-thin">{title}</h1>
          {descriptions.map((description, i) => (
            <p
              className="text-xl font-thin mt-10"
              key={`${title}-description-${i}`}
            >
              {description}
            </p>
          ))}
        </div>
        <div className="flex-1 tablet:ml-24">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
