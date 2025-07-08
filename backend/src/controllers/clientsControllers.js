import clientsModel from "../models/clients.js";

const clientsControllers = {};

//SELECT 
clientsControllers.getAllClients = async (req, res) => {
    try{
      const clients = await clientsModel.find();
      res.status(200).json(clients)
    } catch(error) {
      console.log("error"+error)
      res.status(500).json({ message: "Internal server error"})
    }  
  };

//SELECT ID
clientsControllers.getAllClientsId = async (req, res) => {
  try{
    const clients = await clientsModel.findById(req.params.id);
    res.status(200).json(clients)
  } catch(error) {
    console.log("error"+error)
    res.status(500).json({ message: "Internal server error"})
  }  
};

//INSERT
clientsControllers.insertClients = async (req, res) => {
    try {
        //Solicitar los datos
        const { name, email, password, phone, age } = req.body;

        //Guardamos en la base de datos
        const newClients = new clientsModel({ name, email, password, phone, age })
        await newClients.save()

        res.status(200).json( {message: "sale saved"})
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Internal server error"})   
    }
};


//Delete 
clientsControllers.deleteClients = async (req, res) => {
    try {
        const deletedClients = await clientsModel.findByIdAndDelete(req.params.id);

        if (!deletedClients) {
            return res.status(404).json({ message: "client not found" });
        }
        res.json({ message: "product deleted" });

    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Internal server error"})    
    }
};

//UPDATE
clientsControllers.updateClients = async (req, res) => {
    try {
        const { name,email, password, phone, age } = req.body;
        
        await clientsModel.findByIdAndUpdate(
            req.params.id,
            {
                name, email, password, phone, age 
            },
            { new: true }
        )
          res.json({ message: "clients update" });
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Internal server error"})
    }
};

export default clientsControllers;