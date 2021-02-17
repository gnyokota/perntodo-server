const createTodo = async(req,res, pool)=>{
    try{
        const {description} = req.body;
        const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    }catch(error){
        console.error(error.message);
    }  
}

module.exports = createTodo;
