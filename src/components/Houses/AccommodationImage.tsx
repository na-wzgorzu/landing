"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/app/cms/constants";
import type { Accommodation } from "@/components/Houses/types";

type CmsResponse = {
  houses?: Accommodation[];
  rooms?: Accommodation[];
};

let dataPromise: Promise<CmsResponse> | null = null;
const fetchCmsData = () => {
  if (!dataPromise) {
    dataPromise = fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json() as Promise<CmsResponse>;
      })
      .catch((err) => {
        dataPromise = null;
        throw err;
      });
  }
  return dataPromise;
};

type Props = {
  id: string;
  type: "domek" | "pokoj";
  localImage: string;
  alt: string;
};

export const AccommodationImage = ({ id, type, localImage, alt }: Props) => {
  const [remoteSrc, setRemoteSrc] = useState<string | null>(null);
  const [remoteLoaded, setRemoteLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchCmsData()
      .then((data) => {
        if (cancelled) return;
        const key = type === "domek" ? "houses" : "rooms";
        const item = data[key]?.find((a) => a.id === id);
        if (item?.image) setRemoteSrc(item.image);
        else setErrored(true);
      })
      .catch(() => {
        if (!cancelled) setErrored(true);
      });
    return () => {
      cancelled = true;
    };
  }, [id, type]);

  const showBlur = !remoteLoaded && !errored;
  const showRemote = remoteLoaded && !errored;

  return (
    <>
      <img
        src={localImage}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          showBlur ? "blur-md scale-105" : ""
        } ${showRemote ? "opacity-0" : "opacity-100"}`}
      />
      {remoteSrc && (
        <img
          src={remoteSrc}
          alt={alt}
          onLoad={() => setRemoteLoaded(true)}
          onError={() => setErrored(true)}
          className={`relative w-full h-full object-cover transition-opacity duration-300 ${
            showRemote ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </>
  );
};
