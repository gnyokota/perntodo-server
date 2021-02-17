const updateTodo = async(req,res,pool)=>{
    try{
        const {id} = req.params;
        const {description} = req.body; 
        const updatedTodo = await pool.query('UPDATE todo SET description=$1 WHERE todo_id=$2', [description,id]);
        res.json('Todo was updated');
    }catch(error){
        console.error(error.message); 
    }
};

module.exports = updateTodo; 