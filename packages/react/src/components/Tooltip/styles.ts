import { styled } from "@stitches/react";
import * as TooltipRadix from '@radix-ui/react-tooltip';

export const TooltipContainer = styled(TooltipRadix.Root, {
    backgroundColor: "transparent",
});

export const TooltipTrigger = styled(TooltipRadix.Trigger, {
    backgroundColor: "transparent",
    border: 0,
});


export const TooltipContent = styled(TooltipRadix.Content, {
    backgroundColor: "$gray900",
    color: "$gray100",
    padding: "$2 $3",
    borderRadius: "$sm"
})