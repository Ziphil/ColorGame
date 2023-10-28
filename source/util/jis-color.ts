//

import {
  ElementOf
} from "ts-essentials";
import {
  createColors
} from "/source/util/color";
import {
  ColorQuiz,
  generateColorQuiz
} from "/source/util/color-quiz";
import {
  modDiff,
  pick
} from "/source/util/misc";


export const JIS_COLORS = createColors([
  {name: "桜色", munsell: "10RP 9/2.5"},
  {name: "紅梅色", munsell: "2.5R 6.5/7.5"},
  {name: "珊瑚色", munsell: "2.5R 7/11"},
  {name: "ベビーピンク", munsell: "4R 8.5/4"},
  {name: "茜色", munsell: "4R 3.5/11"},
  {name: "ワインレッド", munsell: "10RP 3/9"},
  {name: "朱色", munsell: "6R 5.5/14"},
  {name: "ボルドー", munsell: "2.5R 2.5/3"},
  {name: "カーマイン", munsell: "4R 4/14"},
  {name: "バーミリオン", munsell: "6R 5.5/14"},
  {name: "スカーレット", munsell: "7R 5/14"},
  {name: "サーモンピンク", munsell: "8R 7.5/7.5"},
  {name: "煉瓦色", munsell: "10R 4/7"},
  {name: "栗色", munsell: "2YR 3.5/4"},
  {name: "チョコレート", munsell: "10R 2.5/2.5"},
  {name: "ピーチ", munsell: "3YR 8/3.5"},
  {name: "山吹色", munsell: "10YR 7.5/13"},
  {name: "黄土色", munsell: "10YR 6/7.5"},
  {name: "芥子色", munsell: "3Y 7/6"},
  {name: "マリーゴールド", munsell: "8YR 7.5/13"},
  {name: "ベージュ", munsell: "10YR 7/2.5"},
  {name: "セピア", munsell: "10YR 2.5/2"},
  {name: "カーキー", munsell: "1Y 5/5.5"},
  {name: "ブロンド", munsell: "2Y 7.5/7"},
  {name: "クリームイエロー", munsell: "5Y 8.5/3.5"},
  {name: "カナリヤ", munsell: "7Y 8.5/10"},
  {name: "オリーブ", munsell: "7.5Y 3.5/4"},
  {name: "レモンイエロー", munsell: "8Y 8/12"},
  {name: "鶯色", munsell: "1GY 4.5/3.5"},
  {name: "萌黄", munsell: "4GY 6.5/9"},
  {name: "松葉色", munsell: "7.5GY 5/4"},
  {name: "オリーブグリーン", munsell: "2.5GY 3.5/3"},
  {name: "若竹色", munsell: "6G 6/7.5"},
  {name: "青磁色", munsell: "7.5G 6.5/4"},
  {name: "コバルトグリーン", munsell: "4G 7/9"},
  {name: "エメラルドグリーン", munsell: "4G 6/8"},
  {name: "ビリジアン", munsell: "8G 4/6"},
  {name: "浅葱色", munsell: "2.5B 5/8"},
  {name: "空色", munsell: "9B 7.5/5.5"},
  {name: "藍色", munsell: "2PB 3/5"},
  {name: "瑠璃色", munsell: "6PB 3.5/11"},
  {name: "杜若色", munsell: "7PB 4/10"},
  {name: "群青色", munsell: "7.5PB 3.5/11"},
  {name: "ターコイズブルー", munsell: "5B 6/8"},
  {name: "マリンブルー", munsell: "5B 3/7"},
  {name: "シアン", munsell: "7.5B 6/10"},
  {name: "スカイブルー", munsell: "9B 7.5/5.5"},
  {name: "ベビーブルー", munsell: "10B 7.5/3"},
  {name: "コバルトブルー", munsell: "3PB 4/10"},
  {name: "ネービーブルー", munsell: "6PB 2.5/4"},
  {name: "ウルトラマリンブルー", munsell: "7.5PB 3.5/11"},
  {name: "桔梗色", munsell: "9PB 3.5/13"},
  {name: "バイオレット", munsell: "2.5P 4/11"},
  {name: "茄子紺", munsell: "7.5P 2.5/2.5"},
  {name: "菖蒲色", munsell: "10P 6/10"},
  {name: "ラベンダー", munsell: "5P 6/3"},
  {name: "モーブ", munsell: "5P 4.5/9"},
  {name: "パープル", munsell: "7.5P 5/12"},
  {name: "牡丹色", munsell: "3RP 5/14"},
  {name: "マゼンタ", munsell: "5RP 5/14"},
  {name: "生成り色", munsell: "10YR 9/1"},
  {name: "アイボリー", munsell: "2.5Y 8.5/1.5"},
  {name: "シルバーグレイ", munsell: "N 6.5"},
  {name: "チャコールグレイ", munsell: "5P 3/1"},
  {name: "鴇色", munsell: "7RP 7.5/8"},
  {name: "韓紅花", munsell: "1.5R 5.5/13"},
  {name: "蘇芳", munsell: "4R 4/7"},
  {name: "鳶色", munsell: "7.5R 3.5/5"},
  {name: "弁柄色", munsell: "8R 3.5/7"},
  {name: "海老茶", munsell: "8R 3/4.5"},
  {name: "ローズピンク", munsell: "10RP 7/8"},
  {name: "バーガンディー", munsell: "10RP 2/2.5"},
  {name: "オールドローズ", munsell: "1R 6/6.5"},
  {name: "ポピーレッド", munsell: "4R 5/14"},
  {name: "マルーン", munsell: "5R 2.5/6"},
  {name: "テラコッタ", munsell: "7.5R 4.5/8"},
  {name: "黄丹", munsell: "10R 6/12"},
  {name: "桧皮色", munsell: "1YR 4.3/4"},
  {name: "代赭", munsell: "2.5YR 5/8.5"},
  {name: "バーントシェンナ", munsell: "10R 4.5/7.5"},
  {name: "柑子色", munsell: "5.5YR 7.5/9"},
  {name: "ローシェンナ", munsell: "4YR 5/9"},
  {name: "タン", munsell: "6YR 5/6"},
  {name: "琥珀色", munsell: "8YR 5.5/6.5"},
  {name: "朽葉色", munsell: "10YR 5/2"},
  {name: "鬱金色", munsell: "2Y 7.5/12"},
  {name: "刈安色", munsell: "7Y 8.5/7"},
  {name: "エクルベイジュ", munsell: "7.5YR 8.5/4"},
  {name: "ゴールデンイエロー", munsell: "7.5YR 7/10"},
  {name: "アンバー", munsell: "8YR 5.5/6.5"},
  {name: "バーントアンバー", munsell: "10YR 3/3"},
  {name: "ネープルスイエロー", munsell: "2.5Y 8/7.5"},
  {name: "ローアンバー", munsell: "2.5Y 4/6"},
  {name: "ジョンブリアン", munsell: "5Y 8.5/14"},
  {name: "黄蘗色", munsell: "9Y 8/8"},
  {name: "海松色", munsell: "9.5Y 4.5/2.5"},
  {name: "鶸色", munsell: "1GY 7.5/8"},
  {name: "シャトルーズグリーン", munsell: "4GY 8/10"},
  {name: "リーフグリーン", munsell: "5GY 6/7"},
  {name: "グラスグリーン", munsell: "5GY 5/5"},
  {name: "常磐色", munsell: "3G 4.5/7"},
  {name: "緑青色", munsell: "4G 5/4"},
  {name: "アップルグリーン", munsell: "10GY 8/5"},
  {name: "ミントグリーン", munsell: "2.5G 7.5/8"},
  {name: "マラカイトグリーン", munsell: "4G 4.5/9"},
  {name: "ボトルグリーン", munsell: "5G 2.5/3"},
  {name: "鉄色", munsell: "2.5BG 2.5/2.5"},
  {name: "ピーコックグリーン", munsell: "7.5BG 4.5/9"},
  {name: "ナイルブルー", munsell: "10BG 5.5/5"},
  {name: "新橋色", munsell: "2.5B 6.5/5.5"},
  {name: "納戸色", munsell: "4B 4/6"},
  {name: "甕覗き", munsell: "4.5B 7/4"},
  {name: "縹色", munsell: "3PB 4/7.5"},
  {name: "サックスブルー", munsell: "1PB 5/4.5"},
  {name: "セルリアンブルー", munsell: "9B 4.5/9"},
  {name: "ミッドナイトブルー", munsell: "5PB 1.5/2"},
  {name: "藤色", munsell: "10PB 6.5/6.5"},
  {name: "ウイスタリア", munsell: "10PB 5/12"},
  {name: "江戸紫", munsell: "3P 3.5/7"},
  {name: "古代紫", munsell: "7.5P 4/6"},
  {name: "ライラック", munsell: "6P 7/6"},
  {name: "銀鼠", munsell: "N 6.5"},
  {name: "茶鼠", munsell: "5YR 6/1"},
  {name: "利休鼠", munsell: "2.5G 5/1"},
  {name: "煤竹色", munsell: "9.5YR 3.5/1.5"},
  {name: "スレートグレイ", munsell: "2.5PB 3.5/0.5"},
  {name: "ランプブラック", munsell: "N 1"}
]);

export function createJisColorQuiz(difficulty: 1 | 2 | 3): ColorQuiz<JisColor> {
  const colors = JIS_COLORS;
  const targetColor = colors[Math.floor(Math.random() * colors.length)];
  const wrongColors = generateWrongColors(colors, targetColor, difficulty);
  const quiz = generateColorQuiz(targetColor, wrongColors);
  return quiz;
}

function generateWrongColors(colors: Array<JisColor>, targetColor: JisColor, difficulty: 1 | 2 | 3) {
  const otherColors = colors.filter((color) => color !== targetColor);
  const wrongColors = [];
  if (difficulty === 1) {
    wrongColors.push(...pick(otherColors, 3));
  } else if (difficulty === 2) {
    const wrongHue = Math.floor(Math.random() * 100);
    const targetSimilarColors = otherColors.filter((color) => modDiff(color.mhvs[0], targetColor.mhvs[0], 100) < 10);
    const wrongSimilarColors = otherColors.filter((color) => modDiff(color.mhvs[0], wrongHue, 100) < 10);
    wrongColors.push(...pick(targetSimilarColors, 1));
    wrongColors.push(...pick(wrongSimilarColors, 2));
  } else {
    const targetSimilarColors = otherColors.filter((color) => modDiff(color.mhvs[0], targetColor.mhvs[0], 100) < 10);
    wrongColors.push(...pick(targetSimilarColors, 3));
  }
  return wrongColors;
}

export type JisColor = ElementOf<typeof JIS_COLORS>;;