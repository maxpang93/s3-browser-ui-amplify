import './App.css'
import { StorageBrowser } from "./StorageBrowser";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>S3 Browser</h1>
      <StorageBrowser />
    </div>
  );
}

export default App;