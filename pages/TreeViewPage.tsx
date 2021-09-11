import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { Layout } from "components/Layout";
import UseTech from "components/UseTech";

const useStyles = makeStyles({
  root: {},
});

const TreeViewPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <h1 className="text-3xl font-extrabold">TreeViewPage</h1>

      <UseTech
        techName="Material-UI"
        srcURL="https://github.com/shimapon/design-portfolio/blob/main/pages/TreeViewPage.tsx"
      />
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="ContentA">
          <TreeItem nodeId="2" label="ContentA-1" />
          <TreeItem nodeId="3" label="ContentA-2" />
          <TreeItem nodeId="4" label="ContentA-3" />
        </TreeItem>
        <TreeItem nodeId="5" label="ContentB">
          <TreeItem nodeId="10" label="ContentB-1" />
          <TreeItem nodeId="6" label="ContentB-2">
            <TreeItem nodeId="7" label="ContentB-2-1">
              <TreeItem nodeId="8" label="ContentB-2-1-1" />
              <TreeItem nodeId="9" label="ContentB-2-1-2" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Layout>
  );
};

export default TreeViewPage;
