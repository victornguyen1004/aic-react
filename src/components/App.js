import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import HomeContent from "./pages-content/HomeContent";
import StudentContent from "./pages-content/StudentContent";
import TeacherContent from "./pages-content/TeacherContent";
import ClassesContent from "./pages-content/ClassesContent";
import ParentContent from "./pages-content/ParentContent";

function App() {
  return (
    <>
      <div className="relative flex h-full min-h-screen w-full flex-row bg-[#f8f8f8] font-sans text-lg">
        <Sidebar />
        <div className="relative ml-[240px] flex h-full w-full flex-col p-4 2xl:ml-[360px]">
          <Router>
            <Routes>
              <Route path="/" exact element={<HomeContent />} />
              <Route path="/student" element={<StudentContent />} />
              <Route path="/teacher" element={<TeacherContent />} />
              <Route path="/class" element={<ClassesContent />} />
              <Route path="/parent" element={<ParentContent />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
