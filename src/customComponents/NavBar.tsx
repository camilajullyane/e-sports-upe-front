import React, { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo-sentinelas.png";
import { useNavigate } from "react-router";
import { AuthButtons } from "./AuthButtons";

export function NavBar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

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
      <div className="relative flex items-center h-15 w-screen px-6">
        {/* Logo à esquerda */}
        <img
          src={logo}
          alt="Logo Sentinelas"
          className="h-8"
          style={{ width: "auto" }}
        />
  
        {/* Menu centralizado */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex items-center">
          <NavigationMenuList className="flex gap-8 h-12 items-center">
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
        <AuthButtons />
      </div>
    </NavigationMenu>
  );
}