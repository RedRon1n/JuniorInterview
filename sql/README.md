# Задания «SQL»

Для решения задач вам потребуется перейти по ссылке https://sql-academy.org/ru/sandbox. 
Там вы будете выполнять все запросы для теста. По ссылке будет доступна схема `Air travels`, в которой есть
4 таблицы: `TRIP`, `PASS_IN_TRIP`, `PASSENGER`, `COMPANY`. Ответы (SQL запросы) будет необходимо сохранить в этом файле `README`
после каждого задания.

### Задание 1.

C помощью SELECT выведите всех пассажиров, которые летят на самолете `Boeing` от компании `air_France`.
Обязательные поля для вывода: ID пассажира, Имя пассажира как `PASSENGER_NAME`, Название самолета и название компании
как `COMPANY_NAME`.

select `passenger`.`id`, `passenger`.`name` as `PASSENGER_NAME`, `company`.`name` as `COMPANY_NAME` from `Trip` inner join `pass_in_trip` on `trip`.`id` = `pass_in_trip`.`trip` inner join `passenger` on `pass_in_trip`.`passenger` = `passenger`.`id` inner join `company` on `trip`.`company` = `company`.`id` where exists (select * from `Company` where `Trip`.`company` = `Company`.`id` and `name` = 'air_France') and `plane` = 'Boeing'

### Задание 2.

C помощью SELECT выведите количество пассажиров относительно каждого полета(`Pass_in_trip.trip`).
Отсортируйте записи относительно количество пассажиров в порядке убывания(от большего к меньшему).
Обязательные поля для вывода: Номер полета и Количество пассажиров.

select `id`, (select count(*) from `Passenger` inner join `Pass_in_trip` on `Passenger`.`id` = `Pass_in_trip`.`passenger` where `Trip`.`id` = `Pass_in_trip`.`trip`) as `passengers_count` from `Trip` order by `passengers_count` desc

### Задание 3.

С помощью SELECT выведите количество всех пассажиров из таблицы PASSENGER, имена которых начинаются с одной и той же буквы.
Отсортируйте записи по убыванию(от большего к меньшему) относительно количества пассажиров. Показывать только те записи,
где количество больше 1. Обязательные поля для вывода: `FIRST_CHAR`(Первая буква имени) 
и `COUNT` (Количество пассажиров, имена которых начинаются с этой буквы).

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 3 ЗАДАНИЯ ЗДЕСЬ -->

<!-- После выполнения всех заданий, необходимо сделать push в репозиторий и отправить ссылку на него -->
