import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Price(props) {
    //use your api key
    const apiKey = "pk_4a1b253720d8423c95ffc293d65f75d7"

    // Grabbing the Currency symbol from the URL Params
    const { symbol } = useParams()
    //or
    //   const params = useParams()
    //   const symbol = params.symbol
    
    //create url
    const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${apiKey}`

    //state to hold coin data
    const [coin, setCoin] = useState(null)

    //
    const getCoin = async () => {
        const data = await fetch(url).then(res => res.json())
        setCoin(data)
    }
    //or
    // const getCoin = async () => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setCoin(data)
    //   }

    useEffect(() => {getCoin()}, [])

    
    //function for loaded
    function loaded() {
        return <div>
            <h1>{coin.symbol}</h1>
            <h2>{coin.price}</h2>
        </div>
    }

    const loading = () => {
        return <div>
            <h2>LOADING...</h2>
        </div>
    }


    return coin ? loaded() : loading()
}