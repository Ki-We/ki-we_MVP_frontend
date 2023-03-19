import React, { useState } from 'react';

export default function SelectImg() {
  const [previewImage, setPreviewImage] = useState(null);

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
  }
  return (
    <div className="px-4 relative my-1">
      {previewImage ? (
        <img src={previewImage} alt="미리보기 이미지" className="object-cover w-full h-full" />
      ) : (
        <label
          htmlFor="image"
          className="flex justify-center items-center px-30 py-30 border-black border-2 rounded-md text-gray-400"
        >
          <input
            className="border-2 rounded-md border-black px-2 py-1.5 w-full my-1 hidden"
            type="file"
            id="image"
            accept="image/*"
            name="image"
            placeholder="대표이미지를 업로드해주세요 (파일크기 최대 10MB)"
            onChange={handleFileInputChange}
            size="10MB"
          />
          <span className=" font-extrabold text-sm">대표 이미지를 업로드해주세요 (파일크기 최대 10MB)</span>
        </label>
      )}
    </div>
  );
}
