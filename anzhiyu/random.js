var posts=["2024/09/18/travel/CToB_Trek/","2024/10/24/travel/DangLing/","2024/11/27/travel/LeDuoManYin/","2024/10/15/travel/QingDao/","2024/03/23/travel/EMeiHouShan/","2024/09/08/travel/ShenDaGe/","2024/11/23/travel/TheTopOfTheThreeGorges/","2024/09/11/xiaomi_develop/FCM_record/","2024/10/11/technology/email/Email_OAuth2/","2024/09/25/live/food/Food/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };