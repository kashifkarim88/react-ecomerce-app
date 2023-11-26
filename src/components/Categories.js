import React from "react";
import "../css/Categories.css";
import CategoryIcon from "@mui/icons-material/Category";
import FactoryIcon from "@mui/icons-material/Factory";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Face3Icon from "@mui/icons-material/Face3";
import StarIcon from "@mui/icons-material/Star";

function Categories() {
  const categories = [
    "Product Categories",
    "Brands or Manufacturers",
    "Seasonal or Occasion-Based Categories",
    "Customer Demographics or Interests",
    "Best Sellers or Featured Products",
  ];

  const catIcons = [
    <CategoryIcon className="cat-icon catgegory"/>,
    <FactoryIcon className="cat-icon factory"/>,
    <CalendarMonthIcon className="cat-icon seasional"/>,
    <Face3Icon className="cat-icon customer"/>,
    <StarIcon className="cat-icon star"/>,
  ];

  const descriptions = [
    "Find what you need, from smartphones to accessories, neatly organized by type for effortless shopping and quick product discovery.",
    "Explore our selection by renowned brands, making it easy to find products that match your trusted preferences.",
    "Discover curated collections tailored to every season and special occasion, making shopping for events a breeze.",
    "Shop according to your style with categories for men, women, kids, or specific interests like athletic wear.",
    "Explore trending and top-rated items in our Featured Products section, showcasing the best in-demand products.",
  ];

  return (
    <div className="categories-outer">
      <h1 className="ctg-heading">Categories</h1>
      <div className="categories-flex">
        {categories.map((data, index) => (
          <div className="catgories-inner" key={index}>
            {catIcons[index]}
            <p className="title">{data}</p>
            <p className="descriptions">{descriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
