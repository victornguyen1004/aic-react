import Logo from "../img/logo.png";

const dev = {
  name: "victorwebdev",
  email: "2012394@dlu.edu.vn",
  socialMedia: "https://facebook.com/nqv.ilb/",
};

function Sidebar() {
  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 h-full w-[240px] rounded-r-3xl bg-[#333333] text-[#FBFBFB] shadow-lg 2xl:w-[360px]">
        <div className="flex h-full w-full flex-col justify-between">
          <a
            href="/"
            className="flex w-full flex-col items-center justify-center ring-0"
          >
            <img
              src={Logo}
              alt=""
              className="object-cover px-8 pt-8 2xl:px-16 2xl:pt-16"
            />
            <span className="text-sm font-bold 2xl:text-lg ">
              DATABASE MANAGEMENT
            </span>
          </a>
          <div className="flex w-full justify-center">
            <ul id="navlist" className="w-full px-4 2xl:text-3xl">
              <li className="w-full">
                <a
                  href="/"
                  className="relative flex items-center overflow-hidden rounded-xl py-1 pl-4 leading-10 duration-200 hover:bg-[#f8f8f8] hover:text-black 2xl:py-4 2xl:pl-8"
                >
                  <i class="bx bxs-dashboard pr-8 text-3xl 2xl:pr-12 2xl:text-5xl"></i>
                  <span className="font-semibold">TỔNG QUAN</span>
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/"
                  className="relative flex items-center overflow-hidden rounded-xl py-1 pl-4 leading-10 duration-200 hover:bg-[#f8f8f8] hover:text-black 2xl:py-4 2xl:pl-8"
                >
                  <i class="bx bxs-face pr-8 text-3xl 2xl:pr-12 2xl:text-5xl"></i>
                  <span className="font-semibold">HỌC VIÊN</span>
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/"
                  className="relative flex items-center overflow-hidden rounded-xl py-1 pl-4 leading-10 duration-200 hover:bg-[#f8f8f8] hover:text-black 2xl:py-4 2xl:pl-8"
                >
                  <i class="bx bxs-graduation pr-8 text-3xl 2xl:pr-12 2xl:text-5xl"></i>
                  <span className="font-semibold">GIẢNG VIÊN</span>
                </a>
              </li>
              <li className="w-full">
                <a
                  href="/"
                  className="relative flex items-center overflow-hidden rounded-xl py-1 pl-4 leading-10 duration-200 hover:bg-[#f8f8f8] hover:text-black 2xl:py-4 2xl:pl-8"
                >
                  <i class="bx bx-chalkboard pr-8 text-3xl 2xl:pr-12 2xl:text-5xl"></i>
                  <span className="font-semibold">LỚP HỌC</span>
                </a>
              </li>
            </ul>
          </div>
          <span className="w-full pb-4 text-center font-mono text-xs 2xl:text-base">
            made by{" "}
            <a
              href={dev.socialMedia}
              className="duration-500 hover:text-lime-500"
            >
              victorwebdev
            </a>
            .
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
