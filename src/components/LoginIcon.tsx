interface Props {
  icon: React.ReactNode;
  color: string;
}

export function LoginIcon({ icon, color }: Props) {
  return (
    <div
      className={`${color} flex items-center justify-center py-[10px] px-10 rounded-[5px] cursor-pointer`}
    >
      {icon}
    </div>
  );
}
