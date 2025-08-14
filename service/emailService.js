import {createTransport} from "nodemailer";
export const sendEmail=(email)=>{
    const transport = createTransport({
        host:"hassanmuhammad12187@gmail.com",
        port:587,
        secure:false,
        auth:{},

    });
   (async ()=>{
    const info = await transport.sendMail({
        from:'"Urban Harmony" <hassanmuhammad12187@gmail.com>',
        to:email,
        subject:"Email Verification",
        html:``
    })
    console.log(info.messageId);
   })
}