import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.API_KEY

app.use(cors()) 

app.get('/', async (req, res) => {
    const { city, cep } = req.query

    if (!city && !cep) return res.status(400).json({ error: 'Forneça o CEP ou nome da cidade' })

    try {
        let url = `${API_URL}?appid=${API_KEY}&units=metric&lang=pt_br`

        if (cep) {
            url += `&zip=${cep},br`
        }
        if (city) {  
            url += `&q=${city},br`
        }
        const response = await axios.get(url)
        const climate = response.data

        res.json({
            city: climate.name,
            temp: climate.main.temp,
            description: climate.weather[0].description,
            humidity: climate.main.humidity,
            wind: climate.wind.speed,
            icon: `http://openweathermap.org/img/w/${climate.weather[0].icon}.png` // Corrigido "clima" para "climate"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Falha ao consultar a API" })
    }
})

app.listen(4200, () => {
    console.log('Servidor rodando em http://localhost:4200')
})
