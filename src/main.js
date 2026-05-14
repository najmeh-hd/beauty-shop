import {
  createIcons,
  Search,
  ChevronDown,
  ShoppingCart,
  User,
  Phone,
  Menu,
} from "lucide";
import "@fontsource/vazirmatn";
import "./style.css";


document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      Search: Search,
      ChevronDown: ChevronDown,
      User: User,
      Phone: Phone,
      ShoppingCart: ShoppingCart,
      Menu: Menu,
    },
  });
});
