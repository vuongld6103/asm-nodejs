import Product from "../models/Product"
import productValidation from "../validations/products"

export const create = async (req, res) => {
    try {
        const body = req.body
        const { error } = productValidation.validate(body)
        if (error) {
            return res.status(400).json({
                message:error.details[0].message,
            })
        }
        const data = await Product.create(body)
        if (!data) {
            return res.status(404).json({
                message:"Failed"
            })
        }
        return res.status(200).json({
            message: "Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const body = req.body
        const data = await Product.find({})
        if (!data) {
            return res.status(404).json({
                message:"Failed"
            })
        }
        return res.status(200).json({
            message: "Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
    }
}
export const getDetail = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findById(id)
        if (!data) {
            return res.status(404).json({
                message:"Failed"
            })
        }
        return res.status(200).json({
            message: "Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
    }
}
export const remove = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const data = await Product.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).json({
                message:"Failed"
            })
        }
        return res.status(200).json({
            message: "Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
    }
}
export const update = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const { error } = productValidation.validate(body)
        if (error) {
            return res.status(400).json({
                message:error.details[0].message,
            })
        }
        const data = await Product.findByIdAndUpdate(id,body,{new:true})
        if (!data) {
            return res.status(404).json({
                message:"Failed"
            })
        }
        return res.status(200).json({
            message: "Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
    }
}