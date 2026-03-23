import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8787;

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/ask", async (request, response) => {
  const question = request.body?.question?.trim();

  if (!question) {
    return response.status(400).json({
      error: "question is required",
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return response.status(500).json({
      error: "GEMINI_API_KEY is not configured",
    });
  }

  try {
    const apiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text:
                    "너는 보험 CS 상담원을 돕는 AI다. 한국어로 간결하고 실무적으로 답변해라. " +
                    "질문에 대해 답변과 짧은 유의사항을 만들어라. 질문: " +
                    question,
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return response.status(apiResponse.status).json({
        error: data.error?.message || "Gemini API request failed",
      });
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("\n").trim() ||
      "응답을 생성하지 못했습니다.";

    return response.json({
      question,
      answer,
      note: "실제 상품 약관 및 청구 조건에 따라 추가 확인이 필요할 수 있습니다.",
      source: "Gemini API",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || "Unknown server error",
    });
  }
});

app.listen(port, () => {
  console.log(`CRM MVP API server listening on ${port}`);
});
