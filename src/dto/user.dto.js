class UserDto{
    constructor({username, email, phone}){
        this.username = username,
        this.email = email,
        this.phone = phone
    };
}

export const convertToDto = (users)=>{
    if(Array.isArray(users)){
        const newData = users.map(user=>new UserDto(user));
        return newData;
    } else {
        const newData = new UserDto(users);
        return newData;
    }
}