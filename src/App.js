import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Home />
      </GridItem>
    </Grid>
  );
}

export default App;
