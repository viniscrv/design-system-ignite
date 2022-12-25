import * as ToastRadix from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { ComponentProps, useState } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { ToastWindow } from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastRadix.Provider> {
  title: string;
  description: string;
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false);

  return (
    <ToastRadix.Provider swipeDirection="right" duration={6000}>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <ToastWindow open={open} onOpenChange={setOpen}>
        <div className="content">
          <ToastRadix.Title>
            <Heading size="sm">{title}</Heading>
          </ToastRadix.Title>
          <ToastRadix.Description>
            <Text>{description}</Text>
          </ToastRadix.Description>
        </div>
        <ToastRadix.Close asChild>
          <button>
            <X size={24} />
          </button>
        </ToastRadix.Close>
      </ToastWindow>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  );
}

Toast.displayName = "Toast";
