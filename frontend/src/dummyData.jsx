import Pic from "./images/logo512.png";
export const products = [
  {
    name: "Product 1",
    company: "Company A",
    categories: "Category 1",
    ratings: 4,
    description: {
      statement: "Product 1 Description",
      size: "Medium",
      origin: "Country A",
    },
    price: 50.0,
    stock: 100,
    images: [{ Pic }, { Pic }],
    isTrending: true,
    isHotSeller: false,
    saleDiscount: 0,
  },
  {
    name: "Product 2",
    company: "Company B",
    categories: "Category 2",
    ratings: 3,
    description: {
      statement: "Product 2 Description",
      size: "Large",
      origin: "Country B",
    },
    price: 65.0,
    stock: 75,
    images: [{ Pic }],
    isTrending: false,
    isHotSeller: true,
    saleDiscount: 15,
  },
  {
    name: "Product 3",
    company: "Company C",
    categories: "Category 1",
    ratings: 4,
    description: {
      statement: "Product 3 Description",
      size: "Small",
      origin: "Country C",
    },
    price: 45.0,
    stock: 120,
    images: [{ Pic }],
    isTrending: true,
    isHotSeller: true,
    saleDiscount: 20,
  },
];

export const blogs = [
  {
    id: 1,
    image: "blog-image-1.jpg",
    title: "Blog Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "blog-image-2.jpg",
    title: "Blog Title 2",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    image: "blog-image-3.jpg",
    title: "Blog Title 3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
