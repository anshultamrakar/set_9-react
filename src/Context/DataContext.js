import { createContext } from "react";
import {useState , useEffect} from "react"
import {fakeFetch} from "../api/fakefetch"

export const DataContext = createContext()

const DataProvider = ({children}) => {
   const [emails , setEmails] = useState([])
   const [sentEmails , setSentEmails] = useState([])
   const [isLoading , setIsLoading] = useState(true)


    const getEmails = async() => {
        try{
            const {data , status } = await fakeFetch("https://example.com/api/allemails") 
           if(status === 200){
            setEmails(data.emails)
            setSentEmails(data.sentEmails)
            setIsLoading(false)
           }
        }catch(err){
            console.error(err)
        }
    } 

    const handleMarkRead = (id) => {
     const emailList = emails.map(email => email.id === id ? {...email , read : !email.read} : email)
     setEmails(emailList)
    }



    useEffect(() => {
        getEmails()
    },[])




    return(
        <DataContext.Provider value = {{ emails , isLoading ,handleMarkRead , sentEmails }}>
         {children}
        </DataContext.Provider>
    )
}

export default DataProvider