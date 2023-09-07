import React from 'react'
import { useUserdataQuery,useUserpostQuery } from './Features/reduce'

const App = () => {
  
  const {data:userdata} = useUserdataQuery()

  const {data:userdataid} = useUserpostQuery(1)

   console.log('data',userdata)

   console.log('dataid',userdataid)

  if (!userdata) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }


   

  return (
    <div>
       {
         userdata.map((item,index)=>{
            return(<div>
              <ul key = {index}>
                  <li>{item.name}</li>
              </ul>
              </div>)
         })
       }
    </div>
  )
}

export default App