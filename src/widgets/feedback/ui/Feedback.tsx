import styles from "./styles.module.scss";
import { BlockHeader } from "shared/ui/block-header/BlockHeader.tsx";
import { Panel } from "shared/ui/panel/Panel.tsx";
import { Input } from "shared/ui/input/Input.tsx";
import React, { useState } from "react";
import { Textarea } from "shared/ui/textarea/Textarea.tsx";
import { Checkbox } from "shared/ui/checkbox/Checkbox.tsx";
import { Button } from "shared/ui/button/Button.tsx";

export const Feedback = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phoneNumber: "",
    companyName: "",
    address: "",
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
    <div className={styles.container}>
      <BlockHeader title={"Обратная связь"} color={"ultramarine"} />
      <Panel className={styles.form_container}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.form_column}>
            <div className={styles.form_column_title}>Контактные данные</div>
            <div className={styles.form_column_block}>
              <div className={styles.form_column_block_title}>ФИО</div>
              <Input
                name={"fullName"}
                value={formData.fullName}
                placeholder={"Ваше имя"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.form_column_block}>
              <div className={styles.form_column_block_title}>
                Номер телефона
              </div>
              <Input
                name={"phoneNumber"}
                type={"tel"}
                value={formData.phoneNumber}
                placeholder={"+7(999)-999-99-99"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.form_column_block}>
              <div className={styles.form_column_block_title}>
                Данные компании
              </div>
              <Input
                name={"companyName"}
                value={formData.companyName}
                placeholder={"Название вашей компании"}
                onChange={(e) => handleChange(e)}
              />
              <Textarea
                name={"address"}
                value={formData.address}
                placeholder={"Ваш почтовый адрес"}
                className={styles.form_address_textarea}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={styles.form_column}>
            <div className={styles.form_column_title}>Комментарий</div>
            <div className={styles.form_comment_block}>
              <div className={styles.form_column_block_title}>
                Уточните ваши вопросы
              </div>
              <Textarea
                name={"questions"}
                value={formData.questions}
                placeholder={
                  "Например:\nДля чего вам нужны нерудные материалы?\nВ каких объемах?"
                }
                className={styles.form_comment_textarea}
                onChange={(e) => handleChange(e)}
              />
              <Checkbox
                name={"checkbox"}
                label={
                  <span>
                    Я согласен на обработку{" "}
                    <a
                      className={styles.personal_data_link}
                      href={""}
                      target="_blank"
                    >
                      персональных данных
                    </a>
                  </span>
                }
                checked={isChecked}
                onChange={() => handleCheck()}
              />
            </div>
            <div>
              <Button type={"submit"} color={"ultramarine"}>
                Отправить форму
              </Button>
            </div>
          </div>
        </form>
      </Panel>
    </div>
  );
};
