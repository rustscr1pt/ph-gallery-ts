import './app.style.sass'
import {useAppSelector} from "./react-redux/hooks";
import ScreenType from "./structs/enums";
import main_screenComponent from "./screens/MainScreen/MainScreen.component";

function App() {
  let screen_type : ScreenType = useAppSelector((state) => state.screen_type.value);

  return <div className="app-styler">
    {
      screen_type === ScreenType.Selector
          ? main_screenComponent({margin: "5%"})
          : null
    }
  </div>
}

export default App;
