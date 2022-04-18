import Overview from "./Overview";
import Shortcut from "./Shortcut";

function Content() {
  return (
    <>
      <div className="relative ml-[240px] 2xl:ml-[360px] w-full">
        <Overview />
        <Shortcut />
      </div>
    </>
  );
}

export default Content;
