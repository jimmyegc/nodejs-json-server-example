import supabase from '../database/supabase.js'

const cHistorial = {
    create: async(event) => {
        try {
                        
            const { data, error } = await supabase
            .from("historial")
            .insert({
                idCatalog: event.idCatalog,
                date: event.date, 
                event: event.event,
                user: event.user, 
                comments: event.comments
            });
            /*if (error) {
                res.send(error);
            }
            res.send({ status: "OK", errorCode: "", errorMessage: "", data })*/
            return true
        } catch (error) {
            console.log(error)
            return false
            //res.send({ status: "ERROR", errorCode: 500, errorMessage: error.message, data: null })
        }            
    },

}

export default cHistorial