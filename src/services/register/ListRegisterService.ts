import prismaClient from "../../prisma";

interface RegisterRequest{
    category_id: string;
    user_id: string;
}

class ListRegisterService{
    async execute({ category_id, user_id }: RegisterRequest){

        const findByCategory = await prismaClient.register.findMany({
            where: {
                category_id: category_id,
                user_id: user_id
            }
        })

        return findByCategory;

    }
}

export { ListRegisterService }

