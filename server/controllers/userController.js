import { createError } from "../error.js";
import User from "../models/User.js";

export const updateUser = async (request, response) => {
  if (request.params.id == request.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(request.params.id, {
        $set: request.body,
      });
      response.status(200).json({updatedUser})
    } catch (error) {
      next(error);
    }
  } else {
      response.status(401).json({
        message:"please use your account"
      })
  }
};

export const deleteUser = async (request, response) => {};

export const getUser = async (request, response) => {};

export const subscribe = async (request, response) => {};

export const unsubscribe = async (request, response) => {};

export const like = async (request, response) => {};

export const dislike = async (request, response) => {};
