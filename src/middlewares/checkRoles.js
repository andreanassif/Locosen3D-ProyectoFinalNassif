

export const AdminRole = (req, res, next)=>{
    if (req.user?.role === "admin"){ 
        return next();
    }else {
        return res.sendStatus(401)
    }
}