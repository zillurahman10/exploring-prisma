import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile created/updated successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUser();
    res.send({
      success: true,
      message: "Users retrived successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getAllUser,
  getSingleUser,
};
