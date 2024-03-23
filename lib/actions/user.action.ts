"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
  GetAllUsersParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
export async function updateUser(params: UpdateUserParams) {
  try {
    const { clerkId, updateData, path } = params;
    connectToDatabase();
    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);

    throw error;
  }
}
export async function deleteUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;
    connectToDatabase();
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("user dose not exits");
    }
    await Question.find({ author: user._id }).distinct("_id");
    await Question.deleteMany({ author: user._id });
    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log(error);

    throw error;
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    connectToDatabase();
    // const { page = 1, pageSize = 20, filter, searchQuery } = params;
    const users = await User.find({}).sort({ createdAt: -1 });
    return { users };
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    throw error;
  }
}
