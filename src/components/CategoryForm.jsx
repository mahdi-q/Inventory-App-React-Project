import { useState } from "react";

function CategoryForm() {
  const [isShown, setIsShown] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();

    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };

    setCategories((prevState) => [...prevState, newCategory]);
    setCategoryFormData({
      title: "",
      description: "",
    });
  };

  return (
    <div className="mb-6">
      <button
        className={`${isShown && "hidden"} text-slate-500 font-bold text-lg`}
        onClick={() => setIsShown(true)}
      >
        Add New Category ?
      </button>

      <div className={`${isShown || "hidden"}`}>
        <h2 className="text-slate-300 font-bold text-xl mb-3">
          Add New Category
        </h2>

        <form className="flex flex-col bg-slate-700 rounded-xl p-4 gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="text-slate-300 block mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="category-title"
              className="bg-transparent border border-slate-500 text-slate-400 rounded-xl py-1"
              name="title"
              onChange={changeHandler}
              value={categoryFormData.title}
            />
          </div>

          <div>
            <label
              htmlFor="category-description"
              className="text-slate-300 block mb-1"
            >
              Description
            </label>
            <textarea
              id="category-description"
              className="bg-transparent border border-slate-500 text-slate-400 rounded-xl w-full py-1"
              name="description"
              onChange={changeHandler}
              value={categoryFormData.description}
            ></textarea>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 text-slate-300 border border-slate-400 rounded-xl py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsShown(false);
              }}
            >
              Cancel
            </button>

            <button
              onClick={addNewCategoryHandler}
              className="flex-1 text-slate-200 bg-slate-500 border border-slate-500 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CategoryForm;
