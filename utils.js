const { questions } = require('./ques');
const { setResponse } = require('./resMapper');

const ifBusy = () => (global.user && global.user.name) ? true : false;

const quit = () => {
    try {
        const result = (global.user && global.user.score) ? global.user.score : 0;
        const des = checkDes(result);
        global.user = null;
        return setResponse(result, des, 'key1');
    } catch (e) {
        console.log('An error occurred ::', e)
        return setResponse(null, null, 'key15');
    }
}

const setUserName = (name) => {
    try {
        if (name.includes('name')) {
            if (!ifBusy()) {
                const userId = Math.floor(Math.random() * 6) + 1;
                name = name.replace('name-', '');
                global.user = {
                    name,
                    userId,
                    score: 0,
                    ques: 0,
                    visited: [],
                    total: 0
                };
                return setResponse(userId, null, 'key2');
            } else {
                return setResponse(global.user.name, null, 'key3');
            }
        } else {
            return setResponse(null, null, 'key4');
        }
    } catch (e) {
        console.log('An error occurred ::', e)
        return setResponse(null, null, 'key15');
    }
}

const checkDes = (res) => {
    if (res <= 2) {
        return 'LOL'
    } else if (res == 3) {
        return 'Well Tried !!'
    } else if (res == 4) {
        return 'Gr8 Job!'
    } else {
        return 'Excellent !!'
    }
}

const getQid = () => {
    try {
        const res = Math.floor(Math.random() * 19) + 1;
        return (global.user.visited.indexOf(res) == -1) ? res : getQid();
    } catch (e) {
        console.log('An error occurred ::', e)
        return setResponse(null, null, 'key15');
    }
}

const setUserContext = () => {
    try {
        if (global.user && global.user.total <= 5) {
            id = getQid();
            if (id) {
                global.user.ques = id;
                global.user.visited.push(id);
                global.user.total++;
                return id;
            }
        } else {
            return quit();
        }
    } catch (e) {
        console.log('An error occurred ::', e)
        return setResponse(null, null, 'key15');
    }
}

const checkOption = (option) => {
    try {
        if (['a', 'b', 'c', 'd'].indexOf(option) !== -1) {
            const ans = questions[global.user.ques].a;
            const op = (ans == option) ? true : false;
            const result = setUserContext();
            if (typeof (result) == 'number') {
                const nextQues = `\n\n Question : ${questions[global.user.ques].q} \n\n Options : ${[...questions[global.user.ques].options]}`;
                if (op) {
                    global.user.score++;
                    if (global.user.total <= 5) {
                        return setResponse(global.user.score, nextQues, 'key5');
                    } else {
                        return quit();
                    }
                } else {
                    return setResponse(ans, nextQues, 'key6');
                }
            }
            return result;
        }
        return setResponse(null, null, 'key7');
    } catch (e) {
        console.log('An error occurred ::', e)
        return setResponse(null, null, 'key15');
    }
}

const runQuiz = (text) => {
    if (global.user && global.user.name) {
        const option = text[text.length - 1];
        return ifCurrentUser(text) ? checkOption(option) : setResponse(null, null, 'key7');
    } else {
        return setResponse(null, null, 'key8');
    }
}

const reset = (text) => {
    global.user = null;
    return setResponse(null, null, 'key9');
}

const ifCurrentUser = (text) => {
    if (global.user) {
        return text.includes(global.user.userId) ? true : false;
    }
    return false;
}

const start = (text) => {
    try {
        const result = (ifCurrentUser(text)) ? setUserContext() : setResponse(null, null, 'key12');
        if (typeof (result) == 'number') {
            const nextQues = `\n\n Question : ${questions[global.user.ques].q} \n\n Options : ${[...questions[global.user.ques].options]}`;
            return setResponse(nextQues, null, 'key10');
        }
        return result;
    } catch (e) {
        console.log('An error occurred ::', e)
        return setResponse(null, null, 'key15');
    }
}

const ng = (text) => (!ifBusy()) ? setResponse(null, null, 'key13') : setResponse(global.user.name, null, 'key14');

const actions = {
    'new-user': setUserName,
    'quiz': runQuiz,
    'reset': reset,
    'start': start,
    'angular': ng
}

module.exports = {
    actions
}