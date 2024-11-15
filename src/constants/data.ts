import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import burgerImg from "../assets/burger.jpg";
import pizzaImg from "../assets/pizza.png";
import potatoFriesImg from "../assets/fries.jpg";
import chickenFriesImg from "../assets/chicken_fires.jpg";

export const infos = [
  {
    icon: BsFillBoxSeamFill,
    title: "fast delivery",
    subTitle: "Within 30 minutes",
  },
  {
    icon: FaMedal,
    title: "absolute dining",
    subTitle: "Best buffet restaurant",
  },
  {
    icon: LuShoppingBag,
    title: "pickup delivery",
    subTitle: "Grab your food order",
  },
];

export const foodItems = [
  {
    foodImg: burgerImg,
    title: "vegetables burger",
    subTitle: "Barbecue Italian cuisine pizza",
  },
  {
    foodImg: pizzaImg,
    title: "Spacial Pizza",
    subTitle: "Barbecue Italian cuisine pizza",
  },
  {
    foodImg: potatoFriesImg,
    title: "Spacial French fries",
    subTitle: "Barbecue Italian cuisine",
  },
  {
    foodImg: chickenFriesImg,
    title: "Cuisine Chicken",
    subTitle: "Japanese Cuisine Chicken",
  },
];
