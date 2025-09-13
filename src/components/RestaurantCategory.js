import ListItem from "./ListItem";

const RestaurantCategory = ({ category, isOpen, setShow }) => {
  const handleClick = () => {
    setShow();
  };

  return (
    <>
      {category?.itemCards?.length && (
        <div className="w-full md:w-6/12 bg-gray-50 mx-auto my-2 shadow-lg p-4 ">
          <div
            onClick={handleClick}
            className="flex justify-between cursor-pointer "
          >
            <span className="font-bold text-md ">
              {category?.title} ({category?.itemCards?.length})
            </span>
            {isOpen ? <span>🔻</span> : <span>🔺</span>}
          </div>
          {isOpen && <ListItem items={category.itemCards} />}
        </div>
      )}
    </>
  );
};
export default RestaurantCategory;
