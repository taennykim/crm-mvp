import { useState } from "react";

const initialHistory = [
  {
    id: 1,
    speaker: "customer",
    time: "10:02",
    text: "실손보험 청구하려면 어떤 서류가 필요한가요?",
  },
  {
    id: 2,
    speaker: "agent",
    time: "10:03",
    text: "청구 절차와 필요 서류를 확인 중입니다.",
  },
  {
    id: 3,
    speaker: "customer",
    time: "10:05",
    text: "모바일 앱으로도 청구가 가능한가요?",
  },
];

const presets = [
  "실손보험 청구하려면 어떤 서류가 필요한가요?",
  "모바일 앱으로 보험금 청구할 수 있나요?",
  "통원 치료도 보장되나요?",
];

function currentTime() {
  return new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function App() {
  const [history, setHistory] = useState(initialHistory);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({
    question: "실손보험 청구 관련 문의",
    answer: "오른쪽 패널에는 Gemini API 응답이 표시됩니다.",
    note: "질문을 입력한 뒤 전송하면 실제 API 응답을 받아옵니다.",
    source: "Gemini API",
  });
  const [error, setError] = useState("");

  async function handleAsk() {
    const trimmed = question.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const entry = {
      id: Date.now(),
      speaker: "customer",
      time: currentTime(),
      text: trimmed,
    };

    setHistory((current) => [...current, entry]);
    setQuestion("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmed }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "답변 요청에 실패했습니다.");
      }

      const data = await response.json();
      setResult(data);
      setHistory((current) => [
        ...current,
        {
          id: Date.now() + 1,
          speaker: "agent",
          time: currentTime(),
          text: data.answer,
        },
      ]);
    } catch (caughtError) {
      setError(caughtError.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="header">
        <div>
          <p className="eyebrow">Insurance CRM</p>
          <h1>CS Agent Console</h1>
        </div>
        <span className="badge">Gemini Connected MVP</span>
      </header>

      <main className="layout">
        <section className="panel history-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Consultation History</p>
              <h2>상담 이력</h2>
            </div>
          </div>

          <div className="history-list">
            {history.map((item) => (
              <article
                key={item.id}
                className={`message ${item.speaker === "customer" ? "customer" : "agent"}`}
              >
                <div className="message-meta">
                  <strong>{item.speaker === "customer" ? "고객" : "CS"}</strong>
                  <span>{item.time}</span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="preset-row">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                className="preset-button"
                onClick={() => setQuestion(preset)}
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="composer">
            <label htmlFor="question" className="composer-label">
              질문 입력
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={4}
              placeholder="보험 CS 질문을 입력하세요."
            />
            <div className="composer-footer">
              <p className="helper-text">
                실제 Gemini API로 질문을 보내 답변을 생성합니다.
              </p>
              <button
                type="button"
                className="primary-button"
                disabled={isLoading}
                onClick={handleAsk}
              >
                {isLoading ? "응답 생성 중..." : "답변 요청"}
              </button>
            </div>
          </div>
        </section>

        <aside className="panel answer-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">AI Answer</p>
              <h2>Gemini 응답</h2>
            </div>
          </div>

          <div className="answer-section">
            <span className="section-title">현재 질문</span>
            <div className="answer-box">
              <p>{result.question}</p>
            </div>
          </div>

          <div className="answer-section">
            <span className="section-title">추천 답변</span>
            <div className="answer-box emphasis">
              <p>{result.answer}</p>
            </div>
          </div>

          <div className="answer-section">
            <span className="section-title">참고 메모</span>
            <div className="answer-box">
              <p>{result.note}</p>
            </div>
          </div>

          <div className="answer-section">
            <span className="section-title">Source</span>
            <div className="answer-box">
              <p>{result.source}</p>
            </div>
          </div>

          {error ? (
            <div className="error-box">
              <strong>오류</strong>
              <p>{error}</p>
            </div>
          ) : null}
        </aside>
      </main>
    </div>
  );
}
