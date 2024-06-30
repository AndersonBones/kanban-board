import React, { ReactNode } from 'react';
import { Box, ScrollAreaCorner, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from './styles';


interface TaskListProps {
    children: ReactNode
}
export default function TaskList({ children }: TaskListProps) {

    

    return (
        <ScrollAreaRoot >
            <ScrollAreaViewport>

                <Box >

                    
                    {children}
                </Box>



            </ScrollAreaViewport>

            <ScrollAreaScrollbar orientation="vertical">
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>

            <ScrollAreaCorner />
        </ScrollAreaRoot >
    )
}