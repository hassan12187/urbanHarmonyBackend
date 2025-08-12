export const isAlphanumeric=(username)=>{
    return  username.length >= 6 && /^[a-zA-Z0-9]+$/g.test(username);
}