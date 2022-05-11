import IMG_1 from "../assets/images/ProductCurrent/img1.webp";
import IMG_1_thumb from "../assets/images/ProductCurrent/img1_thumb.webp";
import IMG_2 from "../assets/images/ProductCurrent/img2.webp";
import IMG_2_thumb from "../assets/images/ProductCurrent/img2_thumb.webp";
import IMG_3 from "../assets/images/ProductCurrent/img3.webp";
import IMG_3_thumb from "../assets/images/ProductCurrent/img3_thumb.webp";
import IMG_4 from "../assets/images/ProductCurrent/img4.webp";
import IMG_4_thumb from "../assets/images/ProductCurrent/img4_thumb.webp";
import IMG_5 from "../assets/images/ProductCurrent/img5.webp";
import IMG_5_thumb from "../assets/images/ProductCurrent/img5_thumb.webp";

export const productCurrentImages = [
  {
    id: 0,
    name: "вид на продукта",
    img: IMG_1,
    thumb: IMG_1_thumb,
  },
  {
    id: 1,
    name: "вид на продукта",
    img: IMG_2,
    thumb: IMG_2_thumb,
  },
  {
    id: 2,
    name: "вид на продукта",
    img: IMG_3,
    thumb: IMG_3_thumb,
  },
  {
    id: 3,
    name: "вид на продукта",
    img: IMG_4,
    thumb: IMG_4_thumb,
  },
  {
    id: 4,
    name: "вид на продукта",
    img: IMG_5,
    thumb: IMG_5_thumb,
  },
];

export const productCurrent = {
  id: 0,
  name: "Пижама для девочек",
  article: "Арт. 02765/46",
  reviews: 14,
  stars: 4,
  price: 1500,
  discount: [
    {
      id: 0,
      name: "скидка",
      value: 36,
    },
    { id: 1, name: "акция", value: 20 },
  ],
  sizes: ["xs", "sm", "m", "xxl"],
};

export const productLinks = [
  { id: 0, name: "Описание товара", href: "#", icon: "closes" },
  { id: 1, name: "Доставка и возврат", href: "#", icon: "clock" },
  { id: 2, name: "Способы оплаты", href: "#", icon: "pay" },
];
