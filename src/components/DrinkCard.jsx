import styled from "styled-components";

const DrinkCard = styled.li`
    background-color: #FFFBDB;
    width: 270px;
    height: 250px;
    margin: 2px;
    list-style: none;
    border-radius: 2px;
    color: #0CBABA;
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    border-radius: 10px;

        p {
            font-size: .9rem;
            color: #383838;
            margin: 2px;
        }

        img {
            height: 132px;
        }

        div {
            margin: 0 auto;
            width: 200px;
            height: 40px;
            font-size: 2rem;
            color: snow;
            display: flex;
            justify-content: space-evenly;
            position: absolute;
            bottom: 0;

            span {
                width: 35px;
                cursor: pointer;
                color: #FF674D;
            }

            span:hover {
                color: #0CBABA;
                transition: .2s ease;
                transform: scale(120%);
                background-color: #FFEC51;
                border-radius: 10px;
                ::before {
                    font-size: .7rem;
                    position: absolute;
                    bottom: 0;
                    top: 30%;
                    right: 50%;
                    color: red;
                    transform: translate(50%, 50%);
                    background-color: #FFEC51;
                    padding: 2px;
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
            background-color: blanchedalmond;
            font-size: .8rem;
        }
`

export default DrinkCard;