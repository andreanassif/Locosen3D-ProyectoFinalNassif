class ProductDto {
  constructor(products) {
    (this.id = products._id),
      (this.title = products.title),
      (this.price = products.price),
      (this.thumbnail = products.thumbnail),
      (this.stock = products.stock),
      (this.category = products.category);
  }
}

export const productDto = (products) => {
  if (Array.isArray(products)) {
    const newData = products.map((product) => new ProductDto(product));
    return newData;
  } else {
    const newData = new ProductDto(products);
    return newData;
  }
};