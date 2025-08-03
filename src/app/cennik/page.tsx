import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Cennik",
  alternates: {
    canonical: "https://na-wzgorzu.pl/cennik",
  },
};

// async function getHtml(): Promise<string> {
//   const url = "https://na-wzgorzu.pl/api/cennik";

//   const res = await fetch(url, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Nie udało się pobrać danych");
//   }

//   return res.text();
// }

export default async function Page() {
  // const html = await getHtml();
  return (
    <div className="overflow-hidden">
      <div
        className="py-8 overflow-scroll"
        // dangerouslySetInnerHTML={{ __html: html }}
      >
        <div className="container">
          <h1 className="main-title">Cennik 2025</h1>

          <h2 className="section-title">DOMKI</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th>TYP:</th>
                <th className="center">
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
                  <span className="price-highlight">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
                <th className="center">
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
                  <span className="price-highlight">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
                <th className="center">
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
                  <span className="price-highlight">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
                <th className="center">
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
                  <span className="price-highlight">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>
                    DOMEK PIĘTROWY
                    <br />5 OSOBOWY
                    <br />
                    (max 7 os.)
                  </b>
                </td>
                <td className="center">
                  <b>485 zł</b>
                  <br />
                  <span className="price-highlight">(5 os. lub mniej)</span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="center">
                  <b>455 zł</b>
                  <br />
                  <span className="price-highlight">(5 os. lub mniej)</span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="center">
                  <b>395 zł</b>
                  <br />
                  <span className="price-highlight">(5 os. lub mniej)</span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="center">
                  <b>325 zł</b>
                  <br />
                  <span className="price-highlight">(5 os. lub mniej)</span>
                  <br />
                  za 6 i 7 os.
                  <br />
                  po 15 zł / doba
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    DOMEK PARTEROWY
                    <br />
                    (APARTAMENT)
                    <br />4 OSOBOWY
                    <br />
                    (max 6 os.)
                  </b>
                </td>
                <td className="center">
                  <b>485 zł</b>
                  <br />
                  <span className="price-highlight">(4 os. lub mniej)</span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="center">
                  <b>455 zł</b>
                  <br />
                  <span className="price-highlight">(4 os. lub mniej)</span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="center">
                  <b>395 zł</b>
                  <br />
                  <span className="price-highlight">(4 os. lub mniej)</span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
                <td className="center">
                  <b>325 zł</b>
                  <br />
                  <span className="price-highlight">(4 os. lub mniej)</span>
                  <br />
                  za 5 i 6 os.
                  <br />
                  po 15 zł / doba
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    DOMEK PARTEROWY
                    <br />2 OSOBOWY
                    <br />
                    (max 3 os.)
                  </b>
                </td>
                <td className="center">
                  <b>255 zł</b>
                  <br />
                  <span className="price-highlight">(2 os. lub mniej)</span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
                <td className="center">
                  <b>245 zł</b>
                  <br />
                  <span className="price-highlight">(2 os. lub mniej)</span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
                <td className="center">
                  <b>235 zł</b>
                  <br />
                  <span className="price-highlight">(2 os. lub mniej)</span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
                <td className="center">
                  <b>225 zł</b>
                  <br />
                  <span className="price-highlight">(2 os. lub mniej)</span>
                  <br />
                  za 3 os. 15 zł/doba
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{ color: "red", fontWeight: 700 }}
            className="additional-info-box"
          >
            Sprzedajemy pobyty z wyżywieniem. W okresie wakacyjnym w domkach
            możliwe opcje to: śniadania + obiady, śniadania + obiadokolacje,
            obiady + kolacje, śniadania + obiady + kolacje, same obiady, same
            obiadokolacje. W innych okresach wyżywienie zależne od dostępnych
            opcji.
          </div>
          <div
            style={{
              lineHeight: "16px",
              fontSize: "12px",
              borderBottom: "1px solid black",
              fontWeight: 700,
              padding: "0 8px",
            }}
          >
            W domkach zużycie energii elektrycznej płatne jest dodatkowo według
            wskazań licznika w dniu wyjazdu.
          </div>
          <div
            style={{
              lineHeight: "16px",
              fontSize: "12px",
              borderBottom: "1px solid black",
              fontWeight: 700,
              padding: "0 8px",
            }}
          >
            Domki wynajmujemy od końca kwietnia do końca września. W okresie
            wakacyjnym PREFERUJEMY POBYTY MINIMUM TYGODNIOWE - od soboty do
            soboty albo zaczynające się lub kończące w sobotę, krótsze terminy
            możliwe w miarę dostępności.
          </div>
          <div style={{ color: "red" }} className="additional-info-box">
            W żadnym terminie nie sprzedajemy pobytów jednodniowych.
          </div>

          <h2 className="section-title">POKOJE</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th>TYP:</th>
                <th className="center">
                  CENA ZA WYNAJĘCIE POKOJU ZA DOBĘ na pobyty: <br />
                  od 19.06 do 31.08
                  <br />
                  <span className="price-highlight">
                    (wyżywienie płatne osobno)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>
                    POKÓJ 2 OSOBOWY <br />
                    BEZ TARASU
                  </b>
                </td>
                <td className="center">
                  <b>110 zł</b>
                  <span className="price-highlight">(2 os. lub mniej)</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    POKÓJ 3 OSOBOWY <br />
                    BEZ TARASU
                  </b>
                </td>
                <td className="center">
                  <b>160 zł</b>
                  <span className="price-highlight">(3 os. lub mniej)</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    POKÓJ 3 OSOBOWY <br />Z TARASEM
                  </b>
                </td>
                <td className="center">
                  <b>180 zł</b>
                  <span className="price-highlight">(3 os. lub mniej)</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    POKÓJ 4 OSOBOWY <br />
                    BEZ TARASU
                  </b>
                </td>
                <td className="center">
                  <b>170 zł</b>
                  <span className="price-highlight">(4 os. lub mniej)</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{ color: "red", fontWeight: 700 }}
            className="additional-info-box"
          >
            Sprzedajemy pobyty z wyżywieniem. W pokojach możliwe opcje to:
            śniadania + obiady, śniadania + obiadokolacje, obiady + kolacje,
            śniadania + obiady + kolacje.
          </div>
          <div
            style={{
              lineHeight: "16px",
              fontSize: "12px",
              borderBottom: "1px solid black",
              fontWeight: 700,
              padding: "0 8px",
            }}
          >
            Pokoje wynajmujemy od 19.06 do 31.08. W okresie wakacyjnym
            PREFERUJEMY POBYTY MINIMUM TYGODNIOWE - od soboty do soboty albo
            zaczynające się lub kończące w sobotę, krótsze terminy możliwe w
            miarę dostępności.
          </div>
          <div style={{ color: "red" }} className="additional-info-box">
            W żadnym terminie nie sprzedajemy pobytów jednodniowych.
          </div>

          <h2 className="section-title">WYŻYWIENIE</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th>WYŻYWIENIE</th>
                <th className="center">Osoba dorosła</th>
                <th className="center">Dzieci 4 - 12 lat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>ŚNIADANIE</b>
                </td>
                <td className="center">30,00 zł</td>
                <td className="center">20,00 zł</td>
              </tr>
              <tr>
                <td>
                  <b>OBIAD lub OBIADOKOLACJA</b>
                </td>
                <td className="center">50,00 zł</td>
                <td className="center">35,00 zł</td>
              </tr>
              <tr>
                <td>
                  <b>KOLACJA</b>
                </td>
                <td className="center">25,00 zł</td>
                <td className="center">15,00 zł</td>
              </tr>
            </tbody>
          </table>

          <h2 className="section-title">SPRZĘT PŁYWAJĄCY i SPORTOWY</h2>
          <table className="equipment-table">
            <thead>
              <tr>
                <th>SPRZĘT PŁYWAJĄCY i SPORTOWY</th>
                <th className="center">GODZINA</th>
                <th className="center">DOBA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>KAJAK</b>
                </td>
                <td className="center">20,00 zł</td>
                <td className="center">60,00 zł</td>
              </tr>
              <tr>
                <td>
                  <b>ŁÓDKA</b>
                </td>
                <td className="center">20,00 zł</td>
                <td className="center">60,00 zł</td>
              </tr>
              <tr>
                <td>
                  <b>ROWER WODNY</b>
                </td>
                <td className="center">30,00 zł</td>
                <td className="center">NIE DOTYCZY</td>
              </tr>
              <tr>
                <td>
                  <b>ROWER GÓRSKI</b>
                </td>
                <td className="center">10,00 zł</td>
                <td className="center">35,00 zł</td>
              </tr>
            </tbody>
          </table>

          <h2 className="section-title">INNE</h2>
          <table className="price-table">
            <tbody>
              <tr>
                <td>
                  <b>PIES lub KOT</b>
                </td>
                <td className="center">25 zł / doba</td>
              </tr>
              <tr>
                <td>
                  <b>ŁÓŻECZKO DZIECINNE</b>
                </td>
                <td className="center">25 zł / doba</td>
              </tr>
            </tbody>
          </table>

          <p className="payment-info">
            Ośrodek Wypoczynkowy Na Wzgórzu zastrzega sobie prawo do zmiany
            oferty i cen.
          </p>
          <p className="important-note">Opłata klimatyczna płatna osobno.</p>
          <p className="payment-info">
            FORMĄ PŁATNOŚCI ZA POBYT i WYŻYWIENIE JEST GOTÓWKA W DNIU PRZYJAZDU.
          </p>
        </div>
      </div>
    </div>
  );
}
