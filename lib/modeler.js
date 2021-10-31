/**
 * @license MIT, imicros.de (c) 2021 Andreas Leinen
 *
 */
"use strict";

import BpmnModeler from "bpmn-js/lib/Modeler";

// const BpmnModeler = require("bpmn-js/lib/Modeler");

class Modeler {

    constructor (options) {
 
        return new BpmnModeler(options);
        // return options;
     
    }
    
}

export { Modeler };

