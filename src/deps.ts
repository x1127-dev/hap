export { default as createDebug } from "npm:debug";

export { default as storage } from "npm:node-persist@^0.0.11";
export type { LocalStorage } from "npm:node-persist@^0.0.11";

export { default as bonjour } from "npm:bonjour-hap@~3.6.4";
export type {
  BonjourHAP,
  BonjourHAPService,
  MulticastOptions,
} from "npm:bonjour-hap@~3.6.4";

export {
  CiaoService,
  default as ciao,
  Responder,
  ServiceEvent,
  ServiceType,
} from "https://esm.sh/@homebridge/ciao@^1.1.5";
export type {
  MDNSServerOptions,
  ServiceTxt,
} from "https://esm.sh/@homebridge/ciao@^1.1.5";
export type {
  InterfaceName,
  IPAddress,
} from "https://esm.sh/@homebridge/ciao@^1.1.5/lib/NetworkManager";
export { getNetAddress } from "https://esm.sh/@homebridge/ciao@^1.1.5/lib/util/domain-formatter";

export { default as dbus } from "npm:@homebridge/dbus-native@^0.5.0";
export type {
  DBusInterface,
  InvokeError,
  MessageBus,
} from "npm:@homebridge/dbus-native@^0.5.0";

export { default as tweetnacl } from "npm:tweetnacl@^1.0.3";
export type { BoxKeyPair } from "npm:tweetnacl@^1.0.3";

export { SRP, SrpServer } from "npm:fast-srp-hap@~2.0.4";
export { default as hkdf } from "npm:futoin-hkdf@~1.4.3";
