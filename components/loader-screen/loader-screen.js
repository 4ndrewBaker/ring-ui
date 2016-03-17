import React from 'react';
import Loader from '../loader/loader';
import RingComponent from '../ring-component/ring-component';
import './loader-screen.scss';
import classNames from 'classnames';

/**
 * @name Loader Screen
 * @constructor
 * @extends {ReactComponent}
 * @example
    <example name="Loader Screen">
     <file name="index.html">
       <div id="loader-screen"></div>
     </file>

     <file name="index.js" webpack="true">
       var render = require('react-dom').render;
       var LoaderScreen = require('ring-ui/components/loader-screen/loader-screen');

       render(
         LoaderScreen.factory(),
         document.getElementById('loader-screen')
       );
     </file>
   </example>
   <example name="Loader Screen With Message">
     <file name="index.html">
       <div id="loader-screen"></div>
     </file>

     <file name="index.js" webpack="true">
       var render = require('react-dom').render;
       var LoaderScreen = require('ring-ui/components/loader-screen/loader-screen');

       render(
         LoaderScreen.factory({message: 'Loading...'}),
         document.getElementById('loader-screen')
       );
     </file>
   </example>
 */
export default class LoaderScreen extends RingComponent {
  render() {
    const classes = classNames(
      'ring-loader-screen__loader',
      {
        'ring-loader-screen__loader_without-spacings': !this.props.message
      }
    );

    return (
      <div className="ring-loader-screen">
        <Loader
          {...this.props}
          className={classes}
        />
      </div>
    );
  }
}