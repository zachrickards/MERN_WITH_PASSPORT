import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LocationEl = () => {
  return (
    <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Location</h6>
                <FontAwesomeIcon icon="map-marker" />
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#location"
                  role="button"
                  aria-expanded="false"
                  aria-controls="location"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="location">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location1"
                    />
                    <label class="custom-control-label" for="location1">
                      North Carolina
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location2"
                    />
                    <label class="custom-control-label" for="location2">
                      Florida
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location3"
                    />
                    <label class="custom-control-label" for="location3">
                      Russia
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location4"
                    />
                    <label class="custom-control-label" for="location4">
                      Hawaii
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location5"
                    />
                    <label class="custom-control-label" for="location5">
                      Canada
                    </label>
                  </div>
                </div>
              </div>
            </div>
  )  
};

export default LocationEl;
