function Shortcut() {
  return (
    <>
      <div className="m-8 rounded-2xl bg-white p-4 shadow">
        <div
          id="VerticalLineLeft"
          className="pb-4 text-xl font-semibold text-[#0e0e0e] 2xl:pb-4"
        >
          Phím tắt
        </div>
        <div className="mb-2 grid w-full grid-cols-4 grid-rows-3 gap-x-8 gap-y-4 text-white">
          {/* Start Student Session */}
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-2 shadow"
          >
            <i class="bx bx-user-plus pr-2 text-4xl"></i>
            <span className="">Thêm</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-2 shadow"
          >
            <i class="bx bx-user-x pr-2 text-4xl"></i>
            <span className="">Xóa</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-2 shadow"
          >
            <i class="bx bxs-user-detail pr-2 text-4xl"></i>
            <span className="">Chỉnh sửa</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-2 shadow"
          >
            <i class="bx bx-credit-card pr-2 text-4xl"></i>
            <span className="">Học phí</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-list-ul pr-2 text-4xl"></i>
            <span className="">Xem danh sách</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-printer pr-2 text-4xl"></i>
            <span className="">In danh sách</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-search-alt-2 pr-2 text-4xl"></i>
            <span className="">Truy vấn</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-envelope pr-2 text-4xl"></i>
            <span className="">Gửi mail</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-table pr-2 text-4xl"></i>
            <span className="">Xuất lịch học</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-message-alt-detail pr-2 text-4xl"></i>
            <span className="">Gửi thông báo</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            <i class="bx bx-money pr-2 text-4xl"></i>
            <span className="">Doanh thu</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-2xl bg-[#333333] p-4 shadow"
          >
            .
          </a>
        </div>
      </div>
    </>
  );
}

export default Shortcut;
