import type { Accommodation } from "@/components/Houses/types";

export type ReservationNotice = {
  enabled: boolean;
  text: string;
};

export type GastroContent = {
  hero: {
    title: string;
    subtitle: string;
  };
  kitchen: {
    title: string;
    description: string;
  };
  mealTimes: {
    title: string;
    items: {
      name: string;
      time: string;
    }[];
    note: string;
  };
  mealOptions: {
    title: string;
    description: string;
    items: string[];
  };
  mealDetails: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  pricingCta: {
    text: string;
    href: string;
  };
  gallery: {
    title: string;
    images: string[];
  };
  dietaryOptions: {
    title: string;
    description: string;
    highlight: string;
    items: string[];
  };
};

export type CmsData = {
  houses: Accommodation[];
  rooms: Accommodation[];
  gastro: GastroContent;
  reservationNotice?: ReservationNotice;
};

export type CmsTab = "houses" | "rooms" | "reservation";

export const DEFAULT_RESERVATION_NOTICE: ReservationNotice = {
  enabled: false,
  text: "",
};
