import log4js from "log4js";

//config libreria

log4js.configure({
     //definir salida de datos: como se almacena y muestran los mensajes
     appenders:{
        consola:{type:"console"},
        errorFile:{type:"file", filename:"./src/logs/errores.log" },
        //definir una salida con un nivel en especifico
        consolaDebug:{type:'logLevelFilter', appender:'consola', level:'debug'},
        consolaErrores:{type:'logLevelFilter', appender:'consola', level:'error'},
        archivoErrores:{type:'logLevelFilter', appender:'errorFile', level:'error'}
     },
     categories: {
        default:{
            appenders: ['consolaDebug','archivoErrores'],
            level: 'all'
        }
        //se pueden agregar más categorias según el ambiente de producción
     }
});

export const logger = log4js.getLogger();