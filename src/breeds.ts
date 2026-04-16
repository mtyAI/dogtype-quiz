// Dog CEO API の犬種キー(英語) → 表示用日本語名
// https://dog.ceo/api/breeds/list/all の結果から選定
export type Breed = {
  /** Dog CEO API で使う犬種キー (サブ種ありは "breed/sub" 形式) */
  apiKey: string;
  /** 日本語表示名 */
  ja: string;
  /** 英語表示名 */
  en: string;
};

export const BREEDS: Breed[] = [
  // --- メジャー犬種 ---
  { apiKey: 'akita', ja: '秋田犬', en: 'Akita' },
  { apiKey: 'shiba', ja: '柴犬', en: 'Shiba Inu' },
  { apiKey: 'beagle', ja: 'ビーグル', en: 'Beagle' },
  { apiKey: 'boxer', ja: 'ボクサー', en: 'Boxer' },
  { apiKey: 'bulldog/french', ja: 'フレンチ・ブルドッグ', en: 'French Bulldog' },
  { apiKey: 'bulldog/english', ja: 'イングリッシュ・ブルドッグ', en: 'English Bulldog' },
  { apiKey: 'bulldog/boston', ja: 'ボストン・テリア', en: 'Boston Terrier' },
  { apiKey: 'chihuahua', ja: 'チワワ', en: 'Chihuahua' },
  { apiKey: 'corgi/cardigan', ja: 'ウェルシュ・コーギー', en: 'Cardigan Welsh Corgi' },
  { apiKey: 'dachshund', ja: 'ダックスフンド', en: 'Dachshund' },
  { apiKey: 'dalmatian', ja: 'ダルメシアン', en: 'Dalmatian' },
  { apiKey: 'doberman', ja: 'ドーベルマン', en: 'Doberman' },
  { apiKey: 'german/shepherd', ja: 'ジャーマン・シェパード', en: 'German Shepherd' },
  { apiKey: 'greyhound/italian', ja: 'イタリアン・グレーハウンド', en: 'Italian Greyhound' },
  { apiKey: 'husky', ja: 'シベリアン・ハスキー', en: 'Siberian Husky' },
  { apiKey: 'labrador', ja: 'ラブラドール・レトリバー', en: 'Labrador Retriever' },
  { apiKey: 'retriever/golden', ja: 'ゴールデン・レトリバー', en: 'Golden Retriever' },
  { apiKey: 'maltese', ja: 'マルチーズ', en: 'Maltese' },
  { apiKey: 'pomeranian', ja: 'ポメラニアン', en: 'Pomeranian' },
  { apiKey: 'poodle/toy', ja: 'トイ・プードル', en: 'Toy Poodle' },
  { apiKey: 'poodle/standard', ja: 'スタンダード・プードル', en: 'Standard Poodle' },
  { apiKey: 'pug', ja: 'パグ', en: 'Pug' },
  { apiKey: 'rottweiler', ja: 'ロットワイラー', en: 'Rottweiler' },
  { apiKey: 'samoyed', ja: 'サモエド', en: 'Samoyed' },
  { apiKey: 'schnauzer/miniature', ja: 'ミニチュア・シュナウザー', en: 'Miniature Schnauzer' },
  { apiKey: 'spaniel/cocker', ja: 'コッカー・スパニエル', en: 'Cocker Spaniel' },
  { apiKey: 'terrier/yorkshire', ja: 'ヨークシャー・テリア', en: 'Yorkshire Terrier' },
  { apiKey: 'mountain/bernese', ja: 'バーニーズ・マウンテン・ドッグ', en: 'Bernese Mountain Dog' },
  { apiKey: 'shihtzu', ja: 'シー・ズー', en: 'Shih Tzu' },
  { apiKey: 'stbernard', ja: 'セント・バーナード', en: 'Saint Bernard' },

  // --- 中堅〜マイナー犬種 ---
  { apiKey: 'affenpinscher', ja: 'アーフェンピンシャー', en: 'Affenpinscher' },
  { apiKey: 'airedale', ja: 'エアデール・テリア', en: 'Airedale Terrier' },
  { apiKey: 'basenji', ja: 'バセンジー', en: 'Basenji' },
  { apiKey: 'borzoi', ja: 'ボルゾイ', en: 'Borzoi' },
  { apiKey: 'briard', ja: 'ブリアール', en: 'Briard' },
  { apiKey: 'chow', ja: 'チャウ・チャウ', en: 'Chow Chow' },
  { apiKey: 'clumber', ja: 'クランバー・スパニエル', en: 'Clumber Spaniel' },
  { apiKey: 'cotondetulear', ja: 'コトン・ド・テュレアール', en: 'Coton de Tuléar' },
  { apiKey: 'dane/great', ja: 'グレート・デーン', en: 'Great Dane' },
  { apiKey: 'eskimo', ja: 'アメリカン・エスキモー・ドッグ', en: 'American Eskimo Dog' },
  { apiKey: 'havanese', ja: 'ハバニーズ', en: 'Havanese' },
  { apiKey: 'hound/afghan', ja: 'アフガン・ハウンド', en: 'Afghan Hound' },
  { apiKey: 'hound/basset', ja: 'バセット・ハウンド', en: 'Basset Hound' },
  { apiKey: 'hound/blood', ja: 'ブラッドハウンド', en: 'Bloodhound' },
  { apiKey: 'hound/ibizan', ja: 'イビザン・ハウンド', en: 'Ibizan Hound' },
  { apiKey: 'keeshond', ja: 'キースホンド', en: 'Keeshond' },
  { apiKey: 'komondor', ja: 'コモンドール', en: 'Komondor' },
  { apiKey: 'kuvasz', ja: 'クーバース', en: 'Kuvasz' },
  { apiKey: 'leonberg', ja: 'レオンベルガー', en: 'Leonberger' },
  { apiKey: 'lhasa', ja: 'ラサ・アプソ', en: 'Lhasa Apso' },
  { apiKey: 'malamute', ja: 'アラスカン・マラミュート', en: 'Alaskan Malamute' },
  { apiKey: 'malinois', ja: 'ベルジアン・マリノア', en: 'Belgian Malinois' },
  { apiKey: 'mexicanhairless', ja: 'メキシカン・ヘアレス・ドッグ', en: 'Xoloitzcuintli' },
  { apiKey: 'newfoundland', ja: 'ニューファンドランド', en: 'Newfoundland' },
  { apiKey: 'otterhound', ja: 'オッターハウンド', en: 'Otterhound' },
  { apiKey: 'papillon', ja: 'パピヨン', en: 'Papillon' },
  { apiKey: 'pekinese', ja: 'ペキニーズ', en: 'Pekingese' },
  { apiKey: 'pointer/german', ja: 'ジャーマン・ショートヘアード・ポインター', en: 'German Shorthaired Pointer' },
  { apiKey: 'pyrenees', ja: 'グレート・ピレニーズ', en: 'Great Pyrenees' },
  { apiKey: 'redbone', ja: 'レッドボーン・クーンハウンド', en: 'Redbone Coonhound' },
  { apiKey: 'ridgeback/rhodesian', ja: 'ローデシアン・リッジバック', en: 'Rhodesian Ridgeback' },
  { apiKey: 'saluki', ja: 'サルーキ', en: 'Saluki' },
  { apiKey: 'schipperke', ja: 'スキッパーキ', en: 'Schipperke' },
  { apiKey: 'setter/irish', ja: 'アイリッシュ・セッター', en: 'Irish Setter' },
  { apiKey: 'sharpei', ja: 'シャー・ペイ', en: 'Shar Pei' },
  { apiKey: 'sheepdog/shetland', ja: 'シェットランド・シープドッグ', en: 'Shetland Sheepdog' },
  { apiKey: 'spaniel/brittany', ja: 'ブリタニー・スパニエル', en: 'Brittany Spaniel' },
  { apiKey: 'spaniel/japanese', ja: '狆（ちん）', en: 'Japanese Chin' },
  { apiKey: 'spitz/japanese', ja: '日本スピッツ', en: 'Japanese Spitz' },
  { apiKey: 'terrier/bedlington', ja: 'ベドリントン・テリア', en: 'Bedlington Terrier' },
  { apiKey: 'terrier/fox', ja: 'フォックス・テリア', en: 'Fox Terrier' },
  { apiKey: 'terrier/scottish', ja: 'スコティッシュ・テリア', en: 'Scottish Terrier' },
  { apiKey: 'terrier/westhighland', ja: 'ウェスト・ハイランド・ホワイト・テリア', en: 'West Highland White Terrier' },
  { apiKey: 'vizsla', ja: 'ヴィズラ', en: 'Vizsla' },
  { apiKey: 'weimaraner', ja: 'ワイマラナー', en: 'Weimaraner' },
  { apiKey: 'whippet', ja: 'ウィペット', en: 'Whippet' },
  { apiKey: 'wolfhound/irish', ja: 'アイリッシュ・ウルフハウンド', en: 'Irish Wolfhound' },
];

/** ランダム画像取得用 URL を生成 */
export function randomImageUrl(breed: Breed): string {
  return `https://dog.ceo/api/breed/${breed.apiKey}/images/random`;
}
