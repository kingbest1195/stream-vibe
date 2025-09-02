// Этот файл создан для обеспечения генерации спрайта иконок в Minista
// Он импортирует MinistaIcon, чтобы Minista знал о необходимости создания иконок
import { Icon as MinistaIcon } from "minista"

// Создаем скрытый компонент для принудительной генерации иконок
const HiddenIconLoader = () => {
  return (
    <div style={{ display: "none" }}>
      <MinistaIcon iconId="play" />
    </div>
  )
}

export default HiddenIconLoader
