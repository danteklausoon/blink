import { NextApiHandler } from "next";
import { Produtos } from "../../../utils/produtos";


const handler: NextApiHandler = (req, res) => {
    const { slug } = req.query

    for (let i in Produtos){
        if(Produtos[i].slug.toString() === slug){
            res.json(Produtos[i]);
            return;
        }
    }

    res.json({error: 'Usuário não encontrado'});
}

export default handler;