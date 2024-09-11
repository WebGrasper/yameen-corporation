import NavigationMenu from "@/containers/navigation-menu/navigation-menu";
import { FunctionComponent } from "react";


// const fetchData = async () => {
//   let categories = [
//     {
//       categoryID: "1",
//       name: "Metal Arts",
//       subCategories: [
//         {
//           subCategoryID: "1",
//           name: "Black Metal Wall Art",
//           categoryID: "1",
//         },
//         {
//           subCategoryID: "2",
//           name: "Outdoor Metal Wall Art",
//           categoryID: "1",
//         },
//         {
//           subCategoryID: "3",
//           name: "Large Metal Wall Art",
//           categoryID: "1",
//         },
//         {
//           subCategoryID: "4",
//           name: "Abstract Metal Wall Art",
//           categoryID: "1",
//         },
//         {
//           subCategoryID: "5",
//           name: "Coastal Metal Wall Art",
//           categoryID: "1",
//         },
//         { subCategoryID: "6", name: "Metal Wall Art", categoryID: "1" },
//         {
//           subCategoryID: "7",
//           name: "Abstract Metal Tree Wall Art",
//           categoryID: "1",
//         },
//       ],
//     },
//     {
//       categoryID: "2",
//       name: "Home Decor",
//       subCategories: [
//         { subCategoryID: "8", name: "Baskets", categoryID: "2" },
//         { subCategoryID: "9", name: "Vases", categoryID: "2" },
//         { subCategoryID: "10", name: "Wall Hangings", categoryID: "2" },
//       ],
//     },
//   ];

//   return categories;
// };

/* Navbar component.*/
const Navbar: FunctionComponent = async () => {
  // let categories = await fetchData();

  let res = await fetch("https://ecommerce-backend-pied-seven.vercel.app/api/category/getcategory");
  let {categories} = await res.json();

  

  return (
    <NavigationMenu categories={categories}/>
  );
};

export default Navbar;
