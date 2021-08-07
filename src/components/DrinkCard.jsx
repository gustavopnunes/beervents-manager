import styled from "styled-components";

const DrinkCard = styled.li`
    background-color: #FFFBDB;
    width: 270px;
    height: 260px;
    margin: 2px;
    list-style: none;
    border-radius: 2px;
    color: #0CBABA;
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    border-radius: 10px;

    .drink_volume {
        font-size: .8rem;
    }

    .drink_description {
        font-size: .7rem;
        background-color: #8080807b;
    }

    .add-to-event_buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #f1d94e;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
        p {
            font-size: .9rem;
            color: #383838;
            margin: 2px;
        }

        img {
            height: 132px;
        }

        div {
            width: 200px;
            height: 40px;
            font-size: 2rem;
            color: snow;
            display: flex;
            justify-content: space-evenly;
            background-color: #944343;
            border-radius: 5px;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;

            span {
                width: 35px;
                cursor: pointer;
                color: #FF674D;
                margin-top: 3px;
            }

            span:hover {
                color: #0CBABA;
                transition: .2s ease;
                transform: scale(120%);
                background-color: #FFEC51;
                border-radius: 10px;
                position: relative;
                z-index: 1;
                ::before {
                    font-size: .7rem;
                    position: absolute;
                    bottom: 0;
                    top: 60%;
                    right: 50%;
                    color: red;
                    transform: translate(50%, 50%);
                    background-color: #FFEC51;
                    padding: 2px;
                    display: flex;
                    align-items: center;
                }
            }

            .wedding_icon:hover {
                ::before{
                    content: "wedding";
                }
            }

            .graduation_icon:hover {
                ::before{
                    content: "graduation"
                }
            }

            .confraternization_icon:hover {
                ::before {
                    content: "confraternization"
                }
            }
        } 

        .question {
            color: black;
            font-size: .8rem;
        }

`

export default DrinkCard;