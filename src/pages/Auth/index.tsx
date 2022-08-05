import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../../components/Header";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";

export function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.search.split("=")[1] === "signIn"
      ? setIsLogin(true)
      : setIsLogin(false);
  }, [location]);

  return (
    <main className="pb-5 overflow-hidden">
      <Header />
      <section className="w-screen min-h-[85vh] flex items-center justify-center mt-5">
        {isLogin ? (
          <SignIn setIsLogin={setIsLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
      </section>
    </main>
  );
}
