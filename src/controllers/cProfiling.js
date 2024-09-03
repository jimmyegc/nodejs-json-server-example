import supabase from '../database/supabase.js'

const cProfiling = {
    getAll: async (req, res) => {
        const { data, error } = await supabase
        .from("profiling")
        .select()
        
        res.send({ status: "OK", data })                
    },
    getOne: async (req, res) => {
        console.log(req.params.id)

        const {data, error} = await supabase
        .from('profiling')
        .select()
        .eq('id', req.params.id)
        
        res.send({ status: "OK", data })
    },
    create: async(req, res) => {
        const { error } = await supabase
        .from("profiling")
        .insert({
            nombre: req.body.nombre,            
        });
        if (error) {
            res.send(error);
        }
        res.send("created!!");
    },
    update: async(req, res) => {        
        const { error } = await supabase
        .from('profiling')
        .update({
            nombre: req.body.nombre,    
        })
        .eq('id', req.params.id)

        if (error) {
            res.send(error);
        }
        res.send("updated!!");
        },
    delete: async(req, res) => {     
        const { error } = await supabase
        .from('profiling')
        .delete()
        .eq('id', req.params.id)
        
        if (error) {
            res.send(error);
        }
        res.send("deleted!!")
    }
}

export default cProfiling