import { keyframes, styled } from "../../styles";
import * as Toast from "@radix-ui/react-toast";

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideOut = keyframes({
  from: {
    opacity: 1,
    transform: "translateX(0)",
  },
  to: {
    opacity: 0,
    transform: "translateX(100%)",
  },
});

export const ToastWindow = styled(Toast.Root, {
  backgroundColor: "$gray800",
  border: "1px solid $gray500",
  padding: "$4",
  borderRadius: "$md",
  position: "fixed",
  bottom: "$4",
  right: "$4",
  width: "390px",
  maxWidth: "100vw",
  display: "flex",
  justifyContent: "space-between",

  p: {
    color: "$gray200",
  },

  button: {
    backgroundColor: "transparent",
    border: 0,
    color: "$gray100",
    cursor: "pointer",
    padding: 0,
    lineHeight: 0,
    alignSelf: "start",
  },

  "&[data-state='open']": {
    animation: `${slideIn} 240ms ease-out`,
  },

  "&[data-state='closed']": {
    animation: `${slideOut} 240ms ease-out`,
  },
});
