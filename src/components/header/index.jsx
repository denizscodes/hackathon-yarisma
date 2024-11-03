import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav className="flex flex-row gap-x-2 w-full z-20    h-12 border-b place-content-center items-center bg-gray-200">
      {userLoggedIn ? (
        <>
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/login");
              });
            }}
            className="text-sm text-blue-600 underline"
          >
            Çıkış Yap
          </button>
        </>
      ) : (
        <>
          <Link className="text-sm text-blue-600 underline" to={"/login"}>
            Giriş Yap
          </Link>
          <Link className="text-sm text-blue-600 underline" to={"/register"}>
            Yeni Hesap Oluştur
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
