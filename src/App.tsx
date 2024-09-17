import './app.style.sass'
import {useAppDispatch, useAppSelector} from "./react-redux/hooks";
import ScreenType from "./structs/enums";
import PanoramicScreenComponent from "./screens/PanoramicScreen/PanoramicScreen.component";
import MainScreenComponent from "./screens/MainScreen/MainScreen.component";
import {fetchImages} from "./react-redux/bases/image_storage/image_storage";

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchImages())
  const screen_type : ScreenType = useAppSelector((state) => state.screen_type.value);

  return <div className="app-styler">
    {
      screen_type === ScreenType.Selector
          ? <MainScreenComponent margin={"5%"}/>
          : <PanoramicScreenComponent/>
    }
  </div>
}

export default App;
