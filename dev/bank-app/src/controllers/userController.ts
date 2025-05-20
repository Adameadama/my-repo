import { Request, Response } from 'express';
import { User } from '../models/userModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user', details: err });
  }
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

