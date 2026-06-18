const express = require('express')
const { supabase } = require('../supabase')

const router = express.Router()

router.get('/players', async (req, res) => {
    const { data, error } = await supabase.from('players').select('*')

    if (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

    res.json({ success: true, data })
})

router.get('/news', async (req, res) => {
    const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('news_date', { ascending: false })

    if (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

    res.json({ success: true, data })
})

router.get('/matches', async (req, res) => {
    const { data, error } = await supabase.from('matches').select('*')

    if (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

    res.json({ success: true, data })
})

router.get('/stats', async (req, res) => {
    const { data, error } = await supabase.from('stats').select('*').single()

    if (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

    res.json({ success: true, data })
})

router.get('/standings', async (req, res) => {
    const { data, error } = await supabase
        .from('standings')
        .select('*')
        .order('position', { ascending: true })

    if (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

    res.json({ success: true, data })
})

router.get('/gallery', async (req, res) => {
    // Assuming your table has a 'created_at' column to show newest photos first
    const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

    res.json({ success: true, data })
})

module.exports = router
