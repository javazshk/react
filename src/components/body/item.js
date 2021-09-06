const styles = {
  BodyMaintContainer: {
    display: 'flex',
    width: "100%",
  },
};
function Item(props) {
  return (
    <div>
      <h1>{props?.itemContent}</h1>
    </div>
  );
}
export default Item
