import { LogBox } from "react-native";
import registerRootComponent from "expo/build/launch/registerRootComponent";

import App from "./app/app";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["Setting a timer"]);

registerRootComponent(App);
