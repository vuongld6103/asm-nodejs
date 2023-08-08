import Joi from "joi";

const productValidation = Joi.object({
    name: Joi.string().min(6).max(255),
    price: Joi.number().min(0),
    desc:Joi.string().required()
})

export default productValidation;