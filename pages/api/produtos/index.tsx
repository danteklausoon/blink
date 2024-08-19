import { NextApiHandler } from "next";
import { Produtos } from "../../../utils/produtos";


const handler: NextApiHandler = (req, res) => {
    res.json(Produtos);
}

export default handler;