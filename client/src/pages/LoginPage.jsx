import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col py-16">
        <div className="flex flex-col container m-auto px-6 text-gray-500 md:px-12 xl:px-40 rounded-full">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl mt-40">
              <div className="p-6 sm:p-16 ">
                <div className="space-y-4">
                  <h2 className="mb-8 text-2xl text-black font-bold justify-center text-center">
                    Sign in With your Google Account.
                  </h2>
                </div>
                <div className="mt-16 grid space-y-4 ">
                  <button className=" rounded-full">
                    <div
                      id="google-login"
                      className="relative flex items-center space-x-4 justify-center "
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
