import * as React from "react";
import styled from "styled-components";
import Title from "./Title";
import GlobalContainer from "./GlobalStyle";
import {GetUsers} from "../service/UserService";

const StyledCard = styled.div`
    min-height: 240px;
    min-width: 187px;
    margin: 0 1rem 2rem 1rem;
    text-align: center;
    border: 1px solid #797979;
    padding: 10px;
    transition: .3s ease-out;
    &:hover {
        box-shadow: 5px 5px 20px;
    }
    img {
        display: inline-block;
        max-width: 100%;
    }
`
export default function UserCard() {
    const users = GetUsers();
    return (
        <>
            <Title>Карточки пользователей</Title>
            <GlobalContainer flexDirection={"row"}>
                {users.length &&
                users.map((user) => {
                    return (
                        <StyledCard key={user.id}>
                            <p>
                                <strong>{user.first_name}</strong> <strong>{user.last_name}</strong>
                            </p>
                            <p>{user.email}</p>
                            <img key={user.avatar} src={user.avatar}/>
                        </StyledCard>
                    );
                })}
            </GlobalContainer>
        </>
    );
}