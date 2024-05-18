//Account.ts
import { LoginUser, RegisterUser, User } from "@/constants/types";
import { account, database } from "@/lib/appwrite/config";
import { ID, Models } from "appwrite";
import { createUserInfo, getUserInfo } from "./database";
import { NextResponse } from "next/server";

/**
 * Create a new user.
 *
 * @remarks
 * This method returns a `Promise` to handle success and failure
 *
 * @param user - Information of the user to be created
 * @returns *Promise***<Models.User<Models.Preferences>>**
 */
export const createUser = async (user: RegisterUser) => {
  if (user.name === undefined) {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_name_undefined" },
      { status: 500 }
    );
  }

  if (user.email === undefined) {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_email_undefined" },
      { status: 500 }
    );
  }

  if (user.password === undefined) {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_password_undefined" },
      { status: 500 }
    );
  }

  const newUser = await account.create(
    ID.unique(),
    user.email,
    user.password,
    user.name
  );

  await createUserInfo({
    email: user.email,
    id: newUser.$id,
    name: user.name,
  });

  return newUser;
};

/**
 * Get the user *from the database*
 *
 * @remarks
 * This method returns a `Promise` to handle success and failure
 *
 * @returns *Promise***<Models.Document>**
 */
export const getUser = async () => {
  let current = await account.get();
  let userInfo = getUserInfo(current.$id);

  return userInfo;
};

export const loginUser = async (user: LoginUser) => {
  if (user.email === undefined || user.email === "") {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_email_undefined" },
      { status: 500 }
    );
  }

  if (user.password === undefined || user.password === "") {
    throw NextResponse.json(
      { error: "Internal Server Error", type: "user_password_undefined" },
      { status: 500 }
    );
  }

  let session = account.createEmailPasswordSession(user.email, user.password);

  return session;
};
