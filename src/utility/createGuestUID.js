import {v4 as uuidv4} from 'uuid'

const createUID = () => {
    const uid = uuidv4();
    return uid;
}

export default createUID;