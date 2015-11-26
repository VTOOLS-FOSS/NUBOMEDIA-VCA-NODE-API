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
 *  NuboNoseDetector interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:nubonosedetector.NuboNoseDetector
 */
function NuboNoseDetector(){
  NuboNoseDetector.super_.call(this);
};
inherits(NuboNoseDetector, Filter);


//
// Public methods
//

/**
 * To indicate  the algorithm if process all the images or only when it receives
 *
 * @alias module:nubonosedetector.NuboNoseDetector.detectByEvent
 *
 * @param {external:Integer} event
 *  0 (default) => process all the frames without constraints; 1 => process only
 *
 * @param {module:nubonosedetector.NuboNoseDetector~detectByEventCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboNoseDetector.prototype.detectByEvent = function(event, callback){
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
 * @callback module:nubonosedetector.NuboNoseDetector~detectByEventCallback
 * @param {external:Error} error
 */

/**
 * Specify how much the image size is reduced at each haar image 
 *
 * @alias module:nubonosedetector.NuboNoseDetector.multiScaleFactor
 *
 * @param {external:Integer} scaleFactor
 *  5-50 (25 default)
 *
 * @param {module:nubonosedetector.NuboNoseDetector~multiScaleFactorCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboNoseDetector.prototype.multiScaleFactor = function(scaleFactor, callback){
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
 * @callback module:nubonosedetector.NuboNoseDetector~multiScaleFactorCallback
 * @param {external:Error} error
 */

/**
 * process x every 4 frames
 *
 * @alias module:nubonosedetector.NuboNoseDetector.processXevery4Frames
 *
 * @param {external:Integer} xper4
 *  1,2,3,4 (default) => process x frames every 4 frames
 *
 * @param {module:nubonosedetector.NuboNoseDetector~processXevery4FramesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboNoseDetector.prototype.processXevery4Frames = function(xper4, callback){
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
 * @callback module:nubonosedetector.NuboNoseDetector~processXevery4FramesCallback
 * @param {external:Error} error
 */

/**
 * The noses  detected (x,y,width,height) are sent as metadata 
 *
 * @alias module:nubonosedetector.NuboNoseDetector.sendMetaData
 *
 * @param {external:Integer} metaData
 *  0 (default) => metadata are not sent; 1 => metadata are sent
 *
 * @param {module:nubonosedetector.NuboNoseDetector~sendMetaDataCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboNoseDetector.prototype.sendMetaData = function(metaData, callback){
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
 * @callback module:nubonosedetector.NuboNoseDetector~sendMetaDataCallback
 * @param {external:Error} error
 */

/**
 * Show or Hide the noses in the video stream
 *
 * @alias module:nubonosedetector.NuboNoseDetector.showNoses
 *
 * @param {external:Integer} viewNoses
 *  Determines wheter the detected noses will be displayed or not
 *
 * @param {module:nubonosedetector.NuboNoseDetector~showNosesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboNoseDetector.prototype.showNoses = function(viewNoses, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'viewNoses', viewNoses, {required: true});

  var params = {
    viewNoses: viewNoses
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'showNoses', params, callback), this)
};
/**
 * @callback module:nubonosedetector.NuboNoseDetector~showNosesCallback
 * @param {external:Error} error
 */

/**
 * this will be the width of the image that the algorithm is going to process to
 *
 * @alias module:nubonosedetector.NuboNoseDetector.widthToProcess
 *
 * @param {external:Integer} width
 *  160,320 (default),480,640
 *
 * @param {module:nubonosedetector.NuboNoseDetector~widthToProcessCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboNoseDetector.prototype.widthToProcess = function(width, callback){
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
 * @callback module:nubonosedetector.NuboNoseDetector~widthToProcessCallback
 * @param {external:Error} error
 */


/**
 * @alias module:nubonosedetector.NuboNoseDetector.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
NuboNoseDetector.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  }
};

/**
 * @alias module:nubonosedetector.NuboNoseDetector.events
 *
 * @extends module:core/abstracts.Filter.events
 */
NuboNoseDetector.events = Filter.events;


/**
 * Checker for {@link module:nubonosedetector.NuboNoseDetector}
 *
 * @memberof module:nubonosedetector
 *
 * @param {external:String} key
 * @param {module:nubonosedetector.NuboNoseDetector} value
 */
function checkNuboNoseDetector(key, value)
{
  if(!(value instanceof NuboNoseDetector))
    throw ChecktypeError(key, NuboNoseDetector, value);
};


module.exports = NuboNoseDetector;

NuboNoseDetector.check = checkNuboNoseDetector;
