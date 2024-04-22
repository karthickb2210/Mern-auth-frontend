import { useContext } from "react"
import { UserContext } from "../../context/userContext"
function Dashboard() {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
<div>
    <h1>DashBoard</h1>
    {!!user && ( <h1> Hii {user.data.name} </h1> )} 
</div>
  )
}

export default Dashboard