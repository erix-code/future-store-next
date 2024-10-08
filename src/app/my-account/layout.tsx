interface MyAccountLayoutProps {
    children: React.ReactNode;
    orderInfo: React.ReactNode;
    userInfo: React.ReactNode;
}

export default function MyAccountLayout(props: MyAccountLayoutProps) {
    console.log(props);
    return (
        <div>
            <h1>My Account</h1>
            <section>
                <h2>User Info</h2>
                {props.userInfo}
            </section>
            <section>
                <h2>Order Info</h2>
                {props.orderInfo}
            </section>
        </div>
    )
}