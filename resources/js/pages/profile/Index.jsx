import React from "react";
import route from "@chappy/utils/route";
import documentTitle from "@chappy/utils/documentTitle";

/**
 * Renders index view for profile controller.
 * @param {string} param0 Props for user and current profile image URL.
 * @returns {JSX.Element} The component for the profile index view.
 */
function Index({ user }) {
    documentTitle(`Profile Details for ${user.username}`);

    return (
        <>
            <h1 className="text-center">Profile Details for {user.username}</h1>
            <div className="col align-items-center justify-content-center mx-auto my-3 w-50">
                <table className="table table-striped  table-bordered table-hover bg-light my-5">
                    <tbody>
                        <tr>
                            <th className="text-center">First Name</th>
                            <td className="text-center">{user.fname}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Last Name</th>
                            <td className="text-center">{user.lname}</td>
                        </tr>
                        <tr>
                            <th className="text-center">E-mail</th>
                            <td className="text-center">{user.email}</td>
                        </tr>
                        <tr>
                            <th className="text-center">ACL</th>
                            <td className="text-center">{user.acl}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mb-5 d-flex justify-content-around">
                    <a href={route('profile.edit')} className="btn btn-info btn-sm mx-2 mb-3">
                        <i className="fa fa-edit"></i> Edit User Profile
                    </a>
                    <a href={route('profile.updatePassword')} className="btn btn-danger btn-sm mx-2 mb-3">
                        <i className="fa fa-key"></i> Update Password
                    </a>
                </div>
            </div>
        </>
    );
}

export default Index;