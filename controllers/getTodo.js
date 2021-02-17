const getTodo = async(req,res,pool)=>{
    try{
        const {id} = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1',[id]);
        res.json(todo.rows[0]);
    }catch(error){
        console.error(error.message); 
    }
};

module.exports = getTodo; 