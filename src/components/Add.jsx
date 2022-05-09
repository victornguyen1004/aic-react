import VerticalLineLeft from "./ContentTitle";

function Add() {
  return (
    <>
      <div
        className="m-8
      rounded-2xl bg-white p-8 shadow"
      >
        <VerticalLineLeft desc="Thêm học viên" />
        <form className="flex flex-col" action="">
          <div className="flex flex-row py-4">
            <label htmlFor="parentName" className="w-[300px]">
              Họ và tên phụ huynh<marked className="text-red-500">*</marked>
            </label>
            <input
              id="parentName"
              type="text"
              className="w-full rounded-md border-[0.5px] border-[#0e0e0e] px-4 leading-10 focus:outline-none"
            />
          </div>
          <div className="flex flex-row py-4">
            <label htmlFor="parentEmail" className="w-[300px]">
              Địa chỉ email<marked className="text-red-500">*</marked>
            </label>
            <input
              id="parentEmail"
              type="text"
              className="w-full rounded-md border-[0.5px] border-[#0e0e0e] px-4 leading-10 focus:outline-none"
            />
          </div>
          <div className="flex flex-row py-4">
            <label htmlFor="parentPhone" className="w-[300px]">
              Số điện thoại<marked className="text-red-500">*</marked>
            </label>
            <input
              id="parentPhone"
              type="text"
              className="px48 w-full rounded-md border-[0.5px] border-[#0e0e0e] leading-10 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
