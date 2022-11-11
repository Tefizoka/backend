import { Request, Response } from "express";
import { ListRegisterService } from "../../services/register/ListRegisterService";

class ListRegisterController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string;
        const user_id = req.query.user_id as string;

        const listRegister = new ListRegisterService();

        const registers = await listRegister.execute({
            category_id,
            user_id
        });

        return res.json(registers);
    }
}

export { ListRegisterController }

