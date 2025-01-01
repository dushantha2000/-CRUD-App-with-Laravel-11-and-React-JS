import TextInput from "@/Components/TextInput";
import React from "react";

function EditForm({ user_id }) {
   

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                    Get started today!
                </h1>
            </div>

            <form
                
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <TextInput
                        className="w-full"
                        placeholder="name"
                    />
                </div>
                <div>
                    <label htmlFor="Email" className="sr-only">
                        Email
                    </label>
                    <TextInput
                        className="w-full"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label htmlFor="Password" className="sr-only">
                        Password
                    </label>
                    <TextInput
                        className="w-full"
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
