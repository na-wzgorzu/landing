import about1Img from "@/assets/about-1.jpg";
import about2Img from "@/assets/about-2.jpg";
import Image, { StaticImageData } from "next/image";

export const About = () => {
  return (
    <section>
      <AboutHeader />
    </section>
  );
};

const AboutHeader = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-lg gap-6">
      <div className="underline text-gray-700 font-semibold font-mono text-3xl underline-offset-8 decoration-gray-700">
        O nas
      </div>

      <div className="flex gap-4">
        <AboutContent key="firstImg" img={about2Img} />
        <AboutContent key="SecondImg" img={about1Img} isReverseContent />
      </div>
    </div>
  );
};

const AboutContent = ({
  img,
  isReverseContent = false,
}: {
  isReverseContent?: boolean;
  img: StaticImageData;
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${
        isReverseContent ? "flex-col-reverse" : ""
      }`}
    >
      <div>
        <Image alt="About image" src={img} />
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
