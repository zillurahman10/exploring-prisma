import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Post Created Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);
    res.send({
      success: true,
      message: "Posts retrived Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  insertIntoDB,
  getAllPost,
};
