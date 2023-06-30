import { createContext } from "react";
import { fakeFetch } from "../api/fakefetch4";
import { useState , useEffect } from "react";



export const FoodContext = createContext()

const FoodProvider = ({children}) => {
    const [foods , setFoods ] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [cartItems , setCartItems] = useState([])
    const [isVeg , setIsVeg] = useState(false)
    const [isSpicy , setIsSpicy] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedOption, setSelectedOption] = useState("option1")
    const [searchResult , setSearchResult] = useState([])


    const getMenuData = async() => {
       try{
        const {data , status} = await fakeFetch('https://example.com/api/menu')
          if(status === 200){
            setFoods(data.menu)
            setIsLoading(false)
          }
       }catch(err){
        console.error(err)
       }
    }

    useEffect(() => {
        getMenuData()
    },[])


    useEffect(() => {
     const filterResult = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
     console.log(filterResult)
     setSearchResult(filterResult)
    }, [foods,  search])
   


   useEffect(() => {
      const filterResult  = isVeg ? foods.filter(food => food.is_vegetarian) : foods
      setSearchResult(filterResult)
   },[isVeg ])
  
   
   useEffect(() => {
    const filterResult  = isSpicy ? foods.filter(food => food.is_spicy) : foods
    setSearchResult(filterResult)
   },[isSpicy])

  

   useEffect(() => {
    const sortResult = [...foods].sort((a, b) => a.price - b.price)
    setSearchResult(sortResult)
   },[selectedOption])



    const handleCart = (food) => {
       if(cartItems.some(cart => cart.id === food.id )){
        setCartItems(cartItems.filter(cart => cart.id !== food.id))
       }else{
        setCartItems([...cartItems , food])
       }
    }


    return(
        <FoodContext.Provider value = {{foods , isLoading , handleCart , cartItems 
            , isVeg , setIsVeg , isSpicy , setIsSpicy  , search , setSearch , searchResult , 
            selectedOption , setSelectedOption
        }}>
          {children}
        </FoodContext.Provider>
    )
}

export default FoodProvider

