import Heart from "@/assets/icons/heart.svg";

interface IcollectionItemTypes {
  ["URBAN"]: string;
  ["APRIL"]: string;
  ["BLACK"]: string;
}

export const collectionItemTypes: IcollectionItemTypes = {
  URBAN: "URBAN",
  APRIL: "APRIL",
  BLACK: "BLACK",
};

export const routesList = [
  {
    key: 1,
    text: "Home",
    path: "/",
    isActive: true,
  },
  {
    key: 2,
    text: "All Prducts",
    path: "/products",
    isActive: false,
  },
  {
    key: 3,
    text: "Category Details",
    path: "/category-details",
    isActive: false,
  },
  {
    key: 4,
    text: "Product Details",
    path: "/product-details",
    isActive: false,
  },
  {
    key: 5,
    text: "Creation",
    path: "/create",
    isActive: false,
  },
  {
    key: 6,
    text: "Construct",
    path: "/construct",
    isActive: false,
  },
  {
    key: 7,
    text: "Confirm Construct",
    path: "/confirm-construct",
    isActive: false,
  },
  {
    key: 8,
    text: "Help & FAQ",
    path: "/about",
    isActive: false,
  },
  {
    key: 9,
    text: "Special Offer",
    path: "/special-offer",
    isActive: false,
  },
  {
    key: 10,
    text: "Special Product",
    path: "/special-product",
    isActive: false,
  },
  {
    key: 11,
    text: "voting",
    path: "/voting",
    isActive: false,
  },
  {
    key: 12,
    text: "Voting All",
    path: "/voting-all",
    isActive: false,
  },
  {
    key: 13,
    text: "Cart",
    path: "/cart",
    isActive: false,
  },
  {
    key: 14,
    text: "Single Cart",
    path: "/single-cart",
    isActive: false,
  },
  {
    key: 15,
    text: "Shipping & Payment",
    path: "/shipping-and-payment",
    isActive: false,
  },
  {
    key: 16,
    text: "Receipt",
    path: "/receipt",
    isActive: false,
  },
  {
    key: 17,
    text: "404",
    path: "/404",
    isActive: false,
  },
  {
    key: 18,
    text: "Favorites",
    path: "/favorites",
    icon: (
      <span className="favourites-icon">
        <img src={Heart} alt="" />
        <span>2</span>
      </span>
    ),
    isActive: false,
  },
];
