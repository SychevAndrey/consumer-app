import {useSetRecoilState} from "recoil";
import {userName} from "./atoms";
import React from "react";

export default () => {
    const nameSet = useSetRecoilState(userName)
    return (
        <div>
            <label>Type your name:</label>
            <input onChange={(e) => nameSet(e.target.value)} />
        </div>);
}
