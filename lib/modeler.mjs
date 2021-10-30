/**
 * @license MIT, imicros.de (c) 2021 Andreas Leinen
 *
 */
"use strict";

import BpmnModeler from "bpmn-js/lib/Modeler";

class Modeler {
 
    constructor (options) {
        this.modeler = new BpmnModeler(options);
        return this.modeler;
    }
 
}
 
module.exports = Modeler;