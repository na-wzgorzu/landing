import { GoogleMapsEmbed } from "@next/third-parties/google";

export const GoogleMap = () => {
  return (
    <GoogleMapsEmbed
      apiKey="AIzaSyAYrcoNI_IcYodJBNOTrwFdqB5qpU3SLQ0"
      height="100%;"
      style="min-height: 400px; height:100%; width:100%;"
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
