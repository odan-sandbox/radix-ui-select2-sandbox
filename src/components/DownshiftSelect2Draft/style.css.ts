import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "38px",
  borderStyle: "solid",
  borderRadius: "4px",
  borderWidth: "1px",
  borderColor: "rgb(204, 204, 204)",
});

export const input = style({
  marginLeft: "4px",
  flex: 1,
  padding: "4px",
  border: "none",
});

export const buttonWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const separator = style({
  width: "1px",
  backgroundColor: "rgb(204, 204, 204)",
  alignSelf: "stretch",
  margin: "8px 0",
});

export const expandButton = style({
  padding: "8px",
  fill: "rgb(204, 204, 204)",
});

export const content = style({
  maxHeight: "200px",
  overflowY: "auto",
  padding: "0 4px",
  borderRadius: "4px",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px",
});

export const item = style({
  padding: "8px 12px",
});
export const selectedItem = style({
  backgroundColor: "rgb(222, 235, 255)",
});
