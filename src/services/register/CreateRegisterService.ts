import prismaClient from "../../prisma";

interface RegisterRequest{
    name: string,
    description: string,
    banner: string,
    category_id: string,
    user_id: string

}

class CreateRegisterService{
    async execute({name, description, banner, category_id, user_id}: RegisterRequest ){ 
        
        const register = await prismaClient.register.create({
            data:{
                name: name,
                description: description,
                banner: banner,
                category_id: category_id,
                user_id: user_id
            }

        })

        return register;
    }
}

export { CreateRegisterService }