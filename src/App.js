import "./App.css";
import { Container, CssBaseline } from "@material-ui/core";

import GridLayout from "./GridLayout";

function App() {
  return (
    <div className="App">
    
      <CssBaseline />

      <Container>
        <main>
          <GridLayout></GridLayout>
        </main>
      </Container>
    </div>
  );
}

export default App;
