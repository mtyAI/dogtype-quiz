// Dog CEO API の犬種キー(英語) → 表示用日本語名
// https://dog.ceo/api/breeds/list/all の結果から厳選した代表的な犬種
export type Breed = {
  /** Dog CEO API で使う犬種キー (サブ種ありは "breed/sub" 形式) */
  apiKey: string;
  /** 日本語表示名 */
  ja: string;
  /** 英語表示名 */
  en: string;
};

export const BREEDS: Breed[] = [
  { apiKey: 'akita', ja: '秋田犬', en: 'Akita' },
  { apiKey: 'shiba', ja: '柴犬', en: 'Shiba Inu' },
  { apiKey: 'beagle', ja: 'ビーグル', en: 'Beagle' },
  { apiKey: 'boxer', ja: 'ボクサー', en: 'Boxer' },
  { apiKey: 'bulldog/french', ja: 'フレンチ・ブルドッグ', en: 'French Bulldog' },
  { apiKey: 'bulldog/english', ja: 'イングリッシュ・ブルドッグ', en: 'English Bulldog' },
  { apiKey: 'chihuahua', ja: 'チワワ', en: 'Chihuahua' },
  { apiKey: 'corgi/cardigan', ja: 'コーギー', en: 'Cardigan Welsh Corgi' },
  { apiKey: 'dachshund', ja: 'ダックスフンド', en: 'Dachshund' },
  { apiKey: 'dalmatian', ja: 'ダルメシアン', en: 'Dalmatian' },
  { apiKey: 'doberman', ja: 'ドーベルマン', en: 'Doberman' },
  { apiKey: 'germanshepherd', ja: 'ジャーマン・シェパード', en: 'German Shepherd' },
  { apiKey: 'greyhound/italian', ja: 'イタリアン・グレーハウンド', en: 'Italian Greyhound' },
  { apiKey: 'husky', ja: 'シベリアン・ハスキー', en: 'Siberian Husky' },
  { apiKey: 'labrador', ja: 'ラブラドール・レトリバー', en: 'Labrador Retriever' },
  { apiKey: 'retriever/golden', ja: 'ゴールデン・レトリバー', en: 'Golden Retriever' },
  { apiKey: 'maltese', ja: 'マルチーズ', en: 'Maltese' },
  { apiKey: 'pomeranian', ja: 'ポメラニアン', en: 'Pomeranian' },
  { apiKey: 'poodle/toy', ja: 'トイ・プードル', en: 'Toy Poodle' },
  { apiKey: 'pug', ja: 'パグ', en: 'Pug' },
  { apiKey: 'rottweiler', ja: 'ロットワイラー', en: 'Rottweiler' },
  { apiKey: 'samoyed', ja: 'サモエド', en: 'Samoyed' },
  { apiKey: 'schnauzer/miniature', ja: 'ミニチュア・シュナウザー', en: 'Miniature Schnauzer' },
  { apiKey: 'spaniel/cocker', ja: 'コッカー・スパニエル', en: 'Cocker Spaniel' },
  { apiKey: 'terrier/yorkshire', ja: 'ヨークシャー・テリア', en: 'Yorkshire Terrier' },
  { apiKey: 'mountain/bernese', ja: 'バーニーズ・マウンテン・ドッグ', en: 'Bernese Mountain Dog' },
];

/** ランダム画像取得用 URL を生成 */
export function randomImageUrl(breed: Breed): string {
  return `https://dog.ceo/api/breed/${breed.apiKey}/images/random`;
}
