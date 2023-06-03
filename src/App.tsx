import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { Braces24Filled, Search12Filled } from "@fluentui/react-icons";
import Navbar from "./components/Navbar";
import { useState } from "react";
import jsonData from "./assets/shortcuts.json";

interface Shortcut {
  name: string;
  shortcut: string;
}

const filterData = (term: string): Shortcut[] => {
  const data = jsonData.mac.filter((item: Shortcut) => {
    return item.name.toLowerCase().includes(term.toLowerCase());
  });
  return data;
};

function App() {
  const [result, setResult] = useState<Shortcut[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setResult(filterData(term));
  };

  return (
    <>
      <Navbar />
      <main className="max-w-3xl flex flex-col mx-auto my-4">
        <div className="w-full p-4">
          <Input
            contentAfter={
              <Button
                appearance="transparent"
                icon={<Search12Filled />}
                size="small"
              />
            }
            placeholder="Search Shortcuts"
            value={searchTerm}
            onChange={handleSearch}
            size="large"
            className="w-full"
          />
        </div>
        {result.length > 0 ? (
          <Table className="w-full p-4">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Shortcut</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.shortcut}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Braces24Filled className="min-h-[60vh] w-auto p-4 mx-auto opacity-10" />
        )}
      </main>
    </>
  );
}

export default App;
