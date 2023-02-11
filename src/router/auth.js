import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import {Strategy as LocalStrategy} from "passport-local";
import { UserModel } from "../models/dbModels/users.models.js";
import { logger } from "../loggers/logger.js";
import { checkLogin } from "../middlewares/checkLogin.js";

//serializar y deserializar al usuario
passport.serializeUser((user,done)=>{
    return done(null,user.id)
});

passport.deserializeUser((id,done)=>{
    UserModel.findById(id,(error,userFound)=>{
        return done(error, userFound)
    })
});


const createHash = (password)=>{
    const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    return hash;
};

//estrategia de registro con passport local.
passport.use("signupStrategy", new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField: "email"
    },
    (req,username,password,done)=>{
        logger.info(req.body,username,password)
        //logica para registrar al usuario
        //verificar si el usuario existe en db
        UserModel.findOne({email:username},(error,userFound)=>{
            if(error) return done(null,null,{message:`Hubo un error ${error}`});
            if(userFound) return done(null,null,{message:"El usuario ya existe"});
            //guardamos el usuario en la db
            const newUser={
                email:req.body.email,
                password:createHash(password),
                username:req.body.username,
                address:req.body.address,
                age:req.body.age,
                phone:req.body.phone,
                avatar:req.body.avatar
            };
            logger.info(newUser)
            UserModel.create(newUser,(error,userCreated)=>{
                if(error) return done(null, null, {message:`hubo un error al registrar el usuario ${error}`})
                return done(null,userCreated, {message:"Usuario registrado exitosamente"});
            })
        })
    }
));


const authRouter = express.Router();

authRouter.post("/registro",(req,res)=>{
    passport.authenticate("signupStrategy",(error, username, info)=>{
        if(error || !username) return res.json({message:info.message});
        //si el usuario se crea en la base de datos, vamos a logear al usuario para activarle una sesion a ese usuario
        req.logIn(username,function(error){
            if(error) return res.json({message:"hubo un error al autenticar al usuario"});
            res.json({username,message:info.message})
        })
    })(req,res)//poder utilizar en el callback el req, y el res
});

authRouter.get("/home",checkLogin,(req,res)=>{
    console.log(req);
    res.send("pagina del home");
});

authRouter.post("/logout",(req,res)=>{
    req.logOut((error)=>{
        if(error) return res.status(400).json({message:"Error al cerrar sesion"});
        res.status(200).json({message:"Sesion finalizada"})
    })
})

export {authRouter};