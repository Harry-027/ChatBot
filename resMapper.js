const setResponse = (payload1 = null, payload2 = null, key = null) => {
    return getMappedKeyResponse(payload1, payload2, key);
}

getMappedKeyResponse = (payload1, payload2, key) => {
    const resMapper = {
        key1: `Quiz over !! Your total score is ${payload1} ${payload2} 
        Bye Tata !!`,
        key2: `Hey ! This is your userId :: ${payload1}. While answering MCQ's type 'userId-correctOption'. \n\n Type 'userId-start' whenever you are ready.`,
        key3: `I'm busy playing with ${payload1}. Will play with you sometime later. \n\n If you want to make me available now & reset the current user game, type 'reset'`,
        key4: `Wrong Syntax. I asked you to type 'name-your name'`,
        key5: `Perfect !! Your score is ${payload1}, \n\n Next Ques :: ${payload2} . \n\n Type 'userId-option' to lock your answer`,
        key6: `Sorry wrong answer, Correct option is ${payload1}. \n\n Next Ques :: ${payload2} . \n\n Type 'userId-option' to lock your answer`,
        key7: `I didn't get what you said . To answer the question type 'userId-correctOption'. \n\n For instance - if userId is arp-5 & selected option is b. Type arp-5-b.`,
        key8: `Sorry, I can't recognise you. \n\n To start the quiz again type 'Angular'`,
        key9: `Hey, I'm available for your test  :) ! Shall we start ? To start a new quiz type 'Angular'`,
        key10: `Here is your first Question :: ${payload1} \n\n Type 'userId-option' to lock your answer`,
        key11: `An error occurred ! Please start quiz again. \n\n To start the quiz again type 'Angular'`,
        key12: `What start ? I can't recognise you.`,
        key13: `What is your name ? Type 'name-your name' to proceed further.`,
        key14: `I'm busy playing with ${payload1}. Will play with you sometime later. \n\n If you want to make me available now & reset the current user game, type 'reset' `,
        key15: `An error occurred. \n\n Please contact the administrator !!`

    };
    return resMapper[key];
}

module.exports = {
    setResponse
};
