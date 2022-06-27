const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
    createUser: (data,callback)=>{
        const RegisterQuery = `Insert into User(Name,Email,Password) values (?,?,?)`;
        DbConnection.query(RegisterQuery,
            [data.Name,
             data.Email,
             data.Password
            ],
            (err,result)=>{
                if(err){
                    console.log(err)
                    callback(err)
                }
                else{
                 console.log(result)
                 return callback(null,result);
                }
            }
        );   
    },
    LoginUser: (data,callback)=>{
        const LoginQuery = 'Select* from User where Email = ?'
        DbConnection.query(LoginQuery,[data.Email],(err,result)=>{
            if(err){
                console.log(err)
                callback(err)
            }
            else{
                console.log(result)
                callback(null,result)
            }
        })
    }
}