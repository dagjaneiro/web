//= require_tree ./app

// css
import 'sn-stylekit/dist/stylekit.css';
import '../stylesheets/main.css.scss';

// Vendor
import 'angular';
import '../../../vendor/assets/javascripts/angular-sanitize';
import '../../../vendor/assets/javascripts/zip/deflate';
import '../../../vendor/assets/javascripts/zip/inflate';
import '../../../vendor/assets/javascripts/zip/zip';
import '../../../vendor/assets/javascripts/zip/z-worker';

import { SFItem } from 'standard-file-js';

// Set the app domain before starting the app
SFItem.AppDomain = 'org.standardnotes.sn';

// entry point
// eslint-disable-next-line import/first
import './app/app';
