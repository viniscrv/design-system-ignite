import * as TooltipRadix from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import { TooltipContent, TooltipTrigger } from './styles';

export interface TooltipProps {
    element: ReactNode;
    content: string;
}

export function Tooltip({element, content}: TooltipProps) {
    return (
        <TooltipRadix.Provider delayDuration={300}>
            <TooltipRadix.Root>
            <TooltipTrigger>
                {element}
            </TooltipTrigger>
            <TooltipRadix.Portal>
                <TooltipContent sideOffset={5}>
                {content}
                <TooltipRadix.Arrow width={14} fill="#121214"/>
                </TooltipContent>
            </TooltipRadix.Portal>
            </TooltipRadix.Root>
        </TooltipRadix.Provider>
    )
}