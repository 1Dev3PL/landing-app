import styles from "./styles.module.scss"
import { useState } from 'react'
import arrowIcon from "shared/assets/icons/factoryArrow.svg";

type TSelectFactory = {
  id: number;
  title: string | undefined;
}

type TSelectProps = {
  handleOptionChange: (id: number) => void;
  factories: TSelectFactory[];
  option: number;
}
export const SelectComponent = (props: TSelectProps) => {
  const {handleOptionChange, factories, option} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(factories[option]);

  const toggling = () => {
    setIsOpen(!isOpen);
  }

  const onOptionClicked = (value: TSelectFactory) => {
    setSelectedOption(value);
    handleOptionChange(value.id);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggling}>
        {option != selectedOption.id ? factories[option].title : selectedOption.title}
        <div className={styles.container_icon}>
          <img
            src={arrowIcon}
            alt="arrowIcon"
            className={
              isOpen ? `${styles.arrow} ${styles.arrow_open}` : styles.arrow
            }
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles.container_dropdown}>
          <ul className={styles.dropdown_list}>
            {factories.map((factory) => (
              <li
                key={factory.id}
                onClick={() => onOptionClicked(factory)}
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