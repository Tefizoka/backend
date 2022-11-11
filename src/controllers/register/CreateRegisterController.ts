import { Request, Response } from "express";
import { CreateRegisterService } from "../../services/register/CreateRegisterService";

class CreateRegisterController{
    async handle(req: Request, res: Response){

        const { name, price, description, category_id} = req.body;

        const createRegisterService = new CreateRegisterService();

        if(!req.file){
            throw new Error("error upload file")
        }else{

            const { originalname, filename: banner } = req.file;

            const register = await createRegisterService.execute({
                name,
                description,
                banner,
                category_id
            });
    
            return res.json(register)
        }

    }
}


export { CreateRegisterController }