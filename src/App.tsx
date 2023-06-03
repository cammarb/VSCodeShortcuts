import { Button, Input } from "@fluentui/react-components";
import { Search12Filled } from "@fluentui/react-icons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Input
          contentAfter={
            <Button
              appearance="transparent"
              icon={<Search12Filled />}
              size="small"
            />
          }
          placeholder="Search Shortcuts"
        />
      </main>
    </>
  );
}

export default App;
