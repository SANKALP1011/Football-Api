const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
    createUser: (data,callback)=>{
        const RegisterQuery = `Insert into User(Name,Email,Password) values (?,?,?)`;
        DbConnection.query(RegisterQuery,
            [data.name,
             data.email,
             data.password
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
    }
}