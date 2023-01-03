


const output ={
    home :  (req, res)=>{
        res.render("home/index")
    },
    
    login :  (req,res)=>{
        res.render("home/login")
    }
}

const users = {
    id:["ctd0606", "김개발" ,"최개발"],
    password :["1234" , "1234" , "123456"]
}

const process ={
    login : (req,ree) =>{
        const id = req.body.id,
        password =req.body.password
        console.log(id, password)

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx]===password){
                return res.json({
                    success : true,
                })
            }
        }
        return res.json({
            success: false,
            msg: "로그인을 실패하셨습니다",
        })
    }
}

module.exports={
    output,
    process
};