# Требования к проекту
### Содержание
1. [Введение](#1) <br>
  1.1. [Назначение](#1.1) <br>
  1.2. [Бизнес-требования](#1.2) <br>
      1.2.1. [Границы проекта](#1.2.1) <br>
  1.3 [Аналоги](#1.3) <br>
2. [Требования пользователя](#2) <br>
  2.1. [Программные интерфейсы](#2.1) <br>
  2.2. [Интерфейс пользователя](#2.2) <br>
  2.3. [Характеристики пользователей](#2.3) <br>
  2.4. [Предположения и зависимости](#2.4) <br>
3. [Системные требования](#3.) <br>
  3.1. [Функциональные требования](#3.1) <br>
  3.2. [Нефункциональные требования](#3.2) <br>
     3.2.1. [Атрибуты качества](#3.2.1) <br>
     3.2.2. [Ограничения](#3.2.2) <br>

### 1. Введение <a name="1"></a>
#### 1.1 Назначение <a name="1.1"></a>
[SpaceY](https://github.com/vectordiman/SpaceY) - это веб-сервис, позволяющий следить за последними проектами SpaceX.
#### 1.2 Бизнес-требования <a name="1.2"></a>
##### 1.2.1. Границы проекта <a name="1.2.1"></a>
Сервис даст возможность просмотра информации о совершенных и предстоящих запусках ракет, а также о характеристиках космических кораблей, капсул и полезных нагрузок.
#### 1.3 Аналоги <a name="1.3"></a>
Аналогами данного проекта являются:
* [XLaunch](https://apps.apple.com/us/app/xlaunch/id1502939751) - это iOS приложение для отслеживания информации о запусках SpaceX для космических энтузиастов.
* [SpaceX Companion](https://play.google.com/store/apps/details?id=nl.studionoorderlicht.spacex) - это неофициальное приложение-компаньон, работающее на SpaceX API, Reddit и некоторой магии.
* [Rocket Downgrange](https://rocketdownrange.com/) - это любительский проект, который информирует и вдохновляет следующее поколение исследователей космоса.
### 2. Требования пользователя <a name="2"></a>
#### 2.1. Программные интерфейсы <a name="2.1"></a>
* [SpaceX API](https://github.com/r-spacex/SpaceX-API) - REST API с открытым исходным кодом для получения данных о запусках, ракетах, ядрах, капсулах, спутниках, стартовых площадках и посадочных площадках.
* [Java Spring](https://spring.io/projects/spring-boot) - универсальный фреймворк с открытым исходным кодом для Java-платформы.
* [Angular](https://angular.io/) - открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript.
* [MySQL](https://www.mysql.com/) - cамая популярная в мире база данных с открытым исходным кодом.
* [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ru) - API проигрывателя IFrame позволяет встраивать проигрыватель видео YouTube на сайт и управлять использованием JavaScript. 
#### 2.2. Интерфейс пользователя <a name="2.2"></a>
Графический интерфейс проекта представлен с помощью мокапов [главного окна](https://github.com/vectordiman/SpaceY/blob/master/documentation/mockups/Main.png), [окна меню](https://github.com/vectordiman/SpaceY/blob/master/documentation/mockups/Menu.png) и [окна деталей](https://github.com/vectordiman/SpaceY/blob/master/documentation/mockups/Detail.png).
#### 2.3. Характеристики пользователей <a name="2.3"></a>
Целевой аудиторией являются пользователи веб-браузеров, интересующиеся космосом и тем, что с ним связано.
#### 2.4. Предположения и зависимости <a name="2.4"></a>
Сервис будет зависеть от базы данных, к которой он будет подключен. Сбор и обработка информации от обратной связи также могут повлиять на требования к сервису. 
### 3. Системные требования <a name="3"></a>
Запуск и работа сервиса во всех браузерах с поддержкой HTML5.
#### 3.1. Функциональные требования <a name="3.1"></a>
Пользователю предоставлены возможности, представленные в таблице.

Функция | Требования
--- | ---
Предоставление подробной информации о капсулах Dragon | Сервис должен предоставить пользователю возможность просмотра подробной информации о капсулах Dragon
Предоставление подробной информации о первых ступенях ракет | Сервис должен предоставить пользователю возможность просмотра информации о первых ступенях ракет
Предоставление подробной информации о членах экипажа Dragon | Сервис должен предоставить пользователю возможность просмотра информации о членах экипажа Dragon
Предоставление пользователю подробной информации о полезных нагрузках | Сервис должен предоставить пользователю возможность просмотра информации о полезных нагрузках
Предоставление подробной информации о спутниках и орбитах Starlink | Сервис должен предоставить пользователю возможность просмотра информации о спутниках и орбитах Starlink
Предоставление подробной информации о версиях капсулы Dragon | Сервис должен предоставить пользователю возможность просмотра информации о версиях капсулы Dragon
Предоставление подробной информации о посадочных площадках и кораблях | Сервис должен предоставить пользователю возможность просмотра информации о посадочных площадках и кораблях
Предоставление подробной информации о запусках | Сервис должен предоставить пользователю возможность просмотра информации о запусках
Предоставление пользователю подробной информации о стартовых площадках | Сервис должен предоставить пользователю возможность просмотра информации о стартовых площадках
Предоставление подробной информации о запускаемых полезных нагрузках | Сервис должен предоставить пользователю возможность просмотра информации о запускаемых полезных нагрузках
Предоставление пользователю подробной информации о Tesla Roadster | Сервис должен предоставить пользователю возможность просмотра информации о Tesla Roadster
Предоставление подробной информации о версиях ракет | Сервис должен предоставить пользователю возможность просмотра информации о версиях ракет
Предоставление подробной информации о кораблях во флоте SpaceX | Сервис должен предоставить пользователю возможность просмотра информации о кораблях во флоте SpaceX
Предоставление пользователю подробной информации о спутниках и орбитах Starlink | Сервис должен предоставить пользователю возможность просмотра информации о спутниках и орбитах Starlink
Предоставление подробной информации о специальных мероприятиях SpaceX | Сервис должен предоставить пользователю возможность просмотра информации о специальных мероприятиях SpaceX
Предоставление пользователю подробной информации о данных, полученных с марсоходов | Сервис должен предоставить пользователю возможность просмотра информации о данных, полученных с марсоходов
Предоставление подробной информации о компании SpaceX | Сервис должен предоставить пользователю возможность просмотра информации о компании SpaceX
Предоставление возможности просмотра трансляций и видео запусков миссий | Сервис должен предоставить пользователю возможность просмотра видео и трансляций YouTube в встраиваемых плеерах
Предоставление пользователю возможности произвести оценку вероятности запуска | Сервис должен предоставить пользователю возможность оценить вероятность запуска

#### 3.2. Нефункциональные требования <a name="3.2"></a>
  ##### 3.2.1. Атрибуты качества <a name="3.2.1"></a>
* Минимально возможное время обработки запросов 
* Надежность за счёт модульного тестирования
* Короткий срок исправления сбоев
* Устойчивость в случае пиковой нагрузки. <br/>
##### 3.2.2 Ограничения <a name="3.2.2"></a>
Система должна быть реализована с помощью Java и TypeScript