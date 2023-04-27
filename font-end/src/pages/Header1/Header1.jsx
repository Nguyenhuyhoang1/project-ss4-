import { useState } from "react";
import {Room} from "../../Room";
function Header1(){
    const [query, setQuery] = useState("");
    console.log(Room.filter(item=>item.Name.includes("Phòng 02")));

    return(
            <>
            <input type="text" placeholder="Search..." className="seatch" onChange={(e) => setQuery(e.target.value)} />
            
      
            </>
    )
}
export default Header1;