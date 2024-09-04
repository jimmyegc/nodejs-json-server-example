import supabase from '../database/supabase.js'

const cProfiling = {
    getAll: async (req, res) => {
        try {

            const { data, error } = await supabase
            .from("profiling")
            .select()
            
            res.send({ status: "OK", errorCode: "", errorMessage: "", data })                

        } catch(error) {
            res.send({ status: "ERROR", errorCode: 500, errorMessage: error.message, data: null })
        }        
    },
    getOne: async (req, res) => {        
        try {
            
            const {data, error} = await supabase
            .from('profiling')
            .select()
            .eq('id', req.params.id)            

            res.send({ status: "OK", errorCode: "", errorMessage: "", data })

        } catch (error) {
            res.send({ status: "ERROR", errorCode: 500, errorMessage: error.message, data: null })
        }                        
    },
    create: async(req, res) => {
        try {

            const { data, error } = await supabase
            .from("profiling")
            .insert({
                profiling: req.body.profiling,            
            });
            if (error) {
                res.send(error);
            }

            res.send({ status: "OK", errorCode: "", errorMessage: "", data })

        } catch (error) {
            res.send({ status: "ERROR", errorCode: 500, errorMessage: error.message, data: null })
        }            
    },
    update: async(req, res) => {        
        try {

            const { data, error } = await supabase
            .from('profiling')
            .update({
                profiling: req.body.profiling,    
            })
            .eq('id', req.params.id)
    
            if (error) {
                res.send(error);
            }

            res.send({ status: "OK", errorCode: "", errorMessage: "", data })            

        } catch (error) {
            res.send({ status: "ERROR", errorCode: 500, errorMessage: error.message, data: null })
        }
    },
    delete: async(req, res) => {     
        try {
            
            const { error } = await supabase
            .from('profiling')
            .delete()
            .eq('id', req.params.id)
            
            if (error) {
                res.send(error);
            }

            res.send({ status: "OK", errorCode: "", errorMessage: "", data })      

        } catch(error) {
            res.send({ status: "ERROR", errorCode: 500, errorMessage: error.message, data: null })
        }
        
    }
}

export default cProfiling