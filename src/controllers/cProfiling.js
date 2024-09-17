import supabase from '../database/supabase.js'
import cHistorial from './cHistorial.js'

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
                active: req.body.active,
                companyId: req.body.companyId,
                config: req.body.config
            }).select("id");
            
            cHistorial.create({
                 idCatalog: data[0].id,
                 date: new Date(),
                 user: "Jimmy García",
                 event: "Created",
                 comments: ""
             })
 
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
                active: req.body.active,
                companyId: req.body.companyId,
                config: req.body.config
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