import reserveModel from "../models/reserve.js";

const reserveControllers = {};

//SELECT 
reserveControllers.getReserve = async (req, res) => {
    try{
      const reserve = await reserveModel.find().populate("idClient");
      res.status(200).json(reserve)
    } catch(error) {
      console.log("error"+error)
      res.status(500).json({ message: "Internal server error"})
    }  
  };


//SELECT ID
reserveControllers.getReserveId = async (req, res) => {
    try{
      const reserve = await reserveModel.findById(req.params.id).populate("idClient");
      res.status(200).json(reserve)
    } catch(error) {
      console.log("error"+error)
      res.status(500).json({ message: "Internal server error"})
    }  
  };


//INSERT
reserveControllers.insertReserve = async (req, res) => {
    try {
        //Solicitar los datos
        const { clientId, vehicle, service, status } = req.body;

        //Guardamos en la base de datos
        const newReserve = new reserveModel({ clientId, vehicle, service, status  })
        await newReserve.save()

        res.status(200).json( {message: "sale saved"})
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Internal server error"})   
    }
};

//Delete 
reserveControllers.deleteReserve = async (req, res) => {
    try {
        const deletedReserve = await reserveModel.findByIdAndDelete(req.params.id);

        if (!deletedReserve) {
            return res.status(404).json({ message: "client not found" });
        }
        res.json({ message: "reserve deleted" });

    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Internal server error"})    
    }
};

//UPDATE
reserveControllers.updateReserve = async (req, res) => {
    try {
        const { clientId, vehicle, service, status } = req.body;
        
        await reserveModel.findByIdAndUpdate(
            req.params.id,
            {
                clientId, vehicle, service, status 
            },
            { new: true }
        )
          res.json({ message: "clients update" });
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Internal server error"})
    }
};

export default reserveControllers;