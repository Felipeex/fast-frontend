interface Props {
  inputName: string;
  inputPlaceholder: string;
  inputIcon: React.ReactNode;
  inputLabel?: string;
  isInputLabel?: boolean;
}

export function Input({
  inputName,
  inputPlaceholder,
  inputIcon,
  isInputLabel,
  inputLabel,
}: Props) {
  return (
    <main className="mt-[30px]">
      <label className="text-xl text-gray-600">{inputName}</label>
      <div className="flex items-center justify-center border text-gray-600 border-gray-600 rounded-lg pl-[15px] gap-3 focus-within:border-green-600 focus-within:text-green-600 transition-colors mt-[8px]">
        {inputIcon}
        <input
          className="bg-transparent text-black-700 py-[15px] pr-[190px] placeholder:text-gray-600"
          placeholder={inputPlaceholder}
        />
      </div>
      {isInputLabel && (
        <label className="float-right text-gray-600 cursor-pointer">
          {inputLabel}
        </label>
      )}
    </main>
  );
}
