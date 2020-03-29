import {useEffect,useState,useRef} from 'react';
import yelp from './../api/yelp';
export default () => {
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const componentIsMounted = useRef(true);
    const searchApi = async (searchTerm) =>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'new york'
                }
            });
           
            if(componentIsMounted.current){
                setRestaurants(response.data.businesses);
                setLoading(false);
                console.log('Data response success');
            }
        }catch(err){
            setErrorMessage(err)
        }
    }

    useEffect(() => {
        searchApi('pasta');
        return () =>{
            componentIsMounted.current = false;
        }
    }, [])

    return [loading,searchApi,restaurants,errorMessage];
}