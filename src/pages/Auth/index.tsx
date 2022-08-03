import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";

export function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <main>
      <Header />
      <section className="flex flex-1 items-center justify-center mt-[10vh]">
        {isLogin ? (
          <SignIn setIsLogin={setIsLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
      </section>
    </main>
  );
}
