import data from "./card.json";

import { Card } from "./component/Card";
function App() {
  return <Card {...data} />;
}

export default App;
