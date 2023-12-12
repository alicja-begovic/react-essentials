import { Fragment } from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
      </main>
    </Fragment>
  );
}

export default App;
