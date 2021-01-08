module.exports = (err, req, res, next) => {
    console.log(err)
    console.log(err.name, "<err name>");
    if(err.status){
        res.status(err.status).json({message: err.message})
    } else if(err.name == "SequelizeValidationError"){
        console.log('masuk validasi');
        res.status(400).json({message: err.errors[0].message})
    } else {
        err.status(500).json({message: err.message})
    }
}