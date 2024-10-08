import {validateAccessToken} from "@/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
    const customer = await validateAccessToken();

    return (
        <div>
            {customer ? <h1>Welcome {customer.firstName} {customer.lastName}</h1> : <h1>Not logged in</h1>}
        </div>
    )
}
