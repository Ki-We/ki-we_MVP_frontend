import React from 'react';
import Input from '../../components/UI/Input';
import SelectGender from '../../components/createPostPage/SelectGender';
import SelectImg from '../../components/createPostPage/SelectImg';
import SelectCategory from '../../components/createPostPage/SelectCategory';

export default function index() {
  return (
    <article className="flex justify-center w-full h-screen" style={{ height: '170vh' }}>
      <form className=" ">
        <Input title="기본정보">모임 제목을 입력해주세요</Input>
        <SelectImg />
        <Input height={5}>모임에 대해 설명해주세요</Input>
        <Input title="모임 날짜">모임의 일정을 등록해주세요</Input>
        <Input title="모집 마감일">모집마감일을 등록해주세요</Input>
        <Input title=" 장소">모임의 장소를 알려주세요</Input>
        <Input title="인당 예상비용">인당 예상비용을 입력해주세요</Input>
        <Input title="모집 인원" number>
          모임의 최대인원을 설정해주세요
        </Input>
        <SelectGender />
        <SelectCategory />
        <Input title="해시태그">해시태그는 띄어쓰기로 구분됩니다.</Input>
        <Input title="카카오톡 오픈채팅방 링크">운영진은 해당 채팅방에 필수로 참석합니다.</Input>
        <div className="mt-6 flex justify-center">
          <button className=" rounded-2xl shadow-lg font-black bg-myYellow w-30 h-10 mb-10">완료</button>
        </div>
      </form>
    </article>
  );
}
