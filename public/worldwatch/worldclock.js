=========================================================================
 世界時計（全世界夏時間対応、DSTDaylight Saving Time）2007年版 v1.3
 Copyright (c) 2003.12 「菊池さん」httpkikuchisan.net
=========================================================================
 データ定義（個人設定）
 1.世界時計を表示したい都市名、都市のタイムゾーンと夏時間の有無を定義します
 　デフォルトで下記のデータが設定されてます。お好みにより変更してください
 　夏時間処理フラグは、
 　なし(0),米国型(1),欧州型(2),NIS型(3),オーストラリア型(4),ブラジル型(5),
 　エジプト型(6),イラク型(7),ニュージーランド型(8),チリ型(9),モンゴル型(10),
 　パレスチナ型(11),イラン型(12),イスラエル型(13),ヨルダン型(14),シリア型(15), 　ナミビア型(16),フォークランド型(17),タスマニア型(18),パラグァイ型(19),
 　中米型(20)

 2.都市の追加方法
 　(1)配列city,zone,flagに都市名、都市のタイムゾーンと夏時間処理フラグを
 　「対」で追加。都市のタイムゾーンはWindowsコントロールパネルの「日付と時刻」 　で確認できます。
 　(2)一覧形式の場合はinput文（都市名input type=text name=都市名）、
 　プルダウンメニューの場合はoption文（option都市名）をHTML文に追加。
=========================================================================
city = new Array(ウェリントン,シドニー,東京,ウランバートル,北京・香港,バクダット,モスクワ,カイロ,ロンドン,リオデジャネイロ,サンチャゴ,ニューヨーク,ロサンジェルス,ホノルル,テヘラン);
zone = new Array( 12, 10,  9,  8,  8,  3,  3,  2,  0, -3, -4, -5, -8,-10,3.5);
flag = new Array(  8,  4,  0,  0,  0,  7,  2,  6,  2,  5,  9,  1,  1,  0, 12);
=========================================================================
 メインプログラム
=========================================================================
for (i in zone) { if (zone[i]  -12  zone[i]  12) { alert(タイムゾーン指定エラーですnzone[+i+]の設定値 +zone[i]);} } 設定値チェック
ln = -1; pn = -1;
match = 0;
for (i = 0; i  document.forms.length; i++) { form参照番号取得
  if (document.forms[i].name == list) { ln = i; match = 1; } 一覧形式
  if (document.forms[i].name == pull) { pn = i; match = 1; } プルダウンメニュー形式
}
if (match != 1) { alert(フォーム名「list」「pull」の記述ミスです); }
now = new Date();
year = now.getYear(); if (year  2000) { year += 1900; }
offset = now.getTimezoneOffset()  60; GMTからの時差(単位時)

夏時間の開始終了日計算
sun3_2 = calcDst(year,3,2,0);    3月第2日曜日(米国型開始,チリ型終了)
sun11_1= calcDst(year,11,1,0);  11月第1日曜日(米国型終了)
sun4_1 = calcDst(year,4,1,0);    4月第1日曜日(中米型開始,ナミビア型終了)
sun3_e = calcDst(year,3,5,0);    3月最終日曜日(欧州型開始,NIS型開始,オーストラリア型終了,タスマニア型終了)
sun10_e= calcDst(year,10,5,0);  10月最終日曜日(欧州型終了,NIS型終了,オーストラリア型開始,中米型終了)
y_11_2= calcDst(year,11,2,-1);  10月第3日曜日(ブラジル型開始)
sun2_3 = calcDst(year,2,3,0);    2月第3日曜日(ブラジル型終了)
thu4_e = calcDst(year,4,5,4);    4月最終木曜日(エジプト型開始)
thu9_e = calcDst(year,9,5,4);    9月最終木曜日(エジプト型終了)
y_4_1  = calcDst(year,4,1,-1);  日付指定(イラク型開始)
y_10_1 = calcDst(year,10,1,-1); 日付指定(イラク型終了)
sun10_1= calcDst(year,10,1,0);  10月第1日曜日(タスマニア型開始,ニュージーランド型開始)
sun3_3 = calcDst(year,3,3,0);    3月第3日曜日(ニュージーランド型終了)
sun10_2= calcDst(year,10,2,0);  10月第2日曜日(チリ型開始)
y_3_27 = calcDst(year,3,27,-1); 日付指定(モンゴル型開始)
y_10_30= calcDst(year,10,24,-1);日付指定(モンゴル型終了)
y_4_15 = calcDst(year,4,15,-1); 日付指定(パレスチナ型開始)
y_10_14= calcDst(year,10,15,-1);日付指定(パレスチナ型終了)
y_3_20 = calcDst(year,3,20,-1); 日付指定(イラン型開始)
y_9_20 = calcDst(year,9,20,-1); 日付指定(イラン型終了)
y_4_6  = calcDst(year,4,6,-1);  日付指定(イスラエル型開始)
y_9_21 = calcDst(year,9,21,-1); 日付指定(イスラエル型終了)
y_3_24 = calcDst(year,3,24,-1); 日付指定(ヨルダン型開始)
y_10_21= calcDst(year,10,15,-1);日付指定(ヨルダン型終了)
y_3_31 = calcDst(year,3,31,-1); 日付指定(シリア型開始)
y_9_30 = calcDst(year,9,30,-1); 日付指定(シリア型終了)
sun9_1 = calcDst(year,9,1,0);    9月第1日曜日(ナミビア型開始,フォークランド型開始)
sun4_3 = calcDst(year,4,3,0);    4月第3日曜日(フォークランド型終了)
y_10_17= calcDst(year,10,17,-1);日付指定(パラグァイ型開始)
y_4_4 = calcDst(year,4,4,-1);   日付指定(パラグァイ型終了)

時刻表示と更新
updateClock();
=========================================================================
 サブルーチン
=========================================================================
 その都市の夏時間対応ローカル時刻計算
 引数　 .... PC時刻（内部表現、単位ミリ秒）　pctime
 　　　 .... 時刻を求める都市のタイムゾーン（単位時）　tzone
 　　　 .... 夏時間処理フラグ：無(0),米国型(1),欧州型(2),NIS型(3)等　flag
 戻り値 .... 夏時間対応ローカル時刻（日時表現）
=========================================================================
function calcTime(pctime,tzone,flag) {
  ローカル時刻の計算
  twntime = pctime + (tzone + offset)  3600000; 単位ミリ秒
  夏時間の処理
  mark =  ; DSTマーク表示用
  if (flag == 1) {        米国型
    if ((sun3_2+3600000=twntime) && (sun11_1twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 2) { 欧州型
    if ((sun3_e=twntime) && (sun10_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 3) { NIS型
    if ((sun3_e=twntime) && (sun10_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 4) { オーストラリア型
    if ((sun10_e=twntime)  (sun3_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 5) { ブラジル型
    if ((y_11_2=twntime)  (sun2_3twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 6) { エジプト型
    if ((thu4_e=twntime) && (thu9_etwntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 7) { イラク型
    if ((y_4_1=twntime) && (y_10_1twntime))   { twntime+= 3600000; mark=;}
  } else if (flag == 8) { ニュージーランド型
    if ((sun10_1=twntime)  (sun3_3twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 9) { チリ型
    if ((sun10_2=twntime)  (sun3_2twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 10) { モンゴル型
    if ((y_3_27=twntime) && (y_10_30twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 11) { パレスチナ型
    if ((y_4_15=twntime) && (y_10_14twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 12) { イラン型
    if ((y_3_20=twntime) && (y_9_20twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 13) { イスラエル型
    if ((thu3_e=twntime) && (thu10_1twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 14) { ヨルダン型
    if ((y_3_24=twntime) && (y_10_21twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 15) { シリア型
    if ((y_3_31=twntime) && (y_9_30twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 16) { ナミビア型
    if ((sun9_1=twntime)  (sun4_1twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 17) { フォークランド型
    if ((sun9_1=twntime)  (sun4_3twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 18) { タスマニア型
    if ((sun10_1=twntime)  (sun3_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 19) { パラグァイ型
    if ((y_10_17=twntime)  (y_4_4twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 20) { 中米型
    if ((sun4_1=twntime) && (sun10_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag != 0) {
    alert(未定義の夏時間処理フラグ（+flag+）を検出しましたnデータ定義部のflagの値を確認してください); return
  }
  夏時間対応ローカル時刻を内部表現から日時表現に変換し戻り値にセット
  now.setTime(twntime);
  date = now.getDate();
  hour = now.getHours();   if (hour  10) { hour = 0 + hour; }
  min  = now.getMinutes(); if (min   10) { min = 0 + min; }
  sec  = now.getSeconds(); if (sec   10) { sec = 0 + sec; }
  return date + 日  + hour +  + min +  + sec + mark;
}
=========================================================================
 時刻更新処理
 引数、戻り値 .... なし
=========================================================================
function updateClock() {
  var now = new Date();
  pctime = now.getTime(); PC時刻（内部表現）

  夏時間対応ローカル時刻（日時表現）を計算し時刻表示用input文にセット
  if (ln = 0) { 一覧形式
    for (j = 0; j  document.forms[ln].elements.length; j++) {
      match = 0;
      for (i in city) { input名と登録都市名を照合し同じ場合は時刻セット
        if (document.forms[ln].elements[j].name == city[i]) {
          document.forms[ln].elements[j].value = calcTime(pctime,zone[i],flag[i]);
          match = 1; break;
        }
      }
      if (match != 1) { alert(都市名の記述ミスです); return; }
    }
  }
  if (pn = 0) { プルダウンメニュー形式
    match = 0;
    for (i in city) {選択したoption名と登録都市名を照合し同じ場合は時刻セット
      if (document.forms[pn].city.options[document.forms[pn].city.options.selectedIndex].text == city[i]) {
        document.forms[pn].clock.value = calcTime(pctime,zone[i],flag[i]);
        match = 1; break;
      }
    }
    if (match != 1) { alert(都市名の記述ミスです); return; }
  }
  1秒毎に時刻更新
  setTimeout(updateClock(), 999);
}
=========================================================================
 第何曜日は何日かの算出
 引数　 .... 計算対象となる年月　year month（1～12）
 　　　 .... wno=0～6の時：第何曜日の指定（最終曜日は5を指定）　num（1～5）
 　　　 .... 　or wno=-1の時：何日の指定　num（1～31）
 　　　 .... 曜日の指定(日=0,月=1,火=2,・・・土=6)　wno（0～6）
 　　　 .... 　or 何日の指定(=-1)　wno（-1）
 戻り値 .... 時刻（内部表現）
=========================================================================
function calcDst(year,month,num,wno) {
 パラメータ判定
 if (month  1  month  12) { alert(月指定エラーです); return; }
 if (wno  0) { 日時指定の場合
  if (num  1  num  31) { alert(日時指定エラーです); return; }
  指定年月日の午前1時の時刻を求め内部表現に変換し戻り値にセット
  dstime = new Date(year,month-1,num,1,0,0);
  return dstime.getTime();
 } else { 第何曜日指定（最終曜日は5）の場合
  if (num  1  num  5) { alert(第何週指定エラーです); return; }
  if (wno  6) { alert(曜日指定エラーです); return; }

  ツェラーの公式よりその年月の1日の曜日を計算
  if (month = 2) { zyear = year - 1; zmonth = month + 12; }
  else { zyear = year; zmonth = month; }  1月,2月は前年の13月,14月とする
  wday = (zyear + Math.floor(zyear4) - Math.floor(zyear100)
       + Math.floor(zyear400) + Math.floor((13zmonth + 8)5) + 1) % 7;

  最終曜日指定の場合第5曜日有無の判定
  if (num == 5) {
    if (month == 2) {
      if (((year % 4 == 0) && (year % 100 != 0))  (year % 400 == 0))
                    { leap = 1; } else { leap = 0; } 閏年判定
      if (leap == 0  wno != wday) { num -= 1; } 閏年は29日のみ第5曜日
    } else if (month== 4  month== 6  month== 9  month== 11) { 30日月
      if (wno = 1) { if( (wno+1) = wday && wday  (wno+6) ) { num -= 1; } }
               else { if( (wno+1) = wday  wday  (wno-1) ) { num -= 1; } }
    } else { 31日月
      if (wno = 2) { if( (wno+1) = wday && wday  (wno+5) ) { num -= 1; } }
               else { if( (wno+1) = wday  wday  (wno-2) ) { num -= 1; } }
    }
  }
  第(num)wno曜日は何日かの計算
  if (wday = wno) { dstime = (num-1)  7 + ((wno+1) - wday); }
              else { dstime = num  7 - (wday - (wno+1)); }

  算出した年月日の午前1時の時刻を求め内部表現に変換し戻り値にセット
  dstime = new Date(year,month-1,dstime,1,0,0);
  return dstime.getTime();
 }
}
