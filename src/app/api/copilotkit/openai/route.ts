import { CopilotBackend, OpenAIAdapter } from "@copilotkit/backend";

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
  });

  const adapter = new OpenAIAdapter({ openai: openai });

  const copilotKit = new CopilotBackend();

  return copilotKit.response(req, adapter);
}
