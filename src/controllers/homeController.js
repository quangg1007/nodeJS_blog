const getHomePage = (req, res) => {
    res.render('homepage.ejs')
}

const getExamplePage = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomePage, getExamplePage, 
}