import { GoogleMapsEmbed } from "@next/third-parties/google";

export const GoogleMap = () => {
  console.log("process.env.GOOGLE_MAPS_KEY", process.env.GOOGLE_MAPS_KEY);

  return (
    <GoogleMapsEmbed
      apiKey={process.env.GOOGLE_MAPS_KEY ?? ""}
      height="100%;"
      style="min-height: 550px; height:100%; width:100%;"
      width="100%;"
      mode="place"
      q="Ośrodek+Wypoczynkowy+Na+Wzgórzu"
      language="pl"
      region="pl"
      center="53.3394168,19.4370034"
      zoom="15"
    />
  );
};
