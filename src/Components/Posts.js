import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
export const Posts = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="sum" />
      <TextField source="title" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
