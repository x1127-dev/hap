import { Service } from "../Service.ts";
// noinspection JSDeprecatedSymbols
import {
  CameraStreamingDelegate,
  PrepareStreamCallback,
  PrepareStreamRequest,
  PrepareStreamResponse,
  SnapshotRequest,
  SnapshotRequestCallback,
  StreamController,
  StreamingRequest,
  StreamRequest,
  StreamRequestCallback,
} from "../../index.ts";
import { NodeCallback, SessionIdentifier } from "../../types.ts";

// noinspection JSDeprecatedSymbols
/**
 * @group Camera
 * @deprecated
 */
export type PreparedStreamRequestCallback = (response: PreparedStreamResponse) => void;
/**
 * @group Camera
 * @deprecated
 */
export type PreparedStreamResponse = PrepareStreamResponse;

/**
 * @group Camera
 */
// noinspection JSDeprecatedSymbols,JSUnusedGlobalSymbols
export type Camera = LegacyCameraSource; // provide backwards compatibility
// noinspection JSDeprecatedSymbols
/**
 * Interface of and old style CameraSource. See {@link Accessory.configureCameraSource} for more Information.
 *
 * @group Camera
 * @deprecated was replaced by {@link CameraStreamingDelegate} utilized by the {@link CameraController}
 */
export interface LegacyCameraSource {

  services: Service[];
  streamControllers: StreamController[];

  handleSnapshotRequest(request: SnapshotRequest, callback: NodeCallback<Buffer>): void;

  prepareStream(request: PrepareStreamRequest, callback: PreparedStreamRequestCallback): void;
  handleStreamRequest(request: StreamRequest): void;

  handleCloseConnection(connectionID: SessionIdentifier): void;

}

/**
 * @group Camera
 */
// noinspection JSDeprecatedSymbols
export class LegacyCameraSourceAdapter implements CameraStreamingDelegate {

  private readonly cameraSource: LegacyCameraSource;

  constructor(cameraSource: LegacyCameraSource) {
    this.cameraSource = cameraSource;
  }

  handleSnapshotRequest(request: SnapshotRequest, callback: SnapshotRequestCallback): void {
    this.cameraSource.handleSnapshotRequest(request, (error, buffer) => {
      callback(error? error: undefined, buffer);
    });
  }

  prepareStream(request: PrepareStreamRequest, callback: PrepareStreamCallback): void {
    this.cameraSource.prepareStream(request, response => {
      callback(undefined, response);
    });
  }

  handleStreamRequest(request: StreamingRequest, callback: StreamRequestCallback): void {
    // @ts-expect-error: compatible types
    this.cameraSource.handleStreamRequest(request);
    callback();
  }

  forwardCloseConnection(sessionID: SessionIdentifier): void {
    // In the legacy type CameraSource API it was required that the plugin dev would forward this call to the
    // handleCloseConnection of the "StreamController". This is not needed anymore and is automatically handled
    // by HAP-NodeJS. However, devs could possibly define other stuff in there so we still forward this call.
    this.cameraSource.handleCloseConnection(sessionID);
  }

}
