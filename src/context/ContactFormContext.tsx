import React, { useState, createContext, SetStateAction, FC, ReactNode, useContext } from "react";

interface Props {
  children?: ReactNode;
}

type ContactFormContextState = {
  formActive: boolean;
  formSubmitted: boolean;
  setFormActive: React.Dispatch<SetStateAction<boolean>>;
  setFormSubmitted: React.Dispatch<SetStateAction<boolean>>;
};

const contextValues: ContactFormContextState = {
  formActive: false,
  formSubmitted: false,
  setFormActive: () => {},
  setFormSubmitted: () => {},
};

export const ContactFormCtx = createContext<ContactFormContextState>(contextValues);

export const useContactFormContext = () => {
  const context = useContext(ContactFormCtx);

  if (context === undefined) {
    throw new Error("usage of useContactFormContext not wrapped in `ContactFormContext`.");
  }

  return context;
};

const ContactFormContext: FC<Props> = ({ children }) => {
  const [formActive, setFormActive] = useState(contextValues.formActive);
  const [formSubmitted, setFormSubmitted] = useState(contextValues.formActive);
  return (
    <ContactFormCtx.Provider value={{ formActive, formSubmitted, setFormActive, setFormSubmitted }}>
      {children}
    </ContactFormCtx.Provider>
  );
};
export default ContactFormContext;
