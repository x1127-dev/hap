// import "source-map-support/register"; // registering node-source-map-support for typescript stack traces
import "./lib/definitions/index.ts"; // must be loaded before Characteristic and Service class
import { createDebug } from "./deps.ts";
import { HAPStorage } from "./lib/model/HAPStorage.ts";
import { version } from "./constants.ts";

/**
 * @group Utils
 */
export * as AccessoryLoader from "./lib/AccessoryLoader.ts";
/**
 * @group Utils
 */
export * as uuid from "./lib/util/uuid.ts";
export * from "./lib/model/HAPStorage.ts";
export * from "./lib/Accessory.ts";
export * from "./lib/Bridge.ts";
export * from "./lib/Service.ts";
export * from "./lib/Characteristic.ts";
export * from "./lib/AccessoryLoader.ts";
export * from "./lib/camera/index.ts";
export * from "./lib/tv/AccessControlManagement.ts";
export * from "./lib/HAPServer.ts";
export * from "./lib/datastream/index.ts";
export * from "./lib/controller/index.ts";
export * from "./lib/model/AccessoryInfo.ts";

export * from "./lib/util/clone.ts";
export * from "./lib/util/once.ts";
export * from "./lib/util/tlv.ts";
export * from "./lib/util/hapStatusError.ts";
export * from "./lib/util/color-utils.ts";
export * from "./lib/util/time.ts";
export * from "./lib/util/eventedhttp.ts";

export * from "./types.ts";
/**
 * @group Utils
 */
export * as LegacyTypes from "./accessories/types.ts";

const debug = createDebug("HAP-NodeJS:Advertiser");

/**
 * This method can be used to retrieve the current running library version of the HAP-NodeJS framework.
 * @returns The SemVer version string.
 *
 * @group Utils
 */
export function HAPLibraryVersion(): string {
  return version;
}

function printInit() {
  debug("Initializing HAP-NodeJS v%s ...", HAPLibraryVersion());
}
printInit();

/**
 *
 * @param {string} storagePath
 * @deprecated the need to manually initialize the internal storage was removed. If you want to set a custom
 *  storage path location, please use {@link HAPStorage.setCustomStoragePath} directly.
 *
 *  @group Utils
 */
export function init(storagePath?: string): void {
  console.log("DEPRECATED: The need to manually initialize HAP (by calling the init method) was removed. " +
    "If you want to set a custom storage path location, please ust HAPStorage.setCustomStoragePath directly. " +
    "This method will be removed in the next major update!");
  if (storagePath) {
    HAPStorage.setCustomStoragePath(storagePath);
  }
}

import * as Services from "./lib/definitions/ServiceDefinitions.ts";
import * as Characteristics from "./lib/definitions/CharacteristicDefinitions.ts";

/**
 * This namespace doesn't actually exist and is only used to generate documentation for all Service and Characteristic Definitions.
 *
 * Please access them via the static properties provided in {@link Service} and {@link Characteristic}.
 *
 * @group Utils
 */
export declare namespace _definitions { // eslint-disable-line @typescript-eslint/no-namespace
  export {
    Services,
    Characteristics,
  };
}
