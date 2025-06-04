import Image from "next/image";

const aboutContent = {
  first:
    "Ośrodek Wypoczynkowy „Na Wzgórzu” jest położony na terenie Brodnickiego Parku Krajobrazowego, nad jeziorem Strażym (73 ha), w odległości 12 km od miasta Brodnica, 60 km od Torunia i 200 km od Warszawy, na pograniczu województw Kujawsko-Pomorskiego oraz Warmińsko-Mazurskiego.",
  second:
    "Urozmaicony teren, czyste lasy i jeziora, rezerwaty przyrody, wiele malowniczych zakątków oraz brak większych miast i przemysłu sprawiają, że okolica stanowi idealne miejsce na wypoczynek, jednocześnie wciąż pozostając nieodkrytą przez masową turystykę.",
};

export const About = () => {
  return (
    <section>
      <AboutHeader />
    </section>
  );
};

const AboutHeader = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-lg gap-6 px-4">
      <div className="underline text-gray-700 font-semibold font-mono text-3xl underline-offset-8 decoration-gray-700">
        Położenie
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <AboutContent
          key="firstImg"
          img="/gallery/bridge.jpg"
          content={aboutContent.first}
        />
        <AboutContent
          key="SecondImg"
          img="/gallery/inne102.jpg"
          classNames="md:flex-col-reverse justify-end"
          content={aboutContent.second}
        />
      </div>

      <div>
        <h3>
          Jezioro Strażym, nad którym zlokalizowany jest ośrodek stanowi część
          głównego szlaku wodnego łączącego całe Pojezierze Brodnickie.
        </h3>
        <div>
          <Image
            width={800}
            height={800}
            alt="About image"
            src="/gallery/jezioro.jpg"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

const AboutContent = ({
  img,
  classNames,
  content,
}: {
  classNames?: string;
  img: string;
  content: string;
}) => {
  return (
    <div className={`flex flex-col gap-4 ${classNames}`}>
      <div>
        <Image
          width={300}
          height={300}
          alt="About image"
          src={img}
          className="w-full"
        />
      </div>
      <div>{content}</div>
    </div>
  );
};
