const errorMiddleware = (req , res , err , next)=>{
    const statusCode  = err.statusCode || 500 ;
    const errorMessage = err.errorMessage  ;

    res.status(statusCode).json({
        errorMessage
    })
}
module.exports = errorMiddleware