import { SVGProps, useId, useState } from "react";

import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps } from "@zag-js/react";
import classnames from "classnames";
import "../../index.css";
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
      borderWidth: "1px",
      boxShadow: "rgb(38, 132, 255) 0px 0px 0px 1px",
    },
  }),
  input: css({
    border: "none",
    padding: "2px 8px",
    borderRadius: "4px",
    outline: "none",
  }),
  downIcon: css({ width: "36px", height: "36px", padding: "8px" }),
  options: css({
    maxHeight: "100px",
    overflow: "auto",
    width: "100%",
    padding: "8px 0px",
    borderRadius: "4px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px",
  }),
  option: css({
    padding: "4px 8px",
    _highlighted: {
      backgroundColor: "rgb(222, 235, 255)",
    },
    "&[data-state=checked]": {
      backgroundColor: "rgb(38, 132, 255)",
    },
  }),
  createButton: css({
    cursor: "pointer",
    _hover: {
      backgroundColor: "rgb(222, 235, 255)",
    },
  }),
  createButtonInner: css({
    cursor: "pointer",
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

const CreateButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: (label: string) => void;
}) => {
  return (
    <li className={classnames(styles.option, styles.createButton)}>
      <button
        className={styles.createButtonInner}
        onClick={() => onClick(label)}
      >
        Create "{label}"
      </button>
    </li>
  );
};

type Option = { label: string; value: string };
export type Props = {
  labelText: string;
  options: Option[];
  onChange: (value: string) => void;
  onClickCreate: (value: string) => void;
};

export const ZagJsSelect2 = ({
  labelText,
  options,
  onChange,
  onClickCreate,
}: Props) => {
  const [currentOptions, setCurrentOptions] = useState(options);

  const collection = combobox.collection({
    items: options,
    itemToValue: (item) => item.value,
    itemToString: (item) => item.label,
  });

  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
      collection,
      onInputValueChange({ value }) {
        const filtered = options.filter((item) =>
          item.label.toLowerCase().startsWith(value.toLowerCase())
        );
        setCurrentOptions(filtered);
      },
      onValueChange({ value }) {
        onChange(value[0]);
      },
      openOnClick: true,
    }),
    {
      context: { collection },
    }
  );

  const api = combobox.connect(state, send, normalizeProps);

  const isEmptyOptions = currentOptions.length === 0;
  return (
    <div>
      <div {...api.rootProps}>
        <label {...api.labelProps}>{labelText}</label>
        <div {...api.controlProps} className={styles.inputAndButtonWrapper}>
          <input {...api.inputProps} className={styles.input} />
          <button {...api.triggerProps}>
            <IcBaselineKeyboardArrowDown
              className={styles.downIcon}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div {...api.positionerProps}>
        <ul {...api.contentProps} className={styles.options}>
          {currentOptions.map((item) => (
            <li
              key={item.value}
              {...api.getItemProps({ item })}
              className={styles.option}
            >
              {item.label}
            </li>
          ))}
          {isEmptyOptions && (
            <CreateButton label={api.inputValue} onClick={onClickCreate} />
          )}
        </ul>
      </div>
    </div>
  );
};
