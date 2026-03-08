"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;

    if (!favicon) {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/png";
      document.head.appendChild(newFavicon);
    }

    const faviconElement = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;

    if (faviconElement) {
      faviconElement.href =
        resolvedTheme === "dark"
          ? "/avatar/me-dark.jpg"
          : "/avatar/me-light.jpg";
    }
  }, [resolvedTheme]);

  return null;
}
