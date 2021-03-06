/*
 * File to stash local debug changes to. Never check this in with changes
 */

import {createRouterState} from './reducers/router'
import {updateDebugConfig} from './actions/dev'
import * as Tabs from './constants/tabs'

let config = {
  allowStartupFailure: false,
  printRPC: false,
  showAllTrackers: false,
  redirectOnLogout: true,
  enableStoreLogging: false,
  enableActionLogging: true,
  forwardLogs: true,
  devStoreChangingFunctions: false,
  printOutstandingRPCs: false,
  reactPerf: false,
  overrideLoggedInTab: null,
  printRoutes: false,
  logStatFrequency: 0,
  actionStatFrequency: 0,
}

if (__DEV__ && true) {
  config.allowStartupFailure = true
  config.printRPC = true
  config.showAllTrackers = false
  config.redirectOnLogout = false
  config.enableStoreLogging = true
  config.enableActionLogging = false
  config.forwardLogs = true
  config.devStoreChangingFunctions = true
  config.printOutstandingRPCs = true
  config.reactPerf = false
  config.overrideLoggedInTab = Tabs.settingsTab
  config.dumbFilter = ''
  config.dumbIndex = 0
  config.dumbFullscreen = false
  config.printRoutes = true
}

export const {
  enableActionLogging,
  allowStartupFailure,
  printRPC,
  showDevTools,
  showAllTrackers,
  reduxDevToolsSelect,
  enableStoreLogging,
  forwardLogs,
  devStoreChangingFunctions,
  printOutstandingRPCs,
  reactPerf,
  overrideLoggedInTab,
  printRoutes,
  logStatFrequency,
  actionStatFrequency,
} = config

export function initTabbedRouterState (state) {
  if (!__DEV__) {
    return state
  }

  return {
    ...state,
    tabs: {
      ...state.tabs,
      [Tabs.loginTab]: createRouterState([], []),
      [Tabs.settingsTab]: createRouterState(['devMenu', 'dumbSheet'], []),
    },
    activeTab: Tabs.settingsTab,
  }
}

export function setup (store) {
  const updateLiveConfig = () => store.dispatch(updateDebugConfig(require('./local-debug-live')))

  if (module.hot) {
    module.hot.accept(() => updateLiveConfig())
  }
  updateLiveConfig()
}

export function envVarDebugJson () {
  return null
}
