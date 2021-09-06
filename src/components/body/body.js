import Item from "./item";
import { Container } from "@material-ui/core";

const styles = {
  BodyMaintContainer: {
    display: "flex",
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
};

function Body() {
  return (
    <Container maxWidth="md">
      <div style={styles.BodyMaintContainer}>
        <Item itemContent={`This is Home Page`} />
      </div>
    </Container>
  );
}
export default Body;
