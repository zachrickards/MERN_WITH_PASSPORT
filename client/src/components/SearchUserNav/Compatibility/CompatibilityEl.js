import React from 'react';

const CompatibilityEl = () => {
  return (
    <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Compatibility Percentage</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#Compatability"
                  role="button"
                  aria-expanded="false"
                  aria-controls="Compatability"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="Compatability">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability1"
                    />
                    <label class="custom-control-label" for="Compatability1">
                      25%-45%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability2"
                    />
                    <label class="custom-control-label" for="Compatability2">
                      45%-60%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability3"
                    />
                    <label class="custom-control-label" for="Compatability3">
                      60%-75%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability4"
                    />
                    <label class="custom-control-label" for="Compatability4">
                      75%-90%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability5"
                    />
                    <label class="custom-control-label" for="Compatability5">
                      90%-100%
                    </label>
                  </div>
                </div>
              </div>
            </div> 
  )  
};

export default CompatibilityEl;
