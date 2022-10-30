import { StatusBar } from 'expo-status-bar';

import Navigation from './navigations/SimrsNavigation'

import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (

      <Navigation />
  );
}

