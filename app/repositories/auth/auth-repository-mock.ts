import { User } from "../../models/user";
import { AuthRepository, LoginInput, RegisterInput } from "./auth-repository";

export const demoUser: User = {
  id: "user-123",
  name: "Demo User",
  email: "demo@securesend.app",
  avatarUrl: "https://i.pravatar.cc/150?img=1",
  password: "password123",
};

const MOCK_USER_EMAIL = "demo@securesend.app";
const MOCK_USER_PASSWORD = "password123";

export class MockAuthRepository implements AuthRepository {
  login(input: LoginInput): Promise<User | null> {
    if (
      input.email === MOCK_USER_EMAIL &&
      input.password === MOCK_USER_PASSWORD
    ) {
      return Promise.resolve(demoUser);
    }
    return Promise.resolve(null);
  }
  register(input: RegisterInput): Promise<User | null> {
    if (input.email === MOCK_USER_EMAIL) {
      return Promise.resolve(null);
    }
    return Promise.resolve({
      id: "2",
      name: input.name,
      email: input.email,
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      password: input.password,
    });
  }
  getCurrentUser(): Promise<User | null> {
    return Promise.resolve(demoUser);
  }
}
