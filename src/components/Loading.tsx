/* libs */
import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="mt-[40vh] flex items-center justify-center">
      <CircleNotch size={40} className="loading text-green-600" weight="bold" />
    </div>
  );
}
