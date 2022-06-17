import * as React from "react";

export function GetUsers(){
    const [users, setUsers] = React.useState([]);
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users?page=2");
        const json = await res.json();
        setUsers(json.data);
    };
    React.useEffect(() => {
        f();
    }, []);
    return users
}
