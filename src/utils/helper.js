const resetCategoryFields = (event) => {
  event.target.name.value = "";
  event.target.slug.value = "";
  event.target.icon.value = "";
};

const resetPostFields = (event) => {
  event.target.title.value = "";
  event.target.content.value = "";
  event.target.amount.value = "";
  event.target.city.value = "";
  event.target.images.value = "";
};

const filterProducts = (items, category) => {
  if (!category) return items;

  let filteredItems;

  if (category === "همه") {
    return items;
  } else if (category === "کالای دیجیتال") {
    filteredItems = items.filter(
      (post) => post.category === "669f54e4458f43852d193df2"
    );
  } else if (category === "املاک") {
    filteredItems = items.filter(
      (post) => post.category === "66aa72f32cce10cb27e752b2"
    );
  } else if (category === "کالای خدماتی") {
    filteredItems = items.filter(
      (post) => post.category === "669f58b4458f43852d193e29"
    );
  } else if (category === "خودرو") {
    filteredItems = items.filter(
      (post) => post.category === "66aa72c92cce10cb27e752a0"
    );
  } else if (category === "سرگرمی") {
    filteredItems = items.filter(
      (post) => post.category === "66aa73032cce10cb27e752b8"
    );
  } else if (category === "وسایل شخصی") {
    filteredItems = items.filter(
      (post) => post.category === "66aa73382cce10cb27e752c4"
    );
  } else if (category === "خدمات") {
    filteredItems = items.filter(
      (post) => post.category === "66aa72e52cce10cb27e752ac"
    );
  }
  return filteredItems;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.target === "همه") {
    const { target, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("target");
  if (category) query.target = category;
  return query;
};

export {
  resetCategoryFields,
  resetPostFields,
  filterProducts,
  getInitialQuery,
  createQueryObject,
};
