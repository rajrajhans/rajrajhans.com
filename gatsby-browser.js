// custom typefaces


import "prismjs/themes/prism.css"
import "./src/styles/global.scss"
import  "./node_modules/font-awesome/css/font-awesome.css"

import {isEqual} from 'lodash'
import { Helmet } from "react-helmet"

// This is a fix for "InternalError: Too much recursion". React Helmet uses deep-equal and sometimes crashes on circular objects. So, I'm replacing it with lodash's isEqual, which provides protection again circular references.

Helmet.prototype.shouldComponentUpdate = function(nextProps) {
  return !isEqual(this.props, nextProps)
}
