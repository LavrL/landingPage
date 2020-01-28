ymaps.ready(init) ;
function init() {
var myMap;
    $('#map').click(function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [55.798652, 37.765875],
                    zoom: 13
                }, {
                    searchControlProvider: 'yandex#search'
                });
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


      myPlacemarkWithContent = new ymaps.Placemark([55.798652, 37.765875], {
          hintContent: 'РќР°С€ РѕС„РёСЃ',
          balloonContent: 'Рі. РњРѕСЃРєРІР°, СѓР». РЎРѕРІРµС‚СЃРєР°СЏ 48 РєРѕСЂРї. 3',
                    
      }, 
      {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/map-sign.png',
          iconImageSize: [100, 100],
          iconImageOffset: [-30, -30],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout
      });

myMap.behaviors.disable('scrollZoom');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	myMap.behaviors.disable('drag');
}  
  myMap.geoObjects
      .add(myPlacemarkWithContent);
            }
    });
}