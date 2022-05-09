import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content";

function App() {
  return (
    <>
      <div className="relative flex flex-row h-full min-h-screen w-full bg-[#f8f8f8] font-sans text-lg">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
