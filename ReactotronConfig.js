import Reactotron from "reactotron-react-native"
Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(19000) // let's connect!