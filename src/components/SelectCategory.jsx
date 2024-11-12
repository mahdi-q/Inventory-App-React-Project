import { useState } from "react";

function SelectCategory({ categories, productFormData, setProductFormData }) {
  const [isShown, setIsShown] = useState(false);

  const changeCategoryHandler = (e, category) => {
    e.preventDefault();
    setIsShown(false);
    setProductFormData({
      ...productFormData,
      category: category.id,
    });
  };

  return (
    <div>
      <label htmlFor="product-category" className="text-slate-300 block mb-1">
        Category
      </label>

      <div className="relative">
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsShown(true);
          }}
          className="w-full px-3 py-[6px] border border-slate-500 bg-transparent text-slate-400 rounded-xl focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:ring-offset-0 flex items-center justify-between z-10 relative"
        >
          <div id="selected-category">
            {productFormData.category
              ? categories.find((c) => c.id === productFormData.category).title
              : "select a category ..."}
          </div>
          {/* chevron down icon */}
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsShown(false);
          }}
          className={`${isShown || "hidden"} inset-0 fixed cursor-default`}
        ></button>

        <div
          className={`${
            isShown || "hidden"
          } bg-slate-600 mt-1 w-full rounded-md overflow-hidden absolute left-0 border border-slate-500`}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={(e) => changeCategoryHandler(e, category)}
              className="category-option text-white px-4 py-1 hover:bg-blue-600 flex items-center justify-between"
            >
              <span>{category.title}</span>
              <button className="edit-category-btn">{/* edit icon */}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SelectCategory;
