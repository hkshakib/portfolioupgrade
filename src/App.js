import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="nav" bg="blue">
        Navbar
      </GridItem>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
