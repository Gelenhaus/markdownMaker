const fs = require("fs");

const writeTheMD = function (myAnswers) {
    fs.writeFile('./MahReadMe.md', myAnswers, err => {
        if (err) {
            console.error(err)
            return
        }

    })
}

module.exports = writeTheMD;