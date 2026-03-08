"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeAvatarProps {
  name: string;
  className?: string;
}

export function ThemeAvatar({ name, className }: ThemeAvatarProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : "light";

  const getAvatarSrc = () => {
    return currentTheme === "dark" ? "/avatar/me-dark.jpg" : "/avatar/me-light.jpg";
  };

  return (
    <Avatar className={className}>
      <AvatarImage alt={name} src={getAvatarSrc()} />
    </Avatar>
  );
}
