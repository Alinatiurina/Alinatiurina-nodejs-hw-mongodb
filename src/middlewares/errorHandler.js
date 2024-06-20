const errorHandler = (error, reg, res, next) => {
    
    const { status = 500, message } = error;
    res.status(status).json({
        status,
        message,
        data: error,
    });
}
export default errorHandler;