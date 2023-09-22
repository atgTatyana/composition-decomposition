// отображение контента погоды
export const Weather = () => {
  return (
    <div className='weather'>
      <img src="https://yastatic.net/weather/i/icons/confident/dark/svg/bkn_ra_d.svg" alt="..." />
      <div>+17°</div>
      <div>
        Утром +17,<br />
        днём +20
      </div>
    </div>    
  )
}
