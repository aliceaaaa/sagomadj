import { ReactNode, createContext, useRef, useState } from "react";

interface ContextType {
  msg: string;
  isDisplayed: boolean;
  displayMsg: (msg: string) => void;
  onClose: () => void;
}

export const SnackbarContext = createContext<ContextType | null>(null);

export const SnackBarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const timer = useRef<NodeJS.Timeout>();

  const [message, setMssage] = useState<string>("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const displayHandler = (msg: string) => {
    setMssage(msg);
    setIsDisplayed(true);

    timer.current = setTimeout(() => {
      closeHandler();
    }, 3000);
  };
  const closeHandler = () => {
    clearTimeout(timer.current);
    setIsDisplayed(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        msg: message,
        isDisplayed,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
