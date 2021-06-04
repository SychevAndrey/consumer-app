import {useSetRecoilState} from "recoil";
import { Input } from 'antd';

import {userName} from "./atoms";
import React from "react";

export default () => {
    const nameSet = useSetRecoilState(userName)
    return (
        <div>
            <label>
                Type your name:
                <Input onChange={(e) => nameSet(e.target.value)} />
            </label>
        </div>);
}
