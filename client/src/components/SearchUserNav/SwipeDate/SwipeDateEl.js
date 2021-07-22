import React from 'react';

const SwipeDateEl = () => {
  return (
    <div class="widget">
              <div class="widget-title widget-collapse">
                <h6 swipeDateTitle="Swipe Date">Swipe Date</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#dateposted"
                  role="button"
                  aria-expanded="false"
                  aria-controls="dateposted"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div id="content" class="collapse show" id="dateposted">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted1"
                    />
                    <label class="custom-control-label" for="dateposted1">
                      Last hour
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted2"
                    />
                    <label class="custom-control-label" for="dateposted2">
                      Last 24 hour
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted3"
                    />
                    <label class="custom-control-label" for="dateposted3">
                      Last 7 days
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted4"
                    />
                    <label class="custom-control-label" for="dateposted4">
                      Last 14 days
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted5"
                    />
                    <label class="custom-control-label" for="dateposted5">
                      Last 30 days
                    </label>
                  </div>
                </div>
              </div>
            </div>
  )  
};

export default SwipeDateEl;
