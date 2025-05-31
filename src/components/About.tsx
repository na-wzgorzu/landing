import Image from "next/image";

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
        O nas
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <AboutContent key="firstImg" img="/gallery/bridge.jpg" />
        <AboutContent
          key="SecondImg"
          img="/gallery/inne102.jpg"
          classNames="md:flex-col-reverse"
        />
      </div>
    </div>
  );
};

const AboutContent = ({
  img,
  classNames,
}: {
  classNames?: string;
  img: string;
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
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>
  );
};
