import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Cennik",
  alternates: {
    canonical: "https://na-wzgorzu.pl/cennik",
  },
};

export default async function Page() {
  return (
    <div className="overflow-hidden">
      <div className="py-8 overflow-scroll">
        <div className="mx-auto my-0 max-w-5xl overflow-x-scroll bg-white p-4 shadow-md sm:min-w-[465px] sm:rounded-lg">
          <h1 className="pb-8 pt-2 text-center text-4xl font-bold text-gray-700">
            Cennik 2025
          </h1>

          <h2 className="my-4 mt-8 text-center text-2xl font-bold text-gray-700">
            DOMKI
          </h2>
          <table className="mb-1 mt-2.5 w-full border-collapse border border-gray-300 text-xs leading-3">
            <thead>
              <tr className="text-center">
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  TYP:
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  CENA ZA DOMEK
                  <br />
                  ZA DOBĘ
                  <br />
                  na pobyty:
                  <br />
                  <br />
                  od 05.07 do 16.08
                  <br />
                  <br />
                  <span className="text-xs text-red-500">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  CENA ZA DOMEK
                  <br />
                  ZA DOBĘ
                  <br />
                  na pobyty:
                  <br />
                  <br />
                  od 01.05 do 04.05
                  <br />i<br />
                  od 19.06 do 22.06
                  <br />
                  <span className="text-xs text-red-500">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  CENA ZA DOMEK
                  <br />
                  ZA DOBĘ
                  <br />
                  na pobyty:
                  <br />
                  <br />
                  od 22.06 do 05.07
                  <br />i<br />
                  od 16.08 do 23.08
                  <br />
                  <span className="text-xs text-red-500">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  CENA ZA DOMEK
                  <br />
                  ZA DOBĘ
                  <br />
                  na pobyty:
                  <br />
                  <br />
                  do 19.06 i od 23.08
                  <br />
                  (oprócz
                  <br />
                  01.05 - 04.05)
                  <br />
                  <span className="text-xs text-red-500">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    DOMEK PIĘTROWY
                    <br />5 OSOBOWY
                    <br />
                    (max 7 os.)
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>485 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (5 os. lub mniej)
                  </span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>455 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (5 os. lub mniej)
                  </span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>395 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (5 os. lub mniej)
                  </span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>325 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (5 os. lub mniej)
                  </span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    DOMEK PARTEROWY
                    <br />
                    (APARTAMENT)
                    <br />4 OSOBOWY
                    <br />
                    (max 6 os.)
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>485 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (4 os. lub mniej)
                  </span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>455 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (4 os. lub mniej)
                  </span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>395 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (4 os. lub mniej)
                  </span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>325 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (4 os. lub mniej)
                  </span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    DOMEK PARTEROWY
                    <br />2 OSOBOWY
                    <br />
                    (max 3 os.)
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>255 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (2 os. lub mniej)
                  </span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>245 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (2 os. lub mniej)
                  </span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>235 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (2 os. lub mniej)
                  </span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>225 zł</b>
                  <br />
                  <span className="text-xs text-red-500">
                    (2 os. lub mniej)
                  </span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-gray-200 p-2 text-xs font-semibold text-gray-700">
            Sprzedajemy pobyty z wyżywieniem. W okresie wakacyjnym w domkach
            możliwe opcje to: śniadania + obiady, śniadania + obiadokolacje,
            obiady + kolacje, śniadania + obiady + kolacje, same obiady, same
            obiadokolacje. W innych okresach wyżywienie zależne od dostępnych
            opcji.
          </div>
          <div className="border-b border-black px-2 text-xs font-bold leading-4">
            W domkach zużycie energii elektrycznej płatne jest dodatkowo według
            wskazań licznika w dniu wyjazdu.
          </div>
          <div className="px-2 text-xs font-bold leading-4">
            Domki wynajmujemy od końca kwietnia do końca września. W okresie
            wakacyjnym PREFERUJEMY POBYTY MINIMUM TYGODNIOWE - od soboty do
            soboty albo zaczynające się lub kończące w sobotę, krótsze terminy
            możliwe w miarę dostępności.
          </div>
          <div className="bg-gray-200 p-2 text-xs font-semibold text-gray-700">
            W żadnym terminie nie sprzedajemy pobytów jednodniowych.
          </div>

          <h2 className="my-4 mt-8 text-center text-2xl font-bold text-gray-700">
            POKOJE
          </h2>
          <table className="mb-1 mt-2.5 w-full border-collapse border border-gray-300 text-xs leading-3">
            <thead>
              <tr className="text-center">
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  TYP:
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  CENA ZA WYNAJĘCIE POKOJU ZA DOBĘ na pobyty: <br />
                  od 19.06 do 31.08
                  <br />
                  <span className="text-xs text-red-500">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    POKÓJ 2 OSOBOWY <br />
                    BEZ TARASU
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>110 zł</b>
                  <span className="text-xs text-red-500">
                    (2 os. lub mniej)
                  </span>
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    POKÓJ 3 OSOBOWY <br />
                    BEZ TARASU
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>160 zł</b>
                  <span className="text-xs text-red-500">
                    (3 os. lub mniej)
                  </span>
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    POKÓJ 3 OSOBOWY <br />Z TARASEM
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>180 zł</b>
                  <span className="text-xs text-red-500">
                    (3 os. lub mniej)
                  </span>
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>
                    POKÓJ 4 OSOBOWY <br />
                    BEZ TARASU
                  </b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  <b>170 zł</b>
                  <span className="text-xs text-red-500">
                    (4 os. lub mniej)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-gray-200 p-2 text-xs font-semibold text-gray-700">
            Sprzedajemy pobyty z wyżywieniem. W pokojach możliwe opcje to:
            śniadania + obiady, śniadania + obiadokolacje, obiady + kolacje,
            śniadania + obiady + kolacje.
          </div>
          <div className="px-2 text-xs font-bold leading-4">
            Pokoje wynajmujemy od 19.06 do 31.08. W okresie wakacyjnym
            PREFERUJEMY POBYTY MINIMUM TYGODNIOWE - od soboty do soboty albo
            zaczynające się lub kończące w sobotę, krótsze terminy możliwe w
            miarę dostępności.
          </div>
          <div className="bg-gray-200 p-2 text-xs font-semibold text-gray-700">
            W żadnym terminie nie sprzedajemy pobytów jednodniowych.
          </div>

          <h2 className="my-4 mt-8 text-center text-2xl font-bold text-gray-700">
            WYŻYWIENIE
          </h2>
          <table className="mb-1 mt-2.5 w-full border-collapse border border-gray-300 text-xs leading-3">
            <thead>
              <tr className="text-center">
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  WYŻYWIENIE
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  Osoba dorosła
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  Dzieci 4 - 12 lat
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>ŚNIADANIE</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  30,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  20,00 zł
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>OBIAD lub OBIADOKOLACJA</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  50,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  35,00 zł
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>KOLACJA</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  25,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  15,00 zł
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="my-4 mt-8 text-center text-2xl font-bold text-gray-700">
            SPRZĘT PŁYWAJĄCY i SPORTOWY
          </h2>
          <table className="mb-5 mt-2.5 w-full border-collapse border border-gray-300 text-xs">
            <thead>
              <tr className="text-center">
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  SPRZĘT PŁYWAJĄCY i SPORTOWY
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  GODZINA
                </th>
                <th className="border border-gray-300 bg-gray-100 p-2 text-left font-bold text-gray-600">
                  DOBA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>KAJAK</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  20,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  60,00 zł
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>ŁÓDKA</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  20,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  60,00 zł
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>ROWER WODNY</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  30,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  NIE DOTYCZY
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>ROWER GÓRSKI</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  10,00 zł
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  35,00 zł
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="my-4 mt-8 text-center text-2xl font-bold text-gray-700">
            INNE
          </h2>
          <table className="mb-1 mt-2.5 w-full border-collapse border border-gray-300 text-xs leading-3">
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>PIES lub KOT</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  25 zł / doba
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-left">
                  <b>ŁÓŻECZKO DZIECINNE</b>
                </td>
                <td className="border border-gray-300 p-2 text-left">
                  25 zł / doba
                </td>
              </tr>
            </tbody>
          </table>

          <p className="mt-5 text-center text-xs font-bold text-gray-900">
            Ośrodek Wypoczynkowy Na Wzgórzu zastrzega sobie prawo do zmiany
            oferty i cen.
          </p>
          <p className="mt-4 text-center text-xs text-gray-600">
            Opłata klimatyczna płatna osobno.
          </p>
          <p className="mt-5 text-center text-xs font-bold text-gray-900">
            FORMĄ PŁATNOŚCI ZA POBYT i WYŻYWIENIE JEST GOTÓWKA W DNIU PRZYJAZDU.
          </p>
        </div>
      </div>
    </div>
  );
}
