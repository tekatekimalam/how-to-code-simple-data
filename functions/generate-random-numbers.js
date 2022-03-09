const randomNumber = () => {
    let randomNum = Math.random();
    console.log(randomNum);
};

const randbetween = (min, max) => {
    let res = Math.floor(Math.random() * max) + min;

    return res;
};
