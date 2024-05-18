import { UserExtended } from "@/constants/types";
import { appwriteConfig, database } from "@/lib/appwrite/config";
import { NextResponse } from "next/server";

/**
 * Create a new user in the database with necessary info.
 *
 *
 * @param user - Necessary user informations
 * @returns *Promise***<Models.Document>**
 */
export const createUserInfo = async (user: UserExtended) => {
  if (user.id === null) {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_id_undefined" },
      { status: 500 }
    );
  }

  if (user.email === null) {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_email_undefined" },
      { status: 500 }
    );
  }

  if (user.name === null) {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_name_undefined" },
      { status: 500 }
    );
  }

  let userInfo = await database.createDocument(
    appwriteConfig.database,
    "users",
    user.id,
    {
      email: user.email,
      name: user.name,
    }
  );

  return userInfo;
};

/**
 * Get user informations form ID
 *
 * @remarks
 * The ID of the document is the same as `user.$id`.
 *
 *
 * @param id - User id
 * @returns *Promise***<Models.Document>**
 */
export const getUserInfo = async (id: string) => {
  if (id === undefined || id === "") {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_invalid" },
      { status: 500 }
    );
  }

  let userInfo = await database.getDocument(
    appwriteConfig.database,
    "users",
    id
  );

  return userInfo;
};
