import React from 'react';
import Input from '../../components/UI/Input';

export default function EditPage() {
  return (
    <article>
      <h1 className="ml-6 font-black text-2xl">프로필 편집</h1>
      <form className="mt-5">
        <h4 className="ml-6 font-bold">프로필 이미지</h4>
        <div className="flex justify-center flex-col text-center items-center py-5 space-y-3">
          <div className="relative">
            <img className="w-24 h-24 rounded-full bg-slate-400" />
            <div className="text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              (프로필 사진)
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row">
          <div className="gird-flow-col">
            <Input title="닉네임">닉네임입력</Input>
            <button>test</button>
          </div>
          <Input title="닉네임">닉네임입력</Input>
          <Input title="닉네임">닉네임입력</Input>
          <Input title="닉네임">닉네임입력</Input>
        </div>
      </form>
    </article>
  );
}
