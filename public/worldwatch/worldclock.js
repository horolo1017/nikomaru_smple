=========================================================================
 ���E���v�i�S���E�Ď��ԑΉ��ADSTDaylight Saving Time�j2007�N�� v1.3
 Copyright (c) 2003.12 �u�e�r����vhttpkikuchisan.net
=========================================================================
 �f�[�^��`�i�l�ݒ�j
 1.���E���v��\���������s�s���A�s�s�̃^�C���]�[���ƉĎ��Ԃ̗L�����`���܂�
 �@�f�t�H���g�ŉ��L�̃f�[�^���ݒ肳��Ă܂��B���D�݂ɂ��ύX���Ă�������
 �@�Ď��ԏ����t���O�́A
 �@�Ȃ�(0),�č��^(1),���B�^(2),NIS�^(3),�I�[�X�g�����A�^(4),�u���W���^(5),
 �@�G�W�v�g�^(6),�C���N�^(7),�j���[�W�[�����h�^(8),�`���^(9),�����S���^(10),
 �@�p���X�`�i�^(11),�C�����^(12),�C�X���G���^(13),�����_���^(14),�V���A�^(15), �@�i�~�r�A�^(16),�t�H�[�N�����h�^(17),�^�X�}�j�A�^(18),�p���O�@�C�^(19),
 �@���Č^(20)

 2.�s�s�̒ǉ����@
 �@(1)�z��city,zone,flag�ɓs�s���A�s�s�̃^�C���]�[���ƉĎ��ԏ����t���O��
 �@�u�΁v�Œǉ��B�s�s�̃^�C���]�[����Windows�R���g���[���p�l���́u���t�Ǝ����v �@�Ŋm�F�ł��܂��B
 �@(2)�ꗗ�`���̏ꍇ��input���i�s�s��input type=text name=�s�s���j�A
 �@�v���_�E�����j���[�̏ꍇ��option���ioption�s�s���j��HTML���ɒǉ��B
=========================================================================
city = new Array(�E�F�����g��,�V�h�j�[,����,�E�����o�[�g��,�k���E���`,�o�N�_�b�g,���X�N��,�J�C��,�����h��,���I�f�W���l�C��,�T���`���S,�j���[���[�N,���T���W�F���X,�z�m����,�e�w����);
zone = new Array( 12, 10,  9,  8,  8,  3,  3,  2,  0, -3, -4, -5, -8,-10,3.5);
flag = new Array(  8,  4,  0,  0,  0,  7,  2,  6,  2,  5,  9,  1,  1,  0, 12);
=========================================================================
 ���C���v���O����
=========================================================================
for (i in zone) { if (zone[i]  -12  zone[i]  12) { alert(�^�C���]�[���w��G���[�ł�nzone[+i+]�̐ݒ�l +zone[i]);} } �ݒ�l�`�F�b�N
ln = -1; pn = -1;
match = 0;
for (i = 0; i  document.forms.length; i++) { form�Q�Ɣԍ��擾
  if (document.forms[i].name == list) { ln = i; match = 1; } �ꗗ�`��
  if (document.forms[i].name == pull) { pn = i; match = 1; } �v���_�E�����j���[�`��
}
if (match != 1) { alert(�t�H�[�����ulist�v�upull�v�̋L�q�~�X�ł�); }
now = new Date();
year = now.getYear(); if (year  2000) { year += 1900; }
offset = now.getTimezoneOffset()  60; GMT����̎���(�P�ʎ�)

�Ď��Ԃ̊J�n�I�����v�Z
sun3_2 = calcDst(year,3,2,0);    3����2���j��(�č��^�J�n,�`���^�I��)
sun11_1= calcDst(year,11,1,0);  11����1���j��(�č��^�I��)
sun4_1 = calcDst(year,4,1,0);    4����1���j��(���Č^�J�n,�i�~�r�A�^�I��)
sun3_e = calcDst(year,3,5,0);    3���ŏI���j��(���B�^�J�n,NIS�^�J�n,�I�[�X�g�����A�^�I��,�^�X�}�j�A�^�I��)
sun10_e= calcDst(year,10,5,0);  10���ŏI���j��(���B�^�I��,NIS�^�I��,�I�[�X�g�����A�^�J�n,���Č^�I��)
y_11_2= calcDst(year,11,2,-1);  10����3���j��(�u���W���^�J�n)
sun2_3 = calcDst(year,2,3,0);    2����3���j��(�u���W���^�I��)
thu4_e = calcDst(year,4,5,4);    4���ŏI�ؗj��(�G�W�v�g�^�J�n)
thu9_e = calcDst(year,9,5,4);    9���ŏI�ؗj��(�G�W�v�g�^�I��)
y_4_1  = calcDst(year,4,1,-1);  ���t�w��(�C���N�^�J�n)
y_10_1 = calcDst(year,10,1,-1); ���t�w��(�C���N�^�I��)
sun10_1= calcDst(year,10,1,0);  10����1���j��(�^�X�}�j�A�^�J�n,�j���[�W�[�����h�^�J�n)
sun3_3 = calcDst(year,3,3,0);    3����3���j��(�j���[�W�[�����h�^�I��)
sun10_2= calcDst(year,10,2,0);  10����2���j��(�`���^�J�n)
y_3_27 = calcDst(year,3,27,-1); ���t�w��(�����S���^�J�n)
y_10_30= calcDst(year,10,24,-1);���t�w��(�����S���^�I��)
y_4_15 = calcDst(year,4,15,-1); ���t�w��(�p���X�`�i�^�J�n)
y_10_14= calcDst(year,10,15,-1);���t�w��(�p���X�`�i�^�I��)
y_3_20 = calcDst(year,3,20,-1); ���t�w��(�C�����^�J�n)
y_9_20 = calcDst(year,9,20,-1); ���t�w��(�C�����^�I��)
y_4_6  = calcDst(year,4,6,-1);  ���t�w��(�C�X���G���^�J�n)
y_9_21 = calcDst(year,9,21,-1); ���t�w��(�C�X���G���^�I��)
y_3_24 = calcDst(year,3,24,-1); ���t�w��(�����_���^�J�n)
y_10_21= calcDst(year,10,15,-1);���t�w��(�����_���^�I��)
y_3_31 = calcDst(year,3,31,-1); ���t�w��(�V���A�^�J�n)
y_9_30 = calcDst(year,9,30,-1); ���t�w��(�V���A�^�I��)
sun9_1 = calcDst(year,9,1,0);    9����1���j��(�i�~�r�A�^�J�n,�t�H�[�N�����h�^�J�n)
sun4_3 = calcDst(year,4,3,0);    4����3���j��(�t�H�[�N�����h�^�I��)
y_10_17= calcDst(year,10,17,-1);���t�w��(�p���O�@�C�^�J�n)
y_4_4 = calcDst(year,4,4,-1);   ���t�w��(�p���O�@�C�^�I��)

�����\���ƍX�V
updateClock();
=========================================================================
 �T�u���[�`��
=========================================================================
 ���̓s�s�̉Ď��ԑΉ����[�J�������v�Z
 �����@ .... PC�����i�����\���A�P�ʃ~���b�j�@pctime
 �@�@�@ .... ���������߂�s�s�̃^�C���]�[���i�P�ʎ��j�@tzone
 �@�@�@ .... �Ď��ԏ����t���O�F��(0),�č��^(1),���B�^(2),NIS�^(3)���@flag
 �߂�l .... �Ď��ԑΉ����[�J�������i�����\���j
=========================================================================
function calcTime(pctime,tzone,flag) {
  ���[�J�������̌v�Z
  twntime = pctime + (tzone + offset)  3600000; �P�ʃ~���b
  �Ď��Ԃ̏���
  mark =  ; DST�}�[�N�\���p
  if (flag == 1) {        �č��^
    if ((sun3_2+3600000=twntime) && (sun11_1twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 2) { ���B�^
    if ((sun3_e=twntime) && (sun10_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 3) { NIS�^
    if ((sun3_e=twntime) && (sun10_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 4) { �I�[�X�g�����A�^
    if ((sun10_e=twntime)  (sun3_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 5) { �u���W���^
    if ((y_11_2=twntime)  (sun2_3twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 6) { �G�W�v�g�^
    if ((thu4_e=twntime) && (thu9_etwntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 7) { �C���N�^
    if ((y_4_1=twntime) && (y_10_1twntime))   { twntime+= 3600000; mark=;}
  } else if (flag == 8) { �j���[�W�[�����h�^
    if ((sun10_1=twntime)  (sun3_3twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 9) { �`���^
    if ((sun10_2=twntime)  (sun3_2twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 10) { �����S���^
    if ((y_3_27=twntime) && (y_10_30twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 11) { �p���X�`�i�^
    if ((y_4_15=twntime) && (y_10_14twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 12) { �C�����^
    if ((y_3_20=twntime) && (y_9_20twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 13) { �C�X���G���^
    if ((thu3_e=twntime) && (thu10_1twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 14) { �����_���^
    if ((y_3_24=twntime) && (y_10_21twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 15) { �V���A�^
    if ((y_3_31=twntime) && (y_9_30twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 16) { �i�~�r�A�^
    if ((sun9_1=twntime)  (sun4_1twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 17) { �t�H�[�N�����h�^
    if ((sun9_1=twntime)  (sun4_3twntime))  { twntime+= 3600000; mark=;}
  } else if (flag == 18) { �^�X�}�j�A�^
    if ((sun10_1=twntime)  (sun3_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 19) { �p���O�@�C�^
    if ((y_10_17=twntime)  (y_4_4twntime)) { twntime+= 3600000; mark=;}
  } else if (flag == 20) { ���Č^
    if ((sun4_1=twntime) && (sun10_etwntime)) { twntime+= 3600000; mark=;}
  } else if (flag != 0) {
    alert(����`�̉Ď��ԏ����t���O�i+flag+�j�����o���܂���n�f�[�^��`����flag�̒l���m�F���Ă�������); return
  }
  �Ď��ԑΉ����[�J������������\����������\���ɕϊ����߂�l�ɃZ�b�g
  now.setTime(twntime);
  date = now.getDate();
  hour = now.getHours();   if (hour  10) { hour = 0 + hour; }
  min  = now.getMinutes(); if (min   10) { min = 0 + min; }
  sec  = now.getSeconds(); if (sec   10) { sec = 0 + sec; }
  return date + ��  + hour +  + min +  + sec + mark;
}
=========================================================================
 �����X�V����
 �����A�߂�l .... �Ȃ�
=========================================================================
function updateClock() {
  var now = new Date();
  pctime = now.getTime(); PC�����i�����\���j

  �Ď��ԑΉ����[�J�������i�����\���j���v�Z�������\���pinput���ɃZ�b�g
  if (ln = 0) { �ꗗ�`��
    for (j = 0; j  document.forms[ln].elements.length; j++) {
      match = 0;
      for (i in city) { input���Ɠo�^�s�s�����ƍ��������ꍇ�͎����Z�b�g
        if (document.forms[ln].elements[j].name == city[i]) {
          document.forms[ln].elements[j].value = calcTime(pctime,zone[i],flag[i]);
          match = 1; break;
        }
      }
      if (match != 1) { alert(�s�s���̋L�q�~�X�ł�); return; }
    }
  }
  if (pn = 0) { �v���_�E�����j���[�`��
    match = 0;
    for (i in city) {�I������option���Ɠo�^�s�s�����ƍ��������ꍇ�͎����Z�b�g
      if (document.forms[pn].city.options[document.forms[pn].city.options.selectedIndex].text == city[i]) {
        document.forms[pn].clock.value = calcTime(pctime,zone[i],flag[i]);
        match = 1; break;
      }
    }
    if (match != 1) { alert(�s�s���̋L�q�~�X�ł�); return; }
  }
  1�b���Ɏ����X�V
  setTimeout(updateClock(), 999);
}
=========================================================================
 �扽�j���͉������̎Z�o
 �����@ .... �v�Z�ΏۂƂȂ�N���@year month�i1�`12�j
 �@�@�@ .... wno=0�`6�̎��F�扽�j���̎w��i�ŏI�j����5���w��j�@num�i1�`5�j
 �@�@�@ .... �@or wno=-1�̎��F�����̎w��@num�i1�`31�j
 �@�@�@ .... �j���̎w��(��=0,��=1,��=2,�E�E�E�y=6)�@wno�i0�`6�j
 �@�@�@ .... �@or �����̎w��(=-1)�@wno�i-1�j
 �߂�l .... �����i�����\���j
=========================================================================
function calcDst(year,month,num,wno) {
 �p�����[�^����
 if (month  1  month  12) { alert(���w��G���[�ł�); return; }
 if (wno  0) { �����w��̏ꍇ
  if (num  1  num  31) { alert(�����w��G���[�ł�); return; }
  �w��N�����̌ߑO1���̎��������ߓ����\���ɕϊ����߂�l�ɃZ�b�g
  dstime = new Date(year,month-1,num,1,0,0);
  return dstime.getTime();
 } else { �扽�j���w��i�ŏI�j����5�j�̏ꍇ
  if (num  1  num  5) { alert(�扽�T�w��G���[�ł�); return; }
  if (wno  6) { alert(�j���w��G���[�ł�); return; }

  �c�F���[�̌�����肻�̔N����1���̗j�����v�Z
  if (month = 2) { zyear = year - 1; zmonth = month + 12; }
  else { zyear = year; zmonth = month; }  1��,2���͑O�N��13��,14���Ƃ���
  wday = (zyear + Math.floor(zyear4) - Math.floor(zyear100)
       + Math.floor(zyear400) + Math.floor((13zmonth + 8)5) + 1) % 7;

  �ŏI�j���w��̏ꍇ��5�j���L���̔���
  if (num == 5) {
    if (month == 2) {
      if (((year % 4 == 0) && (year % 100 != 0))  (year % 400 == 0))
                    { leap = 1; } else { leap = 0; } �[�N����
      if (leap == 0  wno != wday) { num -= 1; } �[�N��29���̂ݑ�5�j��
    } else if (month== 4  month== 6  month== 9  month== 11) { 30����
      if (wno = 1) { if( (wno+1) = wday && wday  (wno+6) ) { num -= 1; } }
               else { if( (wno+1) = wday  wday  (wno-1) ) { num -= 1; } }
    } else { 31����
      if (wno = 2) { if( (wno+1) = wday && wday  (wno+5) ) { num -= 1; } }
               else { if( (wno+1) = wday  wday  (wno-2) ) { num -= 1; } }
    }
  }
  ��(num)wno�j���͉������̌v�Z
  if (wday = wno) { dstime = (num-1)  7 + ((wno+1) - wday); }
              else { dstime = num  7 - (wday - (wno+1)); }

  �Z�o�����N�����̌ߑO1���̎��������ߓ����\���ɕϊ����߂�l�ɃZ�b�g
  dstime = new Date(year,month-1,dstime,1,0,0);
  return dstime.getTime();
 }
}
