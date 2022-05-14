import {Link} from  "react-router-dom"

export default function Currencies(props) {
    
        const currencies = [
          { name: "Bitcoin", symbol: "BTCUSD" },
          { name: "Litecoin", symbol: "LTCUSD" },
          { name: "Ethereum", symbol: "ETHUSD" },
          { name: "Zcash", symbol: "ZECUSD" },
          { name: "Bitcoin Cash", symbol: "BCHUSD" },
        ]


    return (
        <div className="currencies">
            {currencies.map(({ name, symbol }, index) => {
                return (<Link key={index} to={`/price/${symbol}`}>
                    <h2>{name}</h2>
                </Link>)
            } )
            }
        </div>
    );
}
