import { createIcons, Search, ChevronDown, ShoppingBag, User, Headphones, Menu } from "lucide";
import "@fontsource/vazirmatn";
import "./style.css";


document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      Search: Search,
      ChevronDown: ChevronDown,
      User: User,
      Headphones: Headphones,
      ShoppingBag: ShoppingBag,
      Menu: Menu,
    },
  });
});
