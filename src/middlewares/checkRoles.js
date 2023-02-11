const isAdmin = true;

const NoAdmin = ()=>{
    const error = {
        error: -1,
        description: 'no autorizado',
    } 
    return error;
}

export const AdminRole = (req, res, next)=>{
    if (!isAdmin){
        res.json(NoAdmin());
    }else{
        next();
    }
}