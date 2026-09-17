import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { datos } from "../config/datos";

export function Canonical() {
  const location = useLocation();

  useEffect(() => {
    const url = `${datos.siteUrl}${location.pathname}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }

    link.href = url;
  }, [location.pathname]);

  return null;
}