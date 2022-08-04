import { CircleNotch } from "phosphor-react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CircleNotch size={40} className="loading text-green-600" weight="bold" />
    </div>
  );
}
