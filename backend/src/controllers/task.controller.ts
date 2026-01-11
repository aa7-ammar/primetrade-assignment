import { Request, Response } from "express";
import Task from "../models/Task";

/**
 * @desc    Create task
 * @route   POST /api/v1/tasks
 * @access  Private
 */
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      title,
      description,
      user: req.user!.id,
    });

    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Get logged-in user's tasks
 * @route   GET /api/v1/tasks
 * @access  Private
 */
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({ user: req.user!.id });
    return res.status(200).json(tasks);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Update task
 * @route   PUT /api/v1/tasks/:id
 * @access  Private
 */
export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user!.id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;

    await task.save();
    return res.status(200).json(task);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Delete task (Admin only)
 * @route   DELETE /api/v1/tasks/:id
 * @access  Admin
 */
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();
    return res.status(200).json({ message: "Task deleted" });
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};
