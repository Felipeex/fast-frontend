/* interfaces */
import { LoginIconProps } from "../interfaces/Props";

export function LoginIcon({ icon, color, click }: LoginIconProps) {
  return (
    <div
      onClick={click}
      className={`${color} flex items-center justify-center py-[10px] px-10 rounded-[5px] cursor-pointer shadow-sm`}
    >
      {icon}
    </div>
  );
}
