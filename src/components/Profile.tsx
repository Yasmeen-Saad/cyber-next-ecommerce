"use client";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export default function Profile({ session }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src={session.user?.image || "/default-avatar.png"}
            alt="Profile"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {session.user?.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{session.user?.email}</p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => signOut()}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-black hover:bg-white hover:text-black hover:border-black transition-colors duration-200 cursor-pointer"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}