function ProductsLoader() {
  return [0, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <div
      key={item}
      onClick={() => {
        navigate(`/product/${item.id}`);
        scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="group animate-pulse"
    >
      <div className="aspect-square w-full rounded-lg bg-gray-400 object-cover group-hover:opacity-75 xl:aspect-7/8" />
      <p className="w-36 h-4 rounded-xl bg-gray-400 my-4"></p>
      <p className="w-12 h-4 rounded-xl bg-gray-400 my-4"></p>
    </div>
  ));
}

export default ProductsLoader;
