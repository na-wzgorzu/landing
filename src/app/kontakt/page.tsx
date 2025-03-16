import { MailIcon, MapPin, PhoneCall, User } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 md:my-10 py-6 md:py-0">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row gap-6">
        <div className="p-4 flex flex-col gap-8 flex-2">
          <h2 className="flex flex-col text-5xl border-b text-gray-700 border-gray-300 pb-4 font-semibold">
            <span className="uppercase text-2xl text-gray-400">Informacje</span>{" "}
            Kontaktowe
          </h2>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <User className="size-6" />
              <span>Andrzej Święcki</span>
            </div>
            <a href="tel:+48564939153" className="flex gap-2">
              <PhoneCall className="size-6" />
              <span>+48 (56) 493 91 53</span>
            </a>
            <a href="mailto:na-wzgorzu@na-wzgorzu.pl" className="flex gap-2">
              <MailIcon className="size-6" />
              <span>na-wzgorzu@na-wzgorzu.pl</span>
            </a>{" "}
            <a
              href="https://www.google.com/maps/dir//Gaj-Grzmi%C4%99ca+30a,+87-312+Pokrzydowo/@53.3393884,19.3571782,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471d22a06ca9baa5:0xa7a6c6f195ed6810!2m2!1d19.4395783!2d53.3394168?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              className="flex gap-2"
              target="_blank"
            >
              <MapPin className="size-6" />
              <span>Gaj-Grzmięca 30a 87-312 Pokrzydowo</span>
            </a>
          </div>
        </div>

        <Map />
      </div>
    </div>
  );
}

const Map = () => {
  return (
    <div className="flex-3 min-h-[400px] w-full bg-gray-600 text-4xl text-white flex items-center justify-center">
      Mapa
    </div>
  );
};
