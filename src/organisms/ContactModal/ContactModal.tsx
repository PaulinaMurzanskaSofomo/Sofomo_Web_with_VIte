import React, { FC, useState } from "react";
import { useContactFormContext } from "../../context/ContactFormContext";
import { ContactModalDisplay } from "./ContactModalDisplay/ContactModalDisplay";

export interface Props {
  formTitle: string;
  formSubtitle: string;
  outsource?: boolean;
}
export interface ModalProps extends Props {
  formSubmitted?: boolean;
  onModalClose?: VoidFunction;
  displayClass?: string;
}

export const ContactModal: FC<Props> = ({ formTitle, formSubtitle, outsource }) => {
  const { formSubmitted, setFormSubmitted, formActive, setFormActive } = useContactFormContext();
  const [closeModal, setCloseModal] = useState(false);

  const onModalClose = () => {
    setFormSubmitted(false);
    setFormActive(false);
    setCloseModal(true);
  };

  const displayClass = () => {
    if (formActive) {
      return "modal-active";
    }
    if (closeModal) {
      return "modal-disabled";
    } else return "contact-modal";
  };

  return (
    <ContactModalDisplay
      formSubmitted={formSubmitted}
      onModalClose={onModalClose}
      displayClass={displayClass()}
      formTitle={formTitle}
      formSubtitle={formSubtitle}
      outsource={outsource}
    />
  );
};
