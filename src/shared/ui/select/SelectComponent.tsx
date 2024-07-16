import styles from "./styles.module.scss"
import { useState } from 'react'
import arrowIcon from "shared/assets/icons/factoryArrow.svg";
import classNames from "classnames";

type TSelectFactory = {
  id: number;
  title?: string;
}

type TSelectProps = {
  handleOptionChange: (id: number) => void;
  items: TSelectFactory[];
  option: number;
}
export const SelectComponent = (props: TSelectProps) => {
  const {handleOptionChange, items, option} = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  }

  const onOptionClicked = (value: number) => {
    handleOptionChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggling}>
        {items[option].title}
        <div className={styles.container_icon}>
          <img
            src={arrowIcon}
            alt="arrowIcon"
            className={classNames(styles.arrow, {[styles.arrow_open]: isOpen})}
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles.container_dropdown}>
          <ul className={styles.dropdown_list}>
            {items.map((factory) => (
              <li
                key={factory.id}
                onClick={() => onOptionClicked(factory.id)}
                className={styles.list_item}
              >
                {factory.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}