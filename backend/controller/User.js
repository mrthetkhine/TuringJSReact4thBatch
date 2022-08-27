function hello(req,res,next)
{
    res.json({
        name : "Hello"
    });
}
function saveUser(req,res,next)
{
    console.log("User ",req.body);
    let user = req.body;
    user.id = 100;
    res.status(200).send(user);
}
module.exports = {
    hello,
    saveUser
}