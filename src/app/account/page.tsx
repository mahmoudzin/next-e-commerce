"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useContextApp } from "../store/GlobalContext";

export default function login() {
  const { userLogin } = useContextApp();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Accessing input values using the formRef
    if (formRef?.current) {
      const formData = new FormData(formRef?.current);
      const username = formData.get("username");
      const password = formData.get("password");

      userLogin({ username, password });
    }

    // Reset the form
    router.push("/");
    formRef.current?.reset();
  };

  return (
    <div
      className="flex items-center"
      style={{
        minHeight: "calc(100vh - (90px + 32px))",
      }}
    >
      <div className="w-96 mx-auto min-h-fit p-4 bg-white shadow">
        <h1 className="mb-6">Login</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={`block w-full outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary`}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={`block w-full outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary`}
          />

          <button className="" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
