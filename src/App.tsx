import './app.style.sass'
import {useAppDispatch, useAppSelector} from "./react-redux/hooks";
import ScreenType from "./structs/enums";
import PanoramicScreenComponent from "./screens/PanoramicScreen/PanoramicScreen.component";
import MainScreenComponent from "./screens/MainScreen/MainScreen.component";
import {fetchComponents, fetchImages} from "./react-redux/bases/image_storage/image_storage";
import {useEffect} from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchImages());
    dispatch(fetchComponents());
  }, [dispatch])

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
