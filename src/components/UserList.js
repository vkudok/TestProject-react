import * as React from "react";
import styled from "styled-components";
import Title from "./Title"
import GlobalContainer from "./GlobalStyle"
import {GetUsers} from "../service/UserService";

const StyledTable = styled.div`
    display: flex;
    padding: 10px 50px;
    min-height: 120px;
    width: 100%;
    border: 1px solid #555;
    align-items: center;
    justify-content: space-between;
    transition: .3s ease-out;
    &:hover {
        box-shadow: 5px 5px 20px;
    }
`
export default function UserList() {
    const users = GetUsers();
    return (
        <>
            <Title>Список пользователей</Title>
            <GlobalContainer flexDirection={"column"}>
                {users.length &&
                users.map((user) => {
                    return (
                        <StyledTable key={user.id}>
                            <img key={user.avatar} src={user.avatar}/>
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{user.email}</p>
                        </StyledTable>
                    );
                })}
            </GlobalContainer>
        </>
    );
}