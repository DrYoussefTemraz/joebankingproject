'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./Appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession({
            email,
            password
        })

        const cookieStore = await cookies();
        cookieStore.set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            secure: true,
        });

        return parseStringify(session)

    } catch (error) {
        console.error('Error signing in:', error)

    }

}

export const signUp = async (userData: SignUpParams) => {
    const { firstName, lastName, email, password } = userData
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create({
            userId: ID.unique(),
            email,
            password,
            name: `${firstName} ${lastName}`
        });

        const session = await account.createEmailPasswordSession({
            email,
            password
        });

        const cookieStore = await cookies();
        cookieStore.set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            secure: true,
        });
        return parseStringify(newUserAccount)
    } catch (error) {
        console.error('Error signing up:', error)
        // Rethrow the error to be handled by the component
        throw error;
    }

}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        // console.log(user)
        return parseStringify(user)
    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();

        // Delete the current session
        await account.deleteSession('current');

        // Clear the cookie
        const cookieStore = await cookies();
        cookieStore.delete('appwrite-session');

        return true;
    } catch (error) {
        console.error('Error logging out:', error);
        return false;
    }
}
