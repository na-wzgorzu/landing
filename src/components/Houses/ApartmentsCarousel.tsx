// import { House } from "@/assets/House";
// import { Carousel } from "@/components/Carousel";
// import { HouseCard } from "@/components/Houses/HouseCard";
// import { CarouselItem } from "@/components/ui/carousel";
// import { accommodationList } from "@/data/houses";

import Image from "next/image";
import Link from "next/link";

const images = [
  "/gallery/hotel03.jpg",
  "/gallery/hotel07.jpg",
  "/gallery/hotel01.jpg",
];

export function ApartmentsCarousel() {
  return (
    <Link href="/pokoje" className="bg-brand text-white p-6">
      <div className="flex flex-col gap-4 sm:gap-8 max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Pokoje</h2>

        <div className="flex flex-col lg:flex-row gap-3 justify-between">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Gallery item"
              width={300}
              height={200}
              className={`w-full rounded-lg lg:even:block cursor-pointer aspect-video
                `}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

// export function ApartmentsCarousel() {
//   return (
//     <div className="flex flex-col gap-6 md:mt-20">
//       <div className="md:mx-auto relative px-4">
//         <div className="absolute right-0 -top-[185px] -z-1">
//           <House />
//         </div>

//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-brand">
//           Pokoje
//         </h2>

//         <Carousel>
//           {accommodationList
//             .filter((h) => h.type === "pokoj")
//             .map((house, index) => (
//               <CarouselItem key={index}>
//                 <HouseCard {...house} />
//               </CarouselItem>
//             ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }
