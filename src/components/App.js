import Sidebar from "./Sidebar";
import Content from "./Content";

function App() {
  return (
    <>
      <div className="relative flex h-full min-h-screen w-screen bg-[#f8f8f8] font-sans text-lg">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
