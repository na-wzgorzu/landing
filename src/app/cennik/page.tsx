import React from "react";

async function getHtml(): Promise<string> {
  const res = await fetch("http://localhost:3000/api/cennik", {
    cache: "no-store", // albo "force-cache" jeśli chcesz cachować
  });

  if (!res.ok) {
    throw new Error("Nie udało się pobrać danych");
  }

  return res.text();
}

export default async function Page() {
  const html = await getHtml();
  return (
    <div className="overflow-hidden">
      {/* <iframe
        src="/api/cennik"
        style={{
          width: "100%",
          minHeight: "1790px",
          border: "none",
          backgroundColor: "red",
        }}
        title="Cennik"
      /> */}

      <div
        className="py-8 overflow-scroll"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* <TablePrice /> */}
    </div>
  );
}

// const TablePrice = () => {
//   return (
//     <div className="overflow-auto text-xs max-w-screen-md mx-auto">
//       <h1 className="text-4xl font-bold text-center mt-8">Cennik 2025</h1>

//       <h2 className="text-2xl font-bold mt-8 text-center">DOMKI</h2>
//       <table className="table-auto border-collapse border border-gray-500 w-full mt-4 *:leading-3.5">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-400 p-1 text-left">TYP:</th>
//             <th className="border border-gray-400 p-1 text-center">
//               CENA ZA DOMEK
//               <br />
//               ZA DOBĘ
//               <br />
//               na pobyty:
//               <br />
//               <br />
//               od 05.07 do 16.08
//               <br />
//               <br />
//               <span className="text-red-500">(wyżywienie płatne osobno)</span>
//             </th>
//             <th className="border border-gray-400 p-1 text-center">
//               CENA ZA DOMEK
//               <br />
//               ZA DOBĘ
//               <br />
//               na pobyty:
//               <br />
//               <br />
//               od 01.05 do 04.05
//               <br />i<br />
//               od 19.06 do 22.06
//               <br />
//               <span className="text-red-500">(wyżywienie płatne osobno)</span>
//             </th>
//             <th className="border border-gray-400 p-1 text-center">
//               CENA ZA DOMEK
//               <br />
//               ZA DOBĘ
//               <br />
//               na pobyty:
//               <br />
//               <br />
//               od 22.06 do 05.07
//               <br />i<br />
//               od 16.08 do 23.08
//               <br />
//               <span className="text-red-500">(wyżywienie płatne osobno)</span>
//             </th>
//             <th className="border border-gray-400 p-1 text-center">
//               CENA ZA DOMEK
//               <br />
//               ZA DOBĘ
//               <br />
//               na pobyty:
//               <br />
//               <br />
//               do 19.06 i od 23.08
//               <br />
//               (oprócz
//               <br />
//               01.05 - 04.05)
//               <br />
//               <span className="text-red-500">(wyżywienie płatne osobno)</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 DOMEK PIĘTROWY
//                 <br />5 OSOBOWY
//                 <br />
//                 (max 7 os.)
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">485 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(5 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 6 i 7 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">455 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(5 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 6 i 7 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">395 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(5 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 6 i 7 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">325 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(5 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 6 i 7 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 DOMEK PARTEROWY
//                 <br />
//                 (APARTAMENT)
//                 <br />4 OSOBOWY
//                 <br />
//                 (max 6 os.)
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">485 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(4 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 5 i 6 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">455 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(4 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 5 i 6 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">395 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(4 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 5 i 6 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">325 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(4 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">
//                 za 5 i 6 os.
//                 <br />
//                 po 15 zł / doba
//               </span>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 DOMEK PARTEROWY
//                 <br />2 OSOBOWY
//                 <br />
//                 (max 3 os.)
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">255 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(2 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">za 3 os. 15 zł/doba</span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">245 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(2 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">za 3 os. 15 zł/doba</span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">235 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(2 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">za 3 os. 15 zł/doba</span>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">225 zł</b>
//               <br />
//               <span className="text-red-500 text-xs">(2 os. lub mniej)</span>
//               <br />
//               <span className="text-xs">za 3 os. 15 zł/doba</span>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mt-4 grid grid-cols-1 bg-black text-red-500">
//         <div className="p-1"></div>
//       </div>
//       <div className="grid grid-cols-1 bg-gray-200 text-red-500">
//         <div className="p-1">
//           <b className="text-red-500 text-xs">
//             Sprzedajemy pobyty z wyżywieniem. W okresie wakacyjnym w domkach
//             możliwe opcje to: śniadania + obiady, śniadania + obiadokolacje,
//             obiady + kolacje, śniadania + obiady + kolacje, same obiady, same
//             obiadokolacje, obowiązkowe dla osób mieszkających - oprócz dzieci do
//             lat 4. W innych okresach wyżywienie zależne od dostępnych opcji.
//           </b>
//         </div>
//       </div>
//       <div className="grid grid-cols-1">
//         <div className="p-1">
//           <b className="text-black text-xs">
//             W domkach zużycie energii elektrycznej płatne jest dodatkowo według
//             wskazań licznika w dniu wyjazdu.
//           </b>
//         </div>
//       </div>
//       <div className="grid grid-cols-1">
//         <div className="p-1">
//           <b className="text-black text-xs">
//             Domki wynajmujemy od końca kwietnia do końca września. W okresie
//             wakacyjnym PREFERUJEMY POBYTY MINIMUM TYGODNIOWE - od soboty do
//             soboty albo zaczynające się lub kończące w sobotę, krótsze terminy
//             możliwe w miarę dostępności.
//           </b>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 bg-gray-200">
//         <div className="p-1">
//           <b className="text-black text-xs">
//             W żadnym terminie nie sprzedajemy pobytów jednodniowych.
//           </b>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mt-8 text-center">POKOJE</h2>
//       <table className="table-auto border-collapse border border-gray-500 w-full mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-400 p-1 text-left">TYP:</th>
//             <th className="border border-gray-400 p-1 text-center">
//               CENA ZA WYNAJĘCIE POKOJU ZA DOBĘ na pobyty: <br />
//               od 19.06 do 31.08
//               <br />
//               <span className="text-red-500">(wyżywienie płatne osobno)</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 POKÓJ 2 OSOBOWY <br />
//                 BEZ TARASU
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">110 zł</b>{" "}
//               <span className="text-red-500 text-xs">(2 os. lub mniej)</span>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 POKÓJ 3 OSOBOWY <br />
//                 BEZ TARASU
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">160 zł</b>{" "}
//               <span className="text-red-500 text-xs">(3 os. lub mniej)</span>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 {" "}
//                 POKÓJ 3 OSOBOWY <br />Z TARASEM{" "}
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">180 zł</b>{" "}
//               <span className="text-red-500 text-xs">(3 os. lub mniej)</span>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">
//                 POKÓJ 4 OSOBOWY <br />
//                 BEZ TARASU
//               </b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-base">170 zł</b>{" "}
//               <span className="text-red-500 text-xs">(4 os. lub mniej)</span>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="mt-4 grid grid-cols-1 bg-black text-red-500">
//         <div className="p-1"></div>
//       </div>
//       <div className="grid grid-cols-1 bg-gray-200 text-red-500">
//         <div className="p-1">
//           <b className="text-red-500 text-xs">
//             W pokojach sprzedajemy tylko pobyty z wyżywieniem, możliwe opcje to:
//             śniadania + obiady, śniadania + obiadokolacje, obiady + kolacje,
//             śniadania + obiady + kolacje, obowiązkowe dla osób mieszkających -
//             oprócz dzieci do lat 4.
//           </b>
//         </div>
//       </div>
//       <div className="grid grid-cols-1">
//         <div className="p-1">
//           <b className="text-black text-xs">
//             Pokoje wynajmujemy od 19.06 do 31.08. W okresie wakacyjnym
//             PREFERUJEMY POBYTY MINIMUM TYGODNIOWE - od soboty do soboty albo
//             zaczynające się lub kończące w sobotę, krótsze terminy możliwe w
//             miarę dostępności.
//           </b>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 bg-gray-200">
//         <div className="p-1">
//           <b className="text-black text-xs">
//             W żadnym terminie nie sprzedajemy pobytów jednodniowych.
//           </b>
//         </div>
//       </div>

//       <h2 className="text-2xl text-center font-bold mt-8">WYŻYWIENIE</h2>
//       <table className="table-auto border-collapse border border-gray-500 w-full mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-400 p-1 text-left">WYŻYWIENIE</th>
//             <th className="border border-gray-400 p-1 text-center">
//               Osoba dorosła
//             </th>
//             <th className="border border-gray-400 p-1 text-center">
//               Dzieci 4 - 12 lat
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">ŚNIADANIE</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">30,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">20,00 zł</b>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">OBIAD lub OBIADOKOLACJA</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">50,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">35,00 zł</b>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">KOLACJA</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">25,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">15,00 zł</b>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <h2 className="text-2xl font-bold mt-8 text-center">
//         SPRZĘT PŁYWAJĄCY i SPORTOWY
//       </h2>
//       <table className="table-auto border-collapse border border-gray-500 w-full mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-400 p-1 text-left ">
//               SPRZĘT PŁYWAJĄCY i SPORTOWY
//             </th>
//             <th className="border border-gray-400 p-1 text-center">GODZINA</th>
//             <th className="border border-gray-400 p-1 text-center">DOBA</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">KAJAK</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">20,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">60,00 zł</b>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">ŁÓDKA</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">20,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">60,00 zł</b>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">ROWER WODNY</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">30,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">NIE DOTYCZY</b>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-400 p-1">
//               <b className="text-xs">ROWER GÓRSKI</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">10,00 zł</b>
//             </td>
//             <td className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">35,00 zł</b>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <h2 className="text-2xl font-bold mt-8 text-center">INNE</h2>
//       <table className="table-auto border-collapse border border-gray-500 w-full mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-400 p-1 text-left">
//               <b className="text-xs">PIES lub KOT</b>
//             </th>
//             <th className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">25 zł / doba</b>
//             </th>
//           </tr>
//           <tr>
//             <th className="border border-gray-400 p-1 text-left">
//               <b className="text-xs">ŁÓŻECZKO DZIECINNE</b>
//             </th>
//             <th className="border border-gray-400 p-1 text-center">
//               <b className="text-xs">25 zł / doba</b>
//             </th>
//           </tr>
//         </thead>
//       </table>

//       <p className="text-center mt-8 font-bold text-base">
//         Ośrodek Wypoczynkowy Na Wzgórzu zastrzega sobie prawo do zmiany oferty i
//         cen.
//       </p>
//       <p className="text-center mt-2 text-base">
//         Opłata klimatyczna płatna osobno.
//       </p>
//       <p className="text-center mt-4 font-bold text-base">
//         FORMĄ PŁATNOŚCI ZA POBYT i WYŻYWIENIE JEST GOTÓWKA W DNIU PRZYJAZDU.
//       </p>
//     </div>
//   );
// };
