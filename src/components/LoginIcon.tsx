import { LoginIconProps } from "../interfaces/Props";

export function LoginIcon({ icon, color }: LoginIconProps) {
  return (
    <div
      className={`${color} flex items-center justify-center py-[10px] px-10 rounded-[5px] cursor-pointer`}
    >
      {icon}
    </div>
  );
}
