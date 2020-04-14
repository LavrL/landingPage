import 'ymaps';

// interactive map
ymaps.ready(init);

function init() {
    let myMap;
    $('#map').click(function () {
        if (!myMap) {
            myMap = new ymaps.Map('map', {
                center: [55.798652, 37.765875],
                zoom: 13
            }, {
                searchControlProvider: 'yandex#search'
            });
            let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

                myPlacemarkWithContent = new ymaps.Placemark([55.798652, 37.765875], {
                    hintContent: 'Infosanteh',
                    balloonContent: 'г. Москва, ул. Советская 48 корп.3',
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
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                myMap.behaviors.disable('drag');
            }
            myMap.geoObjects
                .add(myPlacemarkWithContent);
        }
    });
}