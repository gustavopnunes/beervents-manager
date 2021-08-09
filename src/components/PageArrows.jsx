import styled from "styled-components"

const PageArrows = styled.div`
    position: fixed;
    cursor: pointer;
    top: 60%;
    color: #c75252;
    z-index: 1;
    font-size: .8rem;

    &.right {
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-left: 25px solid orange;
        right: 2%;

        &:hover {
            border-left: 25px solid orangered;
            transition: .1s ease;

                &::after {
                content: "next page";
                position: absolute;
                top: 20px;
                right: 0;
                background-color: blanchedalmond;
                border-radius: 4px;
                padding: 2px;
            }
        }
    }

    &.left {
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-right:25px solid orange; 
        left: 2%;

        &:hover {
        border-right:25px solid orangered;    
        transition: .1s ease;

            &::after {
                content: "previous page";
                position: absolute;
                top: 20px;
                background-color: blanchedalmond;
                border-radius: 4px;
                padding: 2px;
            }
        }
    }   
`
export default PageArrows;