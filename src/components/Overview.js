function Overview() {
  return (
    <>
      <div className="m-8 rounded-2xl bg-white p-4 shadow">
        <div
          id="VerticalLineLeft"
          className="pb-4 text-xl font-semibold text-[#0e0e0e] 2xl:pb-4"
        >
          Thống kê
        </div>
        <div className="relative grid h-24 w-full grid-cols-4 grid-rows-none gap-12 mb-2">
          <a href="/" className="flex flex-col rounded-2xl shadow bg-green-600 p-1">
            <span className="self-center font-medium text-white">
              Tổng số học viên
            </span>
            <div
              href="/"
              className="flex flex-row justify-between px-6 py-2 text-4xl text-white"
            >
              <i class="bx bxs-face "></i>
              <span className="">240</span>
            </div>
          </a>
          <a href="/" className="flex flex-col rounded-2xl shadow bg-red-500 p-1">
            <span className="self-center font-medium text-white">
              Tổng số giảng viên
            </span>
            <div
              href="/"
              className="flex flex-row justify-between px-5 py-2 text-4xl text-white"
            >
              <i class="bx bxs-graduation "></i>
              <span className="">240</span>
            </div>
          </a>
          <a href="/" className="flex flex-col rounded-2xl shadow bg-blue-500 p-1">
            <span className="self-center font-medium text-white">
              Tổng số lớp học
            </span>
            <div
              href="/"
              className="flex flex-row justify-between px-7 py-2 text-4xl text-white"
            >
              <i class="bx bx-chalkboard "></i>
              <span className="">240</span>
            </div>
          </a>
          <a href="/" className="flex flex-col rounded-2xl shadow bg-orange-500 p-1">
            <span className="self-center font-medium text-white">
              Tổng số phụ huynh
            </span>
            <div
              href="/"
              className="flex flex-row justify-between px-5 py-2 text-4xl text-white"
            >
              <i class="bx bxs-user "></i>
              <span className="">240</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Overview;
