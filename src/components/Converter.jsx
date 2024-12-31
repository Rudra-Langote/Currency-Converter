import React, { useCallback, useEffect, useState } from 'react';
import currencyList from '../Hooks/useCurrencyChange'

const CurrencyConverter = () => {

    const listt = currencyList();
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [resultAmount, setResultAmount] = useState()
    const [resultFrom, setResultFrom ] = useState()
    const [resultTo, setResultTO] = useState()

 
    
    const convertCurrency = () => {
        
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ALY49Gwa7ccO0hdp4nLDePS91T0etyZ5B1W3VntZ&base_currency=${fromCurrency}&currencies=${toCurrency}`)
            .then((res) => res.json()).then((data) => {setConvertedAmount((amount * data.data[toCurrency]).toFixed(2))})


        setResultAmount(amount)
        setResultFrom(fromCurrency)
        setResultTO(toCurrency)
    };
   

    return (
        <div className="flex   flex-col mx-5 items-center mt-20 md:mt-10 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-md w-full max-w-md md:mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-gray-100">Currency Converter</h1>
            <div className="w-full">
                <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 mb-4 border bg-gray-700 text-gray-100  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex  justify-evenly space-x-2 mb-4">
                    <div className=" w-1/2 flex flex-col">
                        <label className="text-gray-100">From:</label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {listt && listt.map(item => <option key={item} value={item}>{item}</option>)}

                        </select>

                    </div>
                    <div className=' w-1/2 flex flex-col'>
                        <label className="text-gray-100">To:</label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {listt && listt.map(item => <option key={item} value={item}>{item}</option>)}

                        </select>
                    </div>

                </div>
                <button
                    onClick={convertCurrency}
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Convert
                </button>
            </div>
            {convertedAmount && (
                <div className="mt-4 text-lg font-semibold text-gray-100">
                    {resultAmount} {resultFrom} = {convertedAmount} {resultTo}
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;
