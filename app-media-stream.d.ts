/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-media-stream.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

/**
 * `app-media-stream` is an element that converts a provided video device and/or
 * audio device into a media stream.
 */
interface AppMediaStreamElement extends Polymer.Element {

  /**
   * The audio device to use when creating the media stream.
   */
  audioDevice: MediaDeviceInfo|null;

  /**
   * The video device to use when creating the media stream.
   */
  videoDevice: MediaDeviceInfo|null;

  /**
   * The audio constraints to use when creating the media stream.
   */
  audioConstraints: object|null|undefined;

  /**
   * The video constraints to use when creating the media stream.
   */
  videoConstraints: object|null|undefined;

  /**
   * A media stream that is created using the configured audio and/or
   * video device(s).
   */
  readonly stream: MediaStream|null;

  /**
   * If true, a media stream will be created. If false, the media stream
   * will be discarded and the stream property will be unset. Discarding
   * the media stream is akin to turning off access to the camera and/or
   * microphone, and is useful in some UX conditions (e.g., switching
   * tabs).
   */
  active: boolean|null|undefined;

  /**
   * A reference to the constraints that are used when requesting the
   * media stream.
   */
  readonly constraints: object|null|undefined;
  _combineConstraints(inputConstraints: any, inputDevice: any): any;
  _updateConstraints(): void;
  _updateStream(): void;
}

interface HTMLElementTagNameMap {
  "app-media-stream": AppMediaStreamElement;
}