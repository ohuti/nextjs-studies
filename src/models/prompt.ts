import { Schema, model, models } from 'mongoose'

const PromptSchema = new Schema({
    prompt: {
        type: String,
        required: [true, 'Prompt is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    tasg: {
        type: String
    }
})

export const Prompt = models.Prompt || model('Prompt', PromptSchema)
