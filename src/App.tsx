import './app.style.sass'
import main_screenComponent from "./screens/main_screen/main_screen.component";
import {useAppSelector} from "./react-redux/hooks";
import ScreenType from "./structs/enums";

function App() {
  let screen_type = useAppSelector((state) => state.screen_type.value);

  if (screen_type === ScreenType.Selector) {
    return <div className="app-styler">{main_screenComponent({margin : "5%"})}</div>
  }
  else {
    return null
  }
}

export default App;
