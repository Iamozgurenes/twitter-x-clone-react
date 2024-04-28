import Premiumm from "~/components/button/premiumm";
import Search from "./search";
import Topics from "~/components/topics";

export default function RightBar (){
return (

    <>
<aside className="w-[350px] mr-2.5">
       <Search/>

       <Premiumm/>

       <Topics/>
</aside>



    </>
)
}