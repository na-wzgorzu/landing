import type { Accommodation } from "@/components/Houses/types";

export type ReservationNotice = {
  enabled: boolean;
  text: string;
};

export type CmsData = {
  houses: Accommodation[];
  rooms: Accommodation[];
  reservationNotice?: ReservationNotice;
};

export const DEFAULT_RESERVATION_NOTICE: ReservationNotice = {
  enabled: false,
  text: "",
};
