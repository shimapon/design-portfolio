import Head from "next/head";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  isTop?: boolean;
};

export const Layout: React.FC<Props> = ({ children, isTop }) => {
  // 副作用フック（初期マウント時に実行）
  React.useEffect(() => {}, []);

  return (
    <div className="bg-white dark:bg-black ">
      <Head>
        <title>shimapon デザインポートフォリオ</title>
        <meta
          name="description"
          content="使いそうなデザインをまとめておいておくでち"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-black dark:text-gray-200 mx-4 min-h-screen">
        {!isTop && (
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 my-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </Link>
        )}
        {children}
      </main>

      <footer className="text-black dark:text-gray-200">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
};
