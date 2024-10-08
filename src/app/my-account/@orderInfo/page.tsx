import {getCustomerOrders} from "@/app/services/shopify/graphql/customer";

export default async function MyAccountPage() {
    const orders = await getCustomerOrders();

    return (
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
    )
}
