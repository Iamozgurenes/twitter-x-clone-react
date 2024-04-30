import Button from "~/components/button";
import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { whoFollowUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollow() {
    const account = useAccount();
    return(
        <SidebarSection title="Kimi takip etmeli" more={`/connet_people?user_id=${account.id}`}>

            {whoFollowUsers.map(user => <UserCard user={user} key={user.id}/>)}

        </SidebarSection>
    )
}