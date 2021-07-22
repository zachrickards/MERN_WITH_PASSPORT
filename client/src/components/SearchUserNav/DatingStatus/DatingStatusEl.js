import React from 'react';

const DatingStatusEl = () => {
  return (
    <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Dating Status</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#datingstatus"
                  role="button"
                  aria-expanded="false"
                  aria-controls="datingstatus"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="datingstatus">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox fulltime-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus1"
                    />
                    <label class="custom-control-label" for="datingstatus1">
                      Just Friends
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox parttime-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus2"
                    />
                    <label class="custom-control-label" for="datingstatus2">
                      Nothing Serious
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox freelance-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus3"
                    />
                    <label class="custom-control-label" for="datingstatus3">
                      Casual Dating
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox temporary-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus4"
                    />
                    <label class="custom-control-label" for="datingstatus4">
                      Serious Committment
                    </label>
                  </div>
                </div>
              </div>
            </div>
  )  
};

export default DatingStatusEl;
