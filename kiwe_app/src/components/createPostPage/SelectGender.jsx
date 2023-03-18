import React from 'react';

export default function SelectGender() {
  return (
    <div className="w-full px-4 relative">
      <h6 className=" font-bold">모집 성별</h6>
      <div className=" flex justify-around my-1 space-x-3">
        <button className="w-full border-black border-2 rounded-md">남</button>
        <button className="w-full border-black border-2 rounded-md">여</button>
        <button className="w-full border-black border-2 rounded-md">누구나</button>
      </div>
    </div>
  );
}
