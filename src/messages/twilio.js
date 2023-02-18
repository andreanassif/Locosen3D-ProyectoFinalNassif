import {config} from "../config/config.js"
import twilio from "twilio";

const TWILIO_ID = config.TWILIO_ID;
const TWILIO_TOKEN= config.TWILIO_TOKEN;
export const TWILIO_PHONE= config.TWILIO_PHONE;
export const TWILIO_WAP= config.TWILIO_WAP;
export const ADMIN_WAP= config.ADMIN_WAP;

export const twilioClient = twilio(TWILIO_ID ,TWILIO_TOKEN);
