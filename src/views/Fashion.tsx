import ItemList from "../components/common/ItemList";

const Fashion = (): JSX.Element => {
  return (
    <>
      <ItemList
        category={["men's clothing", "women's clothing"]}
        title="패션"
      />
    </>
  );
};
export default Fashion;
