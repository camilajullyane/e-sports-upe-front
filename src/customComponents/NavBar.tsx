import React, { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo-sentinelas.png";

export function NavBar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        setVisible(true); // rolando para cima, mostra
      } else if (window.scrollY > lastScrollY.current) {
        setVisible(false); // rolando para baixo, esconde
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavigationMenu
      className={`fixed top-0 left-0 w-screen bg-[#0a1124] text-white z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-12 w-full max-w-screen px-6">
        <img
          src={logo}
          alt="Logo Sentinelas"
          className="h-8"
          style={{ width: "auto" }}
        />
        <NavigationMenuList className="flex gap-8 h-12 items-center w-screen">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="cursor-pointer text-white text-base font-semibold"
              onClick={() => scrollToSection("beneficios")}
            >
              <span>Benefícios</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="cursor-pointer text-white text-base font-semibold"
              onClick={() => scrollToSection("jogos")}
            >
              <span>Jogos</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="cursor-pointer text-white text-base font-semibold"
              onClick={() => scrollToSection("campeonatos")}
            >
              <span>Campeonatos</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}