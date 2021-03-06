/* @flow */

// This file is auto-generated by client/protocol/Makefile.

import engine from '../../engine'
import type {$Exact} from './more'
export type int = number
export type int64 = number
export type long = number
export type double = number
export type bytes = any
export type RPCError = {
  code: number,
  desc: string
}
export type AuthResult = {
  uid: UID;
  sid: SessionID;
}

export type Body = bytes

export type Category = string

export type DeviceID = bytes

export type Dismissal = {
  msgIDs?: ?Array<MsgID>;
  ranges?: ?Array<MsgRange>;
}

export type DurationMsec = int64

export type InBandMessage = {
  stateUpdate?: ?StateUpdateMessage;
  stateSync?: ?StateSyncMessage;
}

export type Item = {
  category: Category;
  dtime: TimeOrOffset;
  remindTimes?: ?Array<TimeOrOffset>;
  body: Body;
}

export type ItemAndMetadata = {
  md?: ?Metadata;
  item?: ?Item;
}

export type Message = {
  oobm?: ?OutOfBandMessage;
  ibm?: ?InBandMessage;
}

export type Metadata = {
  uid: UID;
  msgID: MsgID;
  ctime: Time;
  deviceID: DeviceID;
  inBandMsgType: int;
}

export type MsgID = bytes

export type MsgRange = {
  endTime: TimeOrOffset;
  category: Category;
}

export type OutOfBandMessage = {
  uid: UID;
  system: System;
  body: Body;
}

export type Reminder = {
  item: ItemAndMetadata;
  seqno: int;
  remindTime: Time;
}

export type ReminderID = {
  uid: UID;
  msgID: MsgID;
  seqno: int;
}

export type ReminderSet = {
  reminders?: ?Array<Reminder>;
  moreRemindersReady: bool;
}

export type SessionID = string

export type SessionToken = string

export type State = {
  items?: ?Array<ItemAndMetadata>;
}

export type StateSyncMessage = {
  md: Metadata;
}

export type StateUpdateMessage = {
  md: Metadata;
  creation?: ?Item;
  dismissal?: ?Dismissal;
}

export type SyncResult = {
  msgs?: ?Array<InBandMessage>;
  hash: bytes;
}

export type System = string

export type Time = long

export type TimeOrOffset = {
  time: Time;
  offset: DurationMsec;
}

export type UID = bytes

export type authAuthenticateSessionTokenRpcParam = $Exact<{
  session: SessionToken
}>

type authAuthenticateSessionTokenResult = AuthResult

export function authAuthenticateSessionTokenRpc (request: $Exact<{
  param: authAuthenticateSessionTokenRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: authAuthenticateSessionTokenResult) => void)}>) {
  engine.rpc({...request, method: 'auth.authenticateSessionToken'})
}
export type authUpdateRevokeSessionIDsRpcParam = $Exact<{
  sessionIDs?: ?Array<SessionID>
}>

export function authUpdateRevokeSessionIDsRpc (request: $Exact<{
  param: authUpdateRevokeSessionIDsRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any) => void)}>) {
  engine.rpc({...request, method: 'authUpdate.revokeSessionIDs'})
}
export type incomingConsumeMessageRpcParam = $Exact<{
  m: Message
}>

export function incomingConsumeMessageRpc (request: $Exact<{
  param: incomingConsumeMessageRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any) => void)}>) {
  engine.rpc({...request, method: 'incoming.consumeMessage'})
}
export type incomingConsumePublishMessageRpcParam = $Exact<{
  m: Message
}>

export function incomingConsumePublishMessageRpc (request: $Exact<{
  param: incomingConsumePublishMessageRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any) => void)}>) {
  engine.rpc({...request, method: 'incoming.consumePublishMessage'})
}
export type incomingStateByCategoryPrefixRpcParam = $Exact<{
  uid: UID,
  deviceid: DeviceID,
  timeOrOffset: TimeOrOffset,
  categoryPrefix: Category
}>

type incomingStateByCategoryPrefixResult = State

export function incomingStateByCategoryPrefixRpc (request: $Exact<{
  param: incomingStateByCategoryPrefixRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: incomingStateByCategoryPrefixResult) => void)}>) {
  engine.rpc({...request, method: 'incoming.stateByCategoryPrefix'})
}
export type incomingStateRpcParam = $Exact<{
  uid: UID,
  deviceid: DeviceID,
  timeOrOffset: TimeOrOffset
}>

type incomingStateResult = State

export function incomingStateRpc (request: $Exact<{
  param: incomingStateRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: incomingStateResult) => void)}>) {
  engine.rpc({...request, method: 'incoming.state'})
}
export type incomingSyncRpcParam = $Exact<{
  uid: UID,
  deviceid: DeviceID,
  ctime: Time
}>

type incomingSyncResult = SyncResult

export function incomingSyncRpc (request: $Exact<{
  param: incomingSyncRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: incomingSyncResult) => void)}>) {
  engine.rpc({...request, method: 'incoming.sync'})
}
export type outgoingBroadcastMessageRpcParam = $Exact<{
  m: Message
}>

export function outgoingBroadcastMessageRpc (request: $Exact<{
  param: outgoingBroadcastMessageRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any) => void)}>) {
  engine.rpc({...request, method: 'outgoing.broadcastMessage'})
}
export type remindDeleteRemindersRpcParam = $Exact<{
  reminderIDs?: ?Array<ReminderID>
}>

export function remindDeleteRemindersRpc (request: $Exact<{
  param: remindDeleteRemindersRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any) => void)}>) {
  engine.rpc({...request, method: 'remind.deleteReminders'})
}
export type remindGetRemindersRpcParam = $Exact<{
  maxReminders: int
}>

type remindGetRemindersResult = ReminderSet

export function remindGetRemindersRpc (request: $Exact<{
  param: remindGetRemindersRpcParam,
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: remindGetRemindersResult) => void)}>) {
  engine.rpc({...request, method: 'remind.getReminders'})
}
type authInternalCreateGregorSuperUserSessionTokenResult = SessionToken

export function authInternalCreateGregorSuperUserSessionTokenRpc (request: $Exact<{
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: authInternalCreateGregorSuperUserSessionTokenResult) => void)}>) {
  engine.rpc({...request, method: 'authInternal.createGregorSuperUserSessionToken'})
}
type incomingPingResult = string

export function incomingPingRpc (request: $Exact<{
  waitingHandler?: (waiting: boolean, method: string, sessionID: string) => void,
  incomingCallMap?: incomingCallMapType,
  callback?: (null | (err: ?any, response: incomingPingResult) => void)}>) {
  engine.rpc({...request, method: 'incoming.ping'})
}
export type rpc =
    authAuthenticateSessionTokenRpc
  | authInternalCreateGregorSuperUserSessionTokenRpc
  | authUpdateRevokeSessionIDsRpc
  | incomingConsumeMessageRpc
  | incomingConsumePublishMessageRpc
  | incomingPingRpc
  | incomingStateByCategoryPrefixRpc
  | incomingStateRpc
  | incomingSyncRpc
  | outgoingBroadcastMessageRpc
  | remindDeleteRemindersRpc
  | remindGetRemindersRpc

export type incomingCallMapType = $Exact<{
  'keybase.1.auth.authenticateSessionToken'?: (
    params: $Exact<{
      session: SessionToken
    }>,
    response: {
      error: (err: RPCError) => void,
      result: (result: authAuthenticateSessionTokenResult) => void
    }
  ) => void,
  'keybase.1.authInternal.createGregorSuperUserSessionToken'?: (
    params: $Exact<{}>,
    response: {
      error: (err: RPCError) => void,
      result: (result: authInternalCreateGregorSuperUserSessionTokenResult) => void
    }
  ) => void,
  'keybase.1.authUpdate.revokeSessionIDs'?: (
    params: $Exact<{
      sessionIDs?: ?Array<SessionID>
    }>,
    response: {
      error: (err: RPCError) => void,
      result: () => void
    }
  ) => void,
  'keybase.1.incoming.sync'?: (
    params: $Exact<{
      uid: UID,
      deviceid: DeviceID,
      ctime: Time
    }>,
    response: {
      error: (err: RPCError) => void,
      result: (result: incomingSyncResult) => void
    }
  ) => void,
  'keybase.1.incoming.consumeMessage'?: (
    params: $Exact<{
      m: Message
    }>,
    response: {
      error: (err: RPCError) => void,
      result: () => void
    }
  ) => void,
  'keybase.1.incoming.consumePublishMessage'?: (
    params: $Exact<{
      m: Message
    }>,
    response: {
      error: (err: RPCError) => void,
      result: () => void
    }
  ) => void,
  'keybase.1.incoming.ping'?: (
    params: $Exact<{}>,
    response: {
      error: (err: RPCError) => void,
      result: (result: incomingPingResult) => void
    }
  ) => void,
  'keybase.1.incoming.state'?: (
    params: $Exact<{
      uid: UID,
      deviceid: DeviceID,
      timeOrOffset: TimeOrOffset
    }>,
    response: {
      error: (err: RPCError) => void,
      result: (result: incomingStateResult) => void
    }
  ) => void,
  'keybase.1.incoming.stateByCategoryPrefix'?: (
    params: $Exact<{
      uid: UID,
      deviceid: DeviceID,
      timeOrOffset: TimeOrOffset,
      categoryPrefix: Category
    }>,
    response: {
      error: (err: RPCError) => void,
      result: (result: incomingStateByCategoryPrefixResult) => void
    }
  ) => void,
  'keybase.1.outgoing.broadcastMessage'?: (
    params: $Exact<{
      m: Message
    }>,
    response: {
      error: (err: RPCError) => void,
      result: () => void
    }
  ) => void,
  'keybase.1.remind.getReminders'?: (
    params: $Exact<{
      maxReminders: int
    }>,
    response: {
      error: (err: RPCError) => void,
      result: (result: remindGetRemindersResult) => void
    }
  ) => void,
  'keybase.1.remind.deleteReminders'?: (
    params: $Exact<{
      reminderIDs?: ?Array<ReminderID>
    }>,
    response: {
      error: (err: RPCError) => void,
      result: () => void
    }
  ) => void
}>

