import TextInput from "@/Components/TextInput"; // Assuming TextInput component exists
import React from "react";
import { Head, useForm } from "@inertiajs/react";

function EditForm({ userDetails }) {
    // Ensure userDetails are provided
    if (!userDetails) {
        console.error("userDetails is undefined");
        return <div>Error: User details not provided</div>;
    }

    // Initialize form data using useForm
    const { data, setData, post, processing, errors } = useForm({
        name: userDetails.name || "",
        email: userDetails.email || "",
        password: "", // Optional password field
    });

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("users.update"), data); // Update user data via Inertia.js
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Head head-key="edit-user">
                <title>Edit User</title>
            </Head>
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Edit User</h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <TextInput
                        className="w-full"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        name="name"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">
                            {errors.name}
                        </span>
                    )}
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <TextInput
                        className="w-full"
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        name="email"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">
                            {errors.email}
                        </span>
                    )}
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password (Optional)
                    </label>
                    <TextInput
                        className="w-full"
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        name="password"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">
                            {errors.password}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        disabled={processing}
                    >
                        {processing ? "Saving..." : "Save"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
