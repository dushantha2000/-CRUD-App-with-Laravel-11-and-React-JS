import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/Table";
import React from "react";

{/* if you need to Head title change ? then we need to  import to these  */}
import {Head} from '@inertiajs/react';   

export default function Users({ users }) {
    {/*check data from users database . if  don't have any data from user database then  will send  this error massage  */}
    if (!Array.isArray(users)) {
        console.error("users prop is not an array");
        return null;
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User Management
                </h2>
            }
        >
            {/*Head title name  change to Users */}
            <Head title="Users"/>

            {/*That means get to the user data from Table.jsx */}
            <Table users={users} />
        </AuthenticatedLayout>
    );
}
