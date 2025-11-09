import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const ScoreList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="driver_id" />
      <TextField source="points" />
    </Datagrid>
  </List>
);
