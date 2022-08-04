import { Eye, EyeClosed } from "phosphor-react";
import { useState } from "react";
import { InputProps } from "../interfaces/Props";

export function Input({
  type,
  inputName,
  inputPlaceholder,
  inputIcon,
  isInputLabel,
  inputLabel,
  inputPattern,
  setValue,
  inputValidate,
  inputMessage,
}: InputProps) {
  const [isEyeClosed, setIsEyeClosed] = useState(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleEye() {
    setIsEyeClosed(!isEyeClosed);
  }

  return (
    <main className="mt-[30px] relative">
      <label className="text-xl text-gray-600">{inputName}</label>
      <div
        className={`flex items-center justify-center border text-gray-600 border-gray-600 rounded-lg pl-[15px] gap-3 ${
          inputValidate
            ? "focus-within:border-green-600 focus-within:text-green-600"
            : "focus-within:border-red-400 focus-within:text-red-400"
        } transition-colors mt-[8px]`}
      >
        {inputIcon}
        <input
          type={
            inputName === "Senha" ? (isEyeClosed ? "password" : "text") : type
          }
          className="bg-transparent text-black-700 py-[15px] pr-[190px] placeholder:text-gray-600"
          placeholder={inputPlaceholder}
          pattern={inputPattern}
          onChange={handleChange}
        />
        {inputName === "Senha" ? (
          isEyeClosed ? (
            <EyeClosed
              size={22}
              className="absolute right-4 cursor-pointer"
              onClick={handleEye}
            />
          ) : (
            <Eye
              size={22}
              className="absolute right-4 cursor-pointer"
              onClick={handleEye}
            />
          )
        ) : (
          ""
        )}
      </div>
      <p className="text-red-400 absolute">{inputMessage}</p>
      {isInputLabel && (
        <label className="float-right text-gray-600 cursor-pointer">
          {inputLabel}
        </label>
      )}
    </main>
  );
}
