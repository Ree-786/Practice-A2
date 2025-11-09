import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const RaceList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="race_name" />
      <TextField source="location" />
    </Datagrid>
  </List>
);
