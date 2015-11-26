/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create an element
 *
 * @classdesc
 *  NuboFaceDetector interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:nubofacedetector.NuboFaceDetector
 */
function NuboFaceDetector(){
  NuboFaceDetector.super_.call(this);
};
inherits(NuboFaceDetector, Filter);


//
// Public methods
//

/**
 * To indicate to the algorithm if process all the images or only when it 
 * receives an event
 *
 * @alias module:nubofacedetector.NuboFaceDetector.detectByEvent
 *
 * @param {external:Integer} event
 *  0 (default) => process all the frames without constraints; 1 => process only
 *
 * @param {module:nubofacedetector.NuboFaceDetector~detectByEventCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboFaceDetector.prototype.detectByEvent = function(event, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'event', event, {required: true});

  var params = {
    event: event
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'detectByEvent', params, callback), this)
};
/**
 * @callback module:nubofacedetector.NuboFaceDetector~detectByEventCallback
 * @param {external:Error} error
 */

/**
 * Specify how much the image size is reduced at each haar image 
 *
 * @alias module:nubofacedetector.NuboFaceDetector.multiScaleFactor
 *
 * @param {external:Integer} scaleFactor
 *  5-50 (25 default)
 *
 * @param {module:nubofacedetector.NuboFaceDetector~multiScaleFactorCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboFaceDetector.prototype.multiScaleFactor = function(scaleFactor, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'scaleFactor', scaleFactor, {required: true});

  var params = {
    scaleFactor: scaleFactor
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'multiScaleFactor', params, callback), this)
};
/**
 * @callback module:nubofacedetector.NuboFaceDetector~multiScaleFactorCallback
 * @param {external:Error} error
 */

/**
 * process x every 4 frames
 *
 * @alias module:nubofacedetector.NuboFaceDetector.processXevery4Frames
 *
 * @param {external:Integer} xper4
 *  1,2,3,4 (default) => process x frames every 4 frames
 *
 * @param {module:nubofacedetector.NuboFaceDetector~processXevery4FramesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboFaceDetector.prototype.processXevery4Frames = function(xper4, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'xper4', xper4, {required: true});

  var params = {
    xper4: xper4
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'processXevery4Frames', params, callback), this)
};
/**
 * @callback module:nubofacedetector.NuboFaceDetector~processXevery4FramesCallback
 * @param {external:Error} error
 */

/**
 * The faces detected (x,y,width,height) are sent as metadata 
 *
 * @alias module:nubofacedetector.NuboFaceDetector.sendMetaData
 *
 * @param {external:Integer} metaData
 *  0 (default) => metadata are not sent; 1 => metadata are sent
 *
 * @param {module:nubofacedetector.NuboFaceDetector~sendMetaDataCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboFaceDetector.prototype.sendMetaData = function(metaData, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'metaData', metaData, {required: true});

  var params = {
    metaData: metaData
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'sendMetaData', params, callback), this)
};
/**
 * @callback module:nubofacedetector.NuboFaceDetector~sendMetaDataCallback
 * @param {external:Error} error
 */

/**
 * Show or Hide the faces in the video stream
 *
 * @alias module:nubofacedetector.NuboFaceDetector.showFaces
 *
 * @param {external:Integer} viewFaces
 *  Determines wheter the detected faces will be displayed or not
 *
 * @param {module:nubofacedetector.NuboFaceDetector~showFacesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboFaceDetector.prototype.showFaces = function(viewFaces, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'viewFaces', viewFaces, {required: true});

  var params = {
    viewFaces: viewFaces
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'showFaces', params, callback), this)
};
/**
 * @callback module:nubofacedetector.NuboFaceDetector~showFacesCallback
 * @param {external:Error} error
 */

/**
 * this will be the width of the image that the algorithm is going to process to
 *
 * @alias module:nubofacedetector.NuboFaceDetector.widthToProcess
 *
 * @param {external:Integer} width
 *  160,320 (default),480,640
 *
 * @param {module:nubofacedetector.NuboFaceDetector~widthToProcessCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboFaceDetector.prototype.widthToProcess = function(width, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'width', width, {required: true});

  var params = {
    width: width
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'widthToProcess', params, callback), this)
};
/**
 * @callback module:nubofacedetector.NuboFaceDetector~widthToProcessCallback
 * @param {external:Error} error
 */


/**
 * @alias module:nubofacedetector.NuboFaceDetector.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
NuboFaceDetector.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  }
};

/**
 * @alias module:nubofacedetector.NuboFaceDetector.events
 *
 * @extends module:core/abstracts.Filter.events
 */
NuboFaceDetector.events = Filter.events;


/**
 * Checker for {@link module:nubofacedetector.NuboFaceDetector}
 *
 * @memberof module:nubofacedetector
 *
 * @param {external:String} key
 * @param {module:nubofacedetector.NuboFaceDetector} value
 */
function checkNuboFaceDetector(key, value)
{
  if(!(value instanceof NuboFaceDetector))
    throw ChecktypeError(key, NuboFaceDetector, value);
};


module.exports = NuboFaceDetector;

NuboFaceDetector.check = checkNuboFaceDetector;