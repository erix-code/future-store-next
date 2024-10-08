import {validateAccessToken} from "@/utils/auth/validateAccessToken";
import {getCustomerOrders} from "@/app/services/shopify/graphql/customer";

export default async function MyAccountPage() {
    const customer = await validateAccessToken();
    const orders = await getCustomerOrders();
    console.log(orders);

    return (
        <div className={"w-full"}>
            {customer ? <h1>Welcome {customer.firstName} {customer.lastName}</h1> : <h1>Not logged in</h1>}
            <section>

            </section>
        </div>
    )
}
