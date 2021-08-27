import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "../components/Layout";
import UseTech from "../components/UseTech";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Buttons: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <h1 className="text-3xl font-extrabold">Buttons</h1>

      <UseTech
        techName="CSS"
        srcURL="https://github.com/shimapon/design-portfolio/blob/main/pages/Buttons.tsx"
      />
      <div className="bg-white">
        <button type="button" className="btn">
          click here
        </button>
      </div>
    </Layout>
  );
};

export default Buttons;
