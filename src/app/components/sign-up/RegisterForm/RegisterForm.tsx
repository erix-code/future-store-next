"use client";
import {useState} from "react";
import {handleRegister} from "@/actions";

export const RegisterForm = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const  handleSubmit = async (event) => {
        event.preventDefault();
        const formData= new FormData(event.target);
        const response = await handleRegister(formData);
        console.log(response);
    }
    return (
        <form className={"flex w-full justify-center pt-32"} onSubmit={handleSubmit}>
            <div className={"w-6/12"}>
                <h1 className="text-xl bg-gradient-to-r from-pink-600 to-indigo-600 md:text-5xl  text-transparent bg-clip-text font-bold pb-20">
                    New Account
                </h1>

                <div className={"grid grid-cols-2 gap-y-10 mb-10 gap-x-5 text-lg"}>
                    <input type="text" className={"col-span-1 bg-transparent border-b-2 border-gray-500"}
                           placeholder={"Name"} name={"firstName"}/>
                    <input type="text" className={"col-span-1 bg-transparent border-b-2 border-gray-500"}
                           placeholder={"Lastname"} name={"lastName"}/>
                    <input type="text" className={"col-span-2 bg-transparent  border-b-2 border-gray-500"}
                           placeholder={"Email"} name={"email"}/>
                    <input type="text" className={"col-span-2 bg-transparent  border-b-2 border-gray-500"}
                           placeholder={"Phone Number"} name={"phone"}/>
                    <input type="password" className={"col-span-2 bg-transparent  border-b-2 border-gray-500"}
                           placeholder={"Password"} name={"password"} />
                    <input type="password" className={"col-span-2 bg-transparent  border-b-2 border-gray-500"}
                           placeholder={"Re type password"} name={"repeatPassword"}/>
                    <button type={"submit"}
                            className={"font-bold uppercase col-span-2 mt-10 mb-32 border rounded-3xl p-3 shadow hover:shadow-xl " +
                                "hover:shadow-pink-950 hover:bg-gradient-to-r shadow-pink-600 hover:from-pink-600 hover:to-indigo-600"}>Crear cuenta
                    </button>
                </div>
                {errors.length > 0 &&
                    <div>
                        {errors.map((error, index) => {
                            return <p key={index} className={styles.NewAccountForm__error}>{error}</p>
                        })}
                    </div>
                }

            </div>

        </form>
    )
}