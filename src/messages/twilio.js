import {options} from "../config/config.js"
import twilio from "twilio";

const TWILIO_ID = options.TWILIO_ID;
const TWILIO_TOKEN= options.TWILIO_TOKEN;
export const TWILIO_PHONE= options.TWILIO_PHONE;
export const TWILIO_WAP= options.TWILIO_WAP;
export const ADMIN_WAP= options.ADMIN_WAP;

export const twilioClient = twilio(TWILIO_ID ,TWILIO_TOKEN);
