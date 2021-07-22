import React from 'react';

const GenderEl = () => {
  return (
    <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Gender</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#gender"
                  role="button"
                  aria-expanded="false"
                  aria-controls="gender"
                >
                  <i class="fas fa-chevron-down"></i>
                </a>
              </div>
              <div class="collapse show" id="gender">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="gender1"
                    />
                    <label class="custom-control-label" for="gender1">
                      Male
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="gender2"
                    />
                    <label class="custom-control-label" for="gender2">
                      Female
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="gender3"
                    />
                    <label class="custom-control-label" for="gender3">
                      Non-Binary
                    </label>
                  </div>
                </div>
              </div>
            </div>
  )  
};

export default GenderEl;
