import React from 'react';
import PropTypes from 'prop-types';

/**
 * kiwe 전용 인풋
 * @param {String} type - default는 Text; html input태그에 propertie중 하나 작성하면됨
 * @param {String} title - default는 없음; input태그 위에 title로 해당 input의 주제를 작성하면됨
 * @param {Number} height - default는 3; Input컴포넌트의 y축 padding을 조절하는것
 * @param {boolean} number - default는 false; 숫자와 관련된 Input컴포넌트로 증감 버튼이 생김
 * @param {String} children  - default는 없음 Input컴포넌트의 placeholder부분
 * @param {String} imgPath - default는 없음 Input컴포넌트 내부에 아이콘을 넣을때 아이콘의 path를 넣어주면됨 (미구현)
 */
export default function Input(props) {
  return (
    <div className=" w-full px-4 relative">
      <h6 className=" font-bold">{props.title}</h6>
      <input
        type={props.type}
        className={`border-2 rounded-md font-extrabold border-black px-2 w-full my-1 py-${props.height}`}
        placeholder={props.children}
      />
      {props.number && (
        <>
          <button className="absolute  right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <button className="absolute bottom-0.5 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  height: 3,
};

Input.propsTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.node.isRequired,
};
