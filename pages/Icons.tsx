import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "components/Layout";
import UseTech from "components/UseTech";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Icons: React.FC = () => {
  const classes = useStyles();
  const [copySuccess, setCopySuccess] = useState("");

  // your function to copy here

  const copyToClipBoard = async (copyMe: string, target: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied! " + target);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };
  return (
    <Layout>
      <h1 className="text-3xl font-extrabold">Buttons</h1>

      <UseTech
        techName="tailwindCSS"
        srcURL="https://github.com/shimapon/design-portfolio/blob/main/pages/Icons.tsx"
      />
      <div className="w-min">
        <h2 className="text-center text-2xl p-2">abroller</h2>
        <div className="p-5 border-2 border-white border-opacity-50 rounded bg-gray-800 w-min mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 17"
            className="dark:text-white text-gray-900 h-8 w-8"
          >
            <path
              fill="currentColor"
              d="M13.565 17a1 1 0 01-1-1V1a1 1 0 011-1h.93a1 1 0 011 1v15a1 1 0 01-1 1zm-4.059 0a1 1 0 01-1-1V1a1 1 0 011-1h.93a1 1 0 011 1v15a1 1 0 01-1 1zm10.059-6.954a1 1 0 01-.818-.425H16.2V7.38h2.576a1 1 0 01.79-.386H23a1 1 0 011 1v1.052a1 1 0 01-1 1zM1 10.046a1 1 0 01-1-1V7.994a1 1 0 011-1h3.435a1 1 0 01.79.386H7.8v2.241H5.253a1 1 0 01-.818.425z"
            ></path>
          </svg>
        </div>

        <div>
          <div className="flex gap-1 my-1">
            <button
              onClick={() =>
                copyToClipBoard(
                  `        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 17"
                  className="dark:text-white text-gray-900  h-8 w-8"
                >
                  <path
                    fill="currentColor"
                    d="M13.565 17a1 1 0 01-1-1V1a1 1 0 011-1h.93a1 1 0 011 1v15a1 1 0 01-1 1zm-4.059 0a1 1 0 01-1-1V1a1 1 0 011-1h.93a1 1 0 011 1v15a1 1 0 01-1 1zm10.059-6.954a1 1 0 01-.818-.425H16.2V7.38h2.576a1 1 0 01.79-.386H23a1 1 0 011 1v1.052a1 1 0 01-1 1zM1 10.046a1 1 0 01-1-1V7.994a1 1 0 011-1h3.435a1 1 0 01.79.386H7.8v2.241H5.253a1 1 0 01-.818.425z"
                  ></path>
                </svg>`,
                  "JSX"
                )
              }
              className="p-2 rounded bg-primary text-primary-light bg-opacity-80 hover:bg-opacity-100"
            >
              Copy JSX
            </button>
            <button
              onClick={() =>
                copyToClipBoard(
                  `        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.492 178.492">
                  <path d="M31.837 46.545l17.342.387-26.351 15.552a6.112 6.112 0 00-2.302 8.099l35.853 68.399a6.125 6.125 0 004.195 3.142c1.735.378 3.669-.104 5.082-1.266l45.306-37.412 37.783 37.789a6.09 6.09 0 004.306 1.778c1.57 0 3.129-.597 4.316-1.778a6.112 6.112 0 000-8.635l-41.704-41.698a6.079 6.079 0 00-8.19-.396l-43.769 36.151-29.678-56.592 39.756-23.486a6.087 6.087 0 002.801-6.798 6.075 6.075 0 00-5.776-4.558l-38.066-.859c-2.113-6.853-8.43-11.855-15.969-11.855C7.52 22.509 0 30.023 0 39.281c0 9.262 7.52 16.773 16.772 16.773 6.653.006 12.353-3.891 15.065-9.509zM172.384 143.774H25.179a6.104 6.104 0 100 12.209h147.206a6.102 6.102 0 006.107-6.102 6.108 6.108 0 00-6.108-6.107z"/>
                  </svg>`,
                  "SVG"
                )
              }
              className="p-2 rounded bg-primary text-primary-light bg-opacity-80 hover:bg-opacity-100"
            >
              Copy SVG
            </button>
          </div>
          <p className="text-center">{copySuccess}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Icons;
