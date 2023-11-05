import { Fragment, SVGProps, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import "../../index.css";
// import styles from "./style.module.css";

import { css } from "../../../styled-system/css";

const styles = {
  inputAndButtonWrapper: css({
    width: "100%",
    minHeight: "36px",
    display: "flex",
    borderColor: "rgb(204, 204, 204)",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    outline: "rgb(38, 132, 255)",
    _focusWithin: {
      borderColor: "rgb(38, 132, 255)",
      borderWidth: "2px",
    },
  }),
  input: css({
    border: "none",
    padding: "8px",
    borderRadius: "4px",
    outline: "none",
  }),
  button: css({
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    padding: "0",
    appearance: "none",
  }),
  downIcon: css({ width: "36px", height: "36px", padding: "8px" }),
  separator: css({
    width: "1px",
    margin: "8px 0px",
    backgroundColor: "rgb(204, 204, 204)",
  }),
  options: css({
    maxHeight: "100px",
    overflow: "auto",
    width: "100%",
    marginTop: "8px",
    padding: "8px 0px",
    borderRadius: "4px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px",
  }),
  // relative cursor-default select-none py-2 pl-10 pr-4
  option: css({
    padding: "4px 8px",
  }),
  activeOption: css({
    backgroundColor: "rgb(222, 235, 255)",
  }),
  selectedOption: css({
    backgroundColor: "rgb(38, 132, 255)",
  }),
};

const IcBaselineKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
    />
  </svg>
);

type Option = { value: string; label: string };
type Props = {
  options: Option[];
};

// 表示するときに一瞬ガタつく
export const HeadlessUISelect2 = ({ options }: Props) => {
  const [selected, setSelected] = useState<Option | undefined>();
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  console.log({ query, filteredOptions });
  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className={styles.inputAndButtonWrapper}>
        <Combobox.Input
          className={styles.input}
          displayValue={(option: Option) => option.label}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className={styles.separator} />
        <Combobox.Button className={styles.button}>
          <IcBaselineKeyboardArrowDown
            className={styles.downIcon}
            aria-hidden="true"
          />
        </Combobox.Button>
      </div>
      <Combobox.Options className={styles.options}>
        {filteredOptions.length === 0 && query !== "" ? (
          <div className={`${styles.option}`}>Create "{query}"</div>
        ) : (
          filteredOptions.map((option) => (
            <Combobox.Option
              key={option.value}
              className={({ active, selected }) =>
                `${styles.option} ${active ? styles.activeOption : ""}${
                  selected ? styles.selectedOption : ""
                }`
              }
              value={option}
            >
              {({ selected, active }) => (
                <>
                  <span className="">{option.label}</span>
                </>
              )}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Combobox>
  );
};
