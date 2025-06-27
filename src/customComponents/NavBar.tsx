import { useEffect, useRef, useState } from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
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
        setVisible(true);
      } else if (window.scrollY > lastScrollY.current) {
        setVisible(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu
      className={`fixed top-0 left-0 w-screen bg-[#0a1124] text-white z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex items-center justify-center h-15 w-screen px-6">
        <img
          src={logo}
          alt="Logo Sentinelas"
          className="h-8"
          style={{ width: "auto" }}
        />
        <AuthButtons
          className="hidden sm:flex"
          buttonClassName="sm:text-base"
        />
      </div>
    </NavigationMenu>
  );
}
