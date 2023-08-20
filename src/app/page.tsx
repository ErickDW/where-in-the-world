
import { flagsInterface } from "@/utils/interfaces";
import { Home } from "./home/page";
import { getRandomSubset, getSubset } from "@/utils/utils";

async function loadFlags() {
  const res = await fetch(`http://localhost:3000/api/flags`);
  const data: flagsInterface[] = await res.json();
  return data;
}

async function App() {
  const allFlags: flagsInterface[] = await loadFlags();

  return (
    <Home data={allFlags} />
  );
}

export default App;