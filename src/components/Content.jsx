import Overview from "./Overview";
import Shortcut from "./Shortcut";
// import Add from "./Add";

function Content() {
  return (
    <>
      <div className="relative ml-[240px] flex p-4 h-full w-full flex-col 2xl:ml-[360px]">
        {/* Home page
      */}
      <Overview />
      <Shortcut />
        {/* Add page
        <Add />
         */}
      </div>
    </>
  );
}

export default Content;
