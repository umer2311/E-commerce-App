import Pic from "./images/logo512.png"
import Pic2 from "../../public/pic.png"
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
        images: [{ Pic }, { Pic2 }],
        isTrending: true,
        isHotSeller: false,
        saleDiscount: 0,
        sold:31
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
        images: [{Pic},{Pic2}],
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

