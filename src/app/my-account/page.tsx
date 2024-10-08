import {validateAccessToken} from "@/utils/auth/validateAccessToken";
import {getCustomerOrders} from "@/app/services/shopify/graphql/customer";

export default async function MyAccountPage() {
    const customer = await validateAccessToken();
    const orders = await getCustomerOrders();
    console.log(orders);

    return (
        <div>
            {customer ? <h1>Welcome {customer.firstName} {customer.lastName}</h1> : <h1>Not logged in</h1>}
            <section>
                <h2>Orders</h2>
                {orders.orders.map((order: any) => {
                    return (
                        <div key={order.id}>
                            <h3>Order {order.name}</h3>
                            <h3>Order {order.orderNumber}</h3>
                            <p>Total: {order.totalPrice}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
