import { styled } from "@/styles";

export const KanbanBoard = styled("div",{
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    borderRadius:".3rem",
    padding:'1rem 1.2rem',

    overflowY:'auto',

    scrollbarColor: '#DBE9EE transparent',
})
