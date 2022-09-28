export const reqAPI = async () => {
  const url = `https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory`;
  const response = await fetch(url, {
    method: "GET",
    headers: { secretKey: "1DIPIkKeq8" },
  });
  const results = await response.json();
  const arrayRandom = results.map((elem) => {
    const object = {
      key: elem.id,
      title: elem.title,
      product_type: elem.product_type,
      image: elem.image.src,
      quantitySold: elem.quantitySold,
      variants: elem.variants,
    };
    return object;
  });
  return arrayRandom;
};

