ymaps.ready(init) ;
function init() {
var myMap;
    $('#map').click(function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [55.798652, 37.765875], // РњРѕСЃРєРІР°
                    zoom: 13
                }, {
                    searchControlProvider: 'yandex#search'
                });
                //РЎРѕР·РґР°С‘Рј РјР°РєРµС‚ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


      myPlacemarkWithContent = new ymaps.Placemark([55.798652, 37.765875], {
          hintContent: 'РќР°С€ РѕС„РёСЃ',
          balloonContent: 'Рі. РњРѕСЃРєРІР°, СѓР». РЎРѕРІРµС‚СЃРєР°СЏ 48 РєРѕСЂРї. 3',
                    
      }, 
      {
          // РћРїС†РёРё.
          // РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
          iconLayout: 'default#imageWithContent',
          // РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
          iconImageHref: 'img/map-sign.png',
          // Р Р°Р·РјРµСЂС‹ РјРµС‚РєРё.
          iconImageSize: [100, 100],
          // РЎРјРµС‰РµРЅРёРµ Р»РµРІРѕРіРѕ РІРµСЂС…РЅРµРіРѕ СѓРіР»Р° РёРєРѕРЅРєРё РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ
          // РµС‘ "РЅРѕР¶РєРё" (С‚РѕС‡РєРё РїСЂРёРІСЏР·РєРё).
          iconImageOffset: [-30, -30],
          // РЎРјРµС‰РµРЅРёРµ СЃР»РѕСЏ СЃ СЃРѕРґРµСЂР¶РёРјС‹Рј РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ СЃР»РѕСЏ СЃ РєР°СЂС‚РёРЅРєРѕР№.
          iconContentOffset: [15, 15],
          // РњР°РєРµС‚ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ.
          iconContentLayout: MyIconContentLayout
      });

    //РѕС‚РєР»СЋС‡Р°РµРј Р·СѓРј РєРѕР»С‘СЃРёРєРѕРј РјС‹С€РєРё
myMap.behaviors.disable('scrollZoom');
//РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…... (РїСЂРѕРІРµСЂСЏРµРј РїРѕ userAgent Р±СЂР°СѓР·РµСЂР°)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	//... РѕС‚РєР»СЋС‡Р°РµРј РїРµСЂРµС‚Р°СЃРєРёРІР°РЅРёРµ РєР°СЂС‚С‹
	myMap.behaviors.disable('drag');
}  
  myMap.geoObjects
      // .add(myPlacemark)
      .add(myPlacemarkWithContent);
            }
    });
}