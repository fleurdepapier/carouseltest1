/**
 *
 * Photo Gallery with AngularJS and CSS3
 * http://www.script-tutorials.com/photo-gallery-with-angularjs-and-css3/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

angular.module('example366', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: 'images/photos/01.jpg', desc: 'Image 01'},
        {src: 'images/photos/02.jpg', desc: 'Image 02'},
        {src: 'images/photos/03.jpg', desc: 'Image 03'},
        {src: 'images/photos/04.jpg', desc: 'Image 04'},
        {src: 'images/photos/05.jpg', desc: 'Image 05'},
        {src: 'images/photos/06.jpg', desc: 'Image 06'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});

