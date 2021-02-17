const signin = async(req,res,pool,bcrypt) =>{
    try{
        const {password,email} = req.body; 
        if(!email || !password){
            return res.status(400).json('incorrect form submission'); 
        }
            const dbLog = await pool.query('SELECT * FROM login WHERE email = $1', [email]); 
            const isValidHash = await bcrypt.compare(password, dbLog.rows[0].hash); 

            if(isValidHash){
                try{
                    const dbUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
                    return res.json(dbUser.rows[0])
                }catch(err){
                    console.error(err.message);
                }
            }else{
                res.status(400).json('wrong credentials');
            }
    }catch(error){
        console.error(error.message); 
    }
}

module.exports = signin; 