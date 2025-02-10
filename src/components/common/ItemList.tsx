import { useRecoilValueLoadable } from "recoil";
import { productsItem } from "../../store/products";
import { Link } from "react-router-dom";

interface ItemCategoryProps {
  category: string[];
  title: string;
}

const ItemList = ({ category, title }: ItemCategoryProps): JSX.Element => {
  const loaddata = useRecoilValueLoadable(productsItem);

  if (loaddata.state === "loading") {
    const skeletonCount = Math.max(category.length * 4, 8);
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array(skeletonCount)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (loaddata.state === "hasError") {
    return <div>Error : {(loaddata.contents as Error).message}</div>;
  }

  if (loaddata.state === "hasValue") {
    const products = loaddata.contents;

    const filteredItems = products.filter((item) =>
      category.includes(item.category)
    );

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center m-10">{title}</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredItems.map((item) => (
              <Link to="" key={item.id} className="group">
                <img
                  src={item.image}
                  className="aspect-square w-full rounded-lg object-contain group-hover:opacity-75 xl:aspect-7/8 p-4 border-2"
                />
                <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {item.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div>Unexpected state</div>;
};

export default ItemList;
