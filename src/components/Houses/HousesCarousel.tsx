import Image from "next/image";
import Link from "next/link";

const images = [
  {
    image: "/gallery/domki105.jpg",
    title: "Domki piętrowe 5-7 osobowe",
  },
  {
    image: "/gallery/apartamenty102.jpg",
    title: "Domki parterowe apartamenty 4-6 osobowe",
  },
  {
    image: "/gallery/domki11.jpg",
    title: "Domki parterowe 2-3 osobowe",
  },
];

export function HousesCarousel() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col text-3xl text-gray-700 font-semibold font-mono mx-auto">
        <div className="text-center">
          <div>Baza</div>
          <div className="underline underline-offset-8 decoration-gray-700">
            noclegowa
          </div>
        </div>
      </div>

      <Link href="/domki" className="bg-brand text-white p-6">
        <div className="flex flex-col  gap-4 sm:gap-8 mx-auto max-w-screen-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Domki</h2>

          <div className="flex flex-col lg:flex-row gap-3 w-full">
            {images.map(({ image }, index) => (
              <div key={index} className="w-full flex flex-col gap-3">
                <Image
                  src={image}
                  alt="Gallery item"
                  width={300}
                  height={200}
                  className="w-full rounded-lg cursor-pointer aspect-video object-cover"
                />
                {/* <p className="font-semibold">{title}</p> */}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

// const UnUsedCarousel = () => {
//   return (
//     <div className="flex flex-col  gap-4 sm:gap-8">
//       <div className="flex flex-col text-3xl text-gray-700 font-semibold font-mono mx-auto">
//         <div>Baza</div>
//         <div className="underline underline-offset-8 decoration-gray-700">
//           noclegowa
//         </div>
//       </div>

//       <div className="md:mx-auto relative px-4">
//         <div className="absolute right-0 -top-[185px] -z-1">
//           <House />
//         </div>

//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-brand">
//           Domki
//         </h2>

//         <Carousel>
//           {accommodationList
//             .filter((h) => h.type === "domek")
//             .map((house, index) => (
//               <CarouselItem key={index}>
//                 <HouseCard {...house} />
//               </CarouselItem>
//             ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };
