const register = async(req,res,pool,bpcrypt) =>{
    try{
        const {email,password,name} = req.body; 
        const date = new Date();
        if(!email || !name || !password){
            return res.status(400).json("incorrect form submission"); 
        }

        const saltRound = 10; 
        const salt = await bpcrypt.genSalt(saltRound); 
        const hash = await bpcrypt.hash(password,salt); 
        const newLogin = await pool.query('INSERT INTO login (email,hash) VALUES($1, $2) RETURNING email',[email,hash]);
        const newUser = await pool.query('INSERT INTO users (name,email,joined) VALUES ($1,$2,$3) RETURNING *',[name,newLogin.rows[0].email,date]);
        res.json(newUser.rows[0]); 
        
    }catch(error){
        console.error(error.message); 
    }
}

module.exports=register;