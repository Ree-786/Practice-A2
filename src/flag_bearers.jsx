import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const FlagBearerList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="bearer_name" />
      <TextField source="country" />
    </Datagrid>
  </List>
);
