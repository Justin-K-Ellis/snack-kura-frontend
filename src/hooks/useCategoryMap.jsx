import useCategories from "./useCategories";

function useCategoryMap() {
  const categories = useCategories();
  let categoryMap = {};
  if (categories) {
    for (let cat of categories) {
      categoryMap[cat.name] = cat.id;
    }
  }

  return categoryMap;
}

export default useCategoryMap;
