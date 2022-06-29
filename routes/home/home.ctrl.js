const hello = (req, res) => {
    res.send("hello");
};

const home = (req, res) => {
    res.send("home");
};

module.exports = {
    hello,
    home,
};
