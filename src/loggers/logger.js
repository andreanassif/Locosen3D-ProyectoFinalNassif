import log4js from "log4js";

//config libreria

log4js.configure({
  //definir salida de datos: como se almacena y muestran los mensajes
  appenders: {
    consola: { type: "console" },
    errorFile: { type: "file", filename: "./src/logs/errores.log" },
    warnFile: { type: "file", filename: "./src/logs/warn.log" },
    //definir una salida con un nivel en especifico
    consolaDebug: {
      type: "logLevelFilter",
      appender: "consola",
      level: "debug",
    },
    consolaErrores: {
      type: "logLevelFilter",
      appender: "consola",
      level: "error",
    },
    archivoErrores: {
      type: "logLevelFilter",
      appender: "errorFile",
      level: "error",
    },
    archivoWarn: {
      type: "logLeverFilter",
      appender: "warnFile",
      level: "warn",
    },
  },
  categories: {
    default: {
      appenders: ["consolaDebug"],
      level: "all",
    },
    error: {
      appenders: ["archivoErrores"],
      level: "error",
    },
  },
});

const logger = log4js.getLogger();
const loggerError = log4js.getLogger("error");
const loggerWarn = log4js.getLogger("warn");

export { logger, loggerError, loggerWarn };