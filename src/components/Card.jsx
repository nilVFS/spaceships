function Card(props) {
  const ship = props.ship

  return (
    <main className='main'>
      <div className="image-wrapper">
        <img src={ship.image} alt={ship.name} />
      </div>
      <div className="specifications glass">
        {ship.establishment_date && <p>Дата создания: <span>{ship.establishment_date}</span></p>}
        {ship.location && <p>Расположение: <span>{ship.location}</span></p>}
        {ship.area && <p>Площадь: <span>{ship.area}</span></p>}
        {ship.no_launches && <p>Пуски: <span>{ship.no_launches}</span></p>}
        {ship.no_employees && <p>Сотрудники: <span>{ship.no_employees}</span></p>}
        {ship.manufacturer && <p>Производитель: <span>{ship.manufacturer}</span></p>}
        {ship.first_launch_date && <p>Первый пуск: <span>{ship.first_launch_date}</span></p>}
        {ship.autonomous_flight_time && <p>Автономное время полета: <span>{ship.autonomous_flight_time}</span></p>}
        {ship.length && <p>Длина: <span>{ship.length}</span></p>}
        {ship.diameter && <p>Диаметр: <span>{ship.diameter}</span></p>}
        {ship.start_mass && <p>Стартовая масса: <span>{ship.start_mass}</span></p>}
        {ship.fuel_type && <p>Тип топлива: <span>{ship.fuel_type}</span></p>}
        {ship.fuel_supply && <p><span>Резервное топливо: {ship.fuel_supply}</span></p>}
        {ship.engine_thrust && <p><span>Тяга: {ship.engine_thrust}</span></p>}
        {ship.no_flights && <p>Полетов: <span>{ship.no_flights}</span></p>}
        {ship.no_stages && <p>Ступений: <span>{ship.no_stages}</span></p>}
        {ship.max_distance && <p>Максимальная дистанция: <span>{ship.max_distance}</span></p>}
        {ship.space_tugs && <p>Разгонных блоков: <span>{ship.space_tugs.map(tug => tug + " ")}</span></p>}
      </div>

      <button className="prev-slide glass" onClick={props.sub}>Назад</button>
      <button className="next-slide glass" onClick={props.add}>Далее</button>

      <div className="description glass">
        <p>{ship.description}</p>
      </div>
    </main>
  )
}

export default Card