import { useState, useEffect } from "react";
import VerticalLineLeft from "../ContentTitle";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function StudentAdd() {
  return (
    <>
      <div className="mx-8 mt-8 rounded-2xl bg-white p-8 text-base shadow">
        <VerticalLineLeft desc="Thêm học viên" />
        <form className="flex flex-col" action="">
          {/* Student Name input */}
          <div className="flex flex-row items-center py-4">
            <label htmlFor="name" className="w-[220px]">
              Họ và tên học viên<marked className="text-red-500">*</marked>
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 leading-10 focus:outline-none"
            />
          </div>

          {/* Student Birthday + Gender Input */}
          <div className="flex flex-row items-center py-4">
            {/* Student Birthday input */}
            <div className="flex w-full flex-row items-center mr-12">
              <label htmlFor="birthday" className="w-[220px]">
                Ngày sinh<marked className="text-red-500">*</marked>
              </label>
              <input
                id="birthday"
                type="date"
                className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 text-base leading-10 focus:outline-none"
              />
            </div>
            {/* Gender radio input */}
            <div className="flex flex-row items-center">
              <label htmlFor="gender" className="whitespace-nowrap pr-4">
                Giới tính<marked className="text-red-500">*</marked>
              </label>
              <select
                id="gender"
                name="gender"
                className="rounded-xl border border-[#cccccc] p-2 py-2.5 focus:outline-none"
              >
                <option value="none" selected>
                  Chọn
                </option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>
          </div>

          {/* Student PhoneNumber Input */}
          <div className="flex flex-row items-center py-4">
            <label htmlFor="phoneNumber" className="w-[220px]">
              Số điện thoại<marked className="text-red-500">*</marked>
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 text-base leading-10 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentAdd;
