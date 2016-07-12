<<<<<<< HEAD
// +build darwin,ios

// TODO

package libkb

func NewSecretStore(username NormalizedUsername) SecretStore {
	return nil
}

func HasSecretStore() bool {
	return false
}

func GetUsersWithStoredSecrets() ([]string, error) {
	return nil, nil
}

func GetTerminalPrompt() string {
	// TODO: Come up with specific prompts for other platforms.
	return "Store your key in the local secret store?"
=======
// Copyright 2015 Keybase, Inc. All rights reserved. Use of
// this source code is governed by the included BSD license.

// +build darwin,ios

package libkb

import "github.com/keybase/go-keychain"

func (k KeychainSecretStore) accessGroup() string {
	// GetStoredSecretAccessGroup MUST be "" for the simulator
	return k.context.GetStoredSecretAccessGroup()
}

func (k KeychainSecretStore) synchronizable() keychain.Synchronizable {
	return keychain.SynchronizableNo
}

func (k KeychainSecretStore) accessible() keychain.Accessible {
	return keychain.AccessibleWhenUnlockedThisDeviceOnly
>>>>>>> master
}
