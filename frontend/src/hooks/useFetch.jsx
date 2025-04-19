import React, { useEffect, useState } from 'react';
import BASE_URL from "../utils/config";


const useFetch = (BASE_URL) => {
  const [apiData, setApiData] = useState();
    const [error, setError] = useState()
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_URL)
                
                if(!response.ok){
                    setError('failed to fetch') 
                    // toast.error(error)           
                }
        
                const result = await response.json()
                setApiData(result.data)
                
            } catch (error) {
                
            }
          }

          fetchData();
    }, [BASE_URL])
  
    return {apiData, error}
}

export default useFetch
