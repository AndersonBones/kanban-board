import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';

const SCROLLBAR_SIZE = 10;

export const ScrollAreaRoot = styled(ScrollArea.Root, {
    
    width: "100%",
    
    borderRadius: '.3rem',
    overflow: 'hidden',
    
});

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {

    width: '100%',
    height: '100%',
    paddingBottom:"1rem"
   
});

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
    display: 'flex',
   
    // ensures no selection
    userSelect: 'none',
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: 'none',
    padding: 2,
    background: blackA.blackA3,
    transition: 'background 160ms ease-out',
    '&:hover': { background: blackA.blackA5 },
    '&[data-orientation="vertical"]': { 
        width: SCROLLBAR_SIZE,
       
    },
    '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        height: SCROLLBAR_SIZE,
    },
});

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
    flex: 1,
    background: mauve.mauve10,
    borderRadius: SCROLLBAR_SIZE,
    
    
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: 44,
        minHeight: 44,
    },
});

export const ScrollAreaCorner = styled(ScrollArea.Corner, {
    background: blackA.blackA5,
});

export const Box = styled('div', {
    display:"grid",
    gridAutoRows:"5.5rem",
    gap:"1rem",
    padding:"0 .8rem"
});

