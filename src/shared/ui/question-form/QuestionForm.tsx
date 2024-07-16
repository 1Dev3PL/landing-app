import React, { useState } from "react";
import { Panel } from "shared/ui/panel/Panel.tsx";
import styles from "shared/ui/modal/ui/styles.module.scss";
import cross from "shared/assets/icons/cross.svg";
import { Input } from "shared/ui/input/Input.tsx";
import { Textarea } from "shared/ui/textarea/Textarea.tsx";
import { Checkbox } from "shared/ui/checkbox/Checkbox.tsx";
import { Button } from "shared/ui/button/Button.tsx";

type TTestFormProps = {
  handleClose: () => void;
};

export const QuestionForm = (props: TTestFormProps) => {
  const { handleClose } = props;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    companyName: "",
    address: "",
    quarry: "",
    questions: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Panel className={styles.form_container}>
      <div className={styles.header}>
        <div className={styles.header_title}>Задать вопрос</div>
        <div className={styles.header_text}>
          Заполните форму и наш сотрудник свяжется с вами
        </div>
        <div className={styles.close_button} onClick={handleClose}>
          <img src={cross} alt={"close"} />
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_column}>
          <div className={styles.form_column_block}>
            <div className={styles.title}>Ваше ФИО</div>
            <Input
              name={"fullName"}
              placeholder={"Иванов Иван Иванович"}
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.form_column_block}>
            <div className={styles.title}>Ваш номер телефона</div>
            <Input
              name={"phoneNumber"}
              placeholder={"+7 (999)-999-99-99"}
              type={"tel"}
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.form_column_block}>
            <div className={styles.title}>Данные о компании</div>
            <Input
              name={"companyName"}
              placeholder={"Название вашей компании"}
              value={formData.companyName}
              onChange={handleChange}
              className={styles.input}
            />
            <Textarea
              name={"address"}
              placeholder={"Ваш почтовый адрес"}
              value={formData.address}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
        </div>
        <div className={styles.form_column}>
          <div className={styles.form_column_block}>
            <div className={styles.title}>Интересующий карьер</div>
            {/*<SelectComponent handleOptionChange={} items={} option={}/>*/}
            <Input
              name={"quarry"}
              placeholder={"Название вашей компании"}
              value={formData.quarry}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.form_column_question_block}>
            <div className={styles.title}>Вопрос или комментарий</div>
            <Textarea
              name={"questions"}
              placeholder={
                "Уточните ваши вопросы:\n" +
                "Для чего вам нужны нерудные материалы?\n" +
                "В каком регионе?\n" +
                "В каких объемах?"
              }
              value={formData.questions}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
          <div className={styles.form_column_block}>
            <Checkbox
              className={styles.checkbox}
              label={
                <span>
                  Я согласен(а) на обработку{" "}
                  <a
                    href={"/"}
                    target={"_blank"}
                    className={styles.personal_data}
                  >
                    персональных данных
                  </a>
                </span>
              }
              checked={isChecked}
              onChange={handleCheck}
            />
          </div>
          <div className={styles.form_column_block}>
            <Button type={"submit"} color={"ultramarine"}>
              Отправить вопрос
            </Button>
          </div>
        </div>
      </form>
    </Panel>
  );
};
