import React from 'react';
import Item from '../../components/profilePage/Item';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <article className="flex justify-center w-full" style={{ height: '170vh' }}>
      <div className=" shadow-inner w-full ">
        <div className="flex justify-center flex-col text-center items-center py-5 space-y-3">
          <div className="relative">
            <img className="w-30 h-30 rounded-full bg-slate-400" />
            <div className="text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              (프로필 사진)
            </div>
          </div>
          <h3 className="font-bold">{'닉네임'}</h3>
          <h4 className="font-semibold">{'성별 나이'}</h4>
          <h4 className="font-semibold">{'소개(바이오)'}</h4>
          <Link
            to="/start/profile/edit"
            className=" shadow-xl rounded-xl w-25 font-semibold text-zinc-500 px-2  bg-slate-200"
          >
            프로필 편집
          </Link>
        </div>
        <div className="flex-col">
          <Item path="">참여목록</Item>
          <Item path="">작성게시물</Item>
          <Item path="">작성 Q&A / 후기</Item>
          <Item path="">설정</Item>
          <Item path="">DM으로 문의하기</Item>
        </div>
      </div>
    </article>
  );
}
