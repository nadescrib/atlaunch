import model from "@/app/_database/model";
import { NextResponse } from "next/server";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
};

export async function GET() {
  try {
    const todos = await model.query<Todo>(
      `
        SELECT id, title, completed, created_at
        FROM todos
        ORDER BY created_at DESC
      `,
    );

    return NextResponse.json(
      {
        success: true,
        data: todos,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Fetch todos error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch todos",
      },
      { status: 500 },
    );
  }
}
