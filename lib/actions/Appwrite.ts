"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  // console.log("Appwrite Endpoint:", process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);

  const cookieStore = await cookies();
  const session = cookieStore.get("appwrite-session"); if (!session || !session.value) {
    throw new Error("No session");
  }
  // attach the session to the client
  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },

  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    // in admin we set the key 
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client)
    },
    get user() {
      return new Users(client)
    }
  };
}
