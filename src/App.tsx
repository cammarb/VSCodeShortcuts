import { Input } from "@fluentui/react-components";
import { Search12Filled } from "@fluentui/react-icons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Input contentAfter={<Search12Filled />} />
      </main>
    </>
  );
}

export default App;
