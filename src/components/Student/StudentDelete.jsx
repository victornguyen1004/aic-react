import { useState, useEffect } from "react";
import VerticalLineLeft from "../ContentTitle";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function StudentDelete() {
  return (
    <>
      <div className="mx-8 mt-8 rounded-2xl bg-white p-8 shadow">
        <VerticalLineLeft desc="Xóa học viên" />
        
      </div>
    </>
  );
}

export default StudentDelete;
