'use client';

import { useChat } from 'ai/react';

export const Chat = (props) => {

    console.log(props.agent);
    // noinspection TypeScriptValidateTypes
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            { id: 1, role: 'system', content: props.agent }
        ]
    });

    return (
        <div className="flex flex-col w-full max-w-md py-4 mx-auto stretch">
            {messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === 'user' ? 'User: ' : 'AI: '}
                    {m.content}
                </div>
            ))}

            <form onSubmit={handleSubmit} >
                <input
                    className=" text-black w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl "
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}