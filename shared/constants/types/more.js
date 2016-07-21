// @flow

import {Component} from 'react' // eslint-disable-line
import {proveCommon} from './keybase-v1'
import type {Device as _Device, DeviceID, Time} from './flow-types'

export type Platforms = $Keys<typeof proveCommon.ProofType>
export type ProvablePlatforms = 'twitter' | 'reddit' | 'github' | 'coinbase' | 'hackernews' | 'dns' | 'genericWebSite'
export type PlatformsExpanded = Platforms | 'btc' | 'http' | 'https'

export type DeviceType = 'mobile' | 'desktop' | 'backup'
export type $Exact<X> = $Shape<X> & X

export type Device = {
  name: string,
  deviceID: DeviceID,
  type: DeviceType,
  created: Time,
  currentDevice: boolean,
  provisioner: ?_Device,
  provisionedAt: ?Time,
  revokedAt: ?Time,
  lastUsed: ?Time,
}

// Converts a string to the DeviceType enum, logging an error if it doesn't match
export function toDeviceType (s: string): DeviceType {
  switch (s) {
    case 'mobile':
    case 'desktop':
    case 'backup':
      return s
    default:
      console.warn('Unknown Device Type %s. Defaulting to `desktop`', s)
      return 'desktop'
  }
}

export type _PropsOf<Props, C: Component<*, Props, *>> = Props // eslint-disable-line
export type PropsOf<C> = _PropsOf<*, C>

export type DumbComponentMap<C: Component<*, *, *>> = {
  component: Class<C>,
  mocks: {
    [key: string]: PropsOf<C>
  }
}
