import { useCallback, useMemo, useState } from 'react';
import { BREEDS, type Breed, randomImageUrl } from './breeds';

const TOTAL_QUESTIONS = 10;
const CHOICES_PER_QUESTION = 4;

type Question = {
  correct: Breed;
  choices: Breed[];
  imageUrl: string;
};

type Phase = 'start' | 'loading' | 'answering' | 'revealed' | 'finished';

/** 配列からランダムに n 個を抽選 (重複なし) */
function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const picked: T[] = [];
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(idx, 1)[0]);
  }
  return picked;
}

/** Dog CEO API から犬種のランダム画像 URL を取得 */
async function fetchBreedImage(breed: Breed): Promise<string> {
  const res = await fetch(randomImageUrl(breed));
  if (!res.ok) throw new Error(`Failed to fetch image for ${breed.apiKey}`);
  const json = (await res.json()) as { status: string; message: string };
  if (json.status !== 'success') throw new Error('API returned non-success status');
  return json.message;
}

/** 次の設問を生成 */
async function buildQuestion(): Promise<Question> {
  const [correct, ...distractors] = pickRandom(BREEDS, CHOICES_PER_QUESTION);
  const imageUrl = await fetchBreedImage(correct);
  const choices = pickRandom([correct, ...distractors], CHOICES_PER_QUESTION);
  return { correct, choices, imageUrl };
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('start');
  const [question, setQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadNextQuestion = useCallback(async () => {
    setPhase('loading');
    setSelectedKey(null);
    setError(null);
    try {
      const q = await buildQuestion();
      setQuestion(q);
      setPhase('answering');
    } catch (e) {
      setError(e instanceof Error ? e.message : '画像の取得に失敗しました');
      setPhase('answering');
    }
  }, []);

  const startQuiz = useCallback(() => {
    setScore(0);
    setQuestionIndex(0);
    loadNextQuestion();
  }, [loadNextQuestion]);

  const handleSelect = (breed: Breed) => {
    if (phase !== 'answering' || !question) return;
    setSelectedKey(breed.apiKey);
    if (breed.apiKey === question.correct.apiKey) {
      setScore((s) => s + 1);
    }
    setPhase('revealed');
  };

  const handleNext = () => {
    const next = questionIndex + 1;
    if (next >= TOTAL_QUESTIONS) {
      setPhase('finished');
    } else {
      setQuestionIndex(next);
      loadNextQuestion();
    }
  };

  const progress = useMemo(
    () => `${Math.min(questionIndex + 1, TOTAL_QUESTIONS)} / ${TOTAL_QUESTIONS}`,
    [questionIndex],
  );

  // --- 画面 ---

  if (phase === 'start') {
    return (
      <main className="screen">
        <div className="card start-card">
          <div className="emoji">🐶</div>
          <h1>犬種クイズ</h1>
          <p className="lead">
            画像の犬種を 4 択から当てよう！<br />
            全 {TOTAL_QUESTIONS} 問、何問正解できるかな？
          </p>
          <button className="btn primary" onClick={startQuiz}>
            スタート
          </button>
          <p className="credit">
            画像提供: <a href="https://dog.ceo/dog-api/" target="_blank" rel="noreferrer">Dog CEO API</a>
          </p>
        </div>
      </main>
    );
  }

  if (phase === 'finished') {
    const percent = Math.round((score / TOTAL_QUESTIONS) * 100);
    const message =
      percent === 100 ? '🏆 パーフェクト！犬博士だ！' :
      percent >= 70  ? '🎉 すごい！かなりの犬通！' :
      percent >= 40  ? '🐾 まずまず！もう一度挑戦！' :
                       '🐕 これから覚えていこう！';
    return (
      <main className="screen">
        <div className="card result-card">
          <div className="emoji">{percent >= 70 ? '🏆' : '🐶'}</div>
          <h1>結果発表</h1>
          <div className="score-big">
            {score} <span className="score-slash">/</span> {TOTAL_QUESTIONS}
          </div>
          <p className="lead">{message}</p>
          <button className="btn primary" onClick={startQuiz}>
            もう一度遊ぶ
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="screen">
      <div className="card quiz-card">
        <header className="quiz-header">
          <div className="pill">Q {progress}</div>
          <div className="pill score-pill">正解 {score}</div>
        </header>

        <div className="image-wrap">
          {phase === 'loading' || !question ? (
            <div className="image-skeleton">
              <div className="spinner" aria-label="読み込み中" />
            </div>
          ) : (
            <img
              src={question.imageUrl}
              alt="この犬種は?"
              className="dog-image"
              onError={() => setError('画像の読み込みに失敗しました')}
            />
          )}
        </div>

        {error && <p className="error">⚠ {error}</p>}

        <div className="choices">
          {question?.choices.map((c) => {
            const isCorrect = c.apiKey === question.correct.apiKey;
            const isSelected = c.apiKey === selectedKey;
            const revealed = phase === 'revealed';
            const cls = [
              'choice',
              revealed && isCorrect ? 'correct' : '',
              revealed && isSelected && !isCorrect ? 'wrong' : '',
              revealed && !isSelected && !isCorrect ? 'dim' : '',
            ].filter(Boolean).join(' ');
            return (
              <button
                key={c.apiKey}
                className={cls}
                onClick={() => handleSelect(c)}
                disabled={phase !== 'answering'}
              >
                <span className="choice-ja">{c.ja}</span>
                <span className="choice-en">{c.en}</span>
              </button>
            );
          })}
        </div>

        {phase === 'revealed' && question && (
          <div className="feedback">
            <p className={selectedKey === question.correct.apiKey ? 'ok' : 'ng'}>
              {selectedKey === question.correct.apiKey ? '⭕ 正解！' : '❌ 不正解…'}
            </p>
            <p className="answer-text">
              正解は <strong>{question.correct.ja}</strong>（{question.correct.en}）
            </p>
            <button className="btn primary" onClick={handleNext}>
              {questionIndex + 1 >= TOTAL_QUESTIONS ? '結果を見る' : '次の問題へ →'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
