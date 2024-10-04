import { Chat } from '../components/chat/chat';
import {getProducts} from "@/app/services/shopify";
import { createAgent } from "@/utils/openai/createAgent";
export default async function ChatPage() {
    const products = await getProducts();
    const productTitles = products.map(product => product.title);
    const titles = productTitles.join("\n");
    const agent = createAgent(titles);
    return (
        <div>
            <Chat agent={agent}></Chat>
        </div>
    )
}