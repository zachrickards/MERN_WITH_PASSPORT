import React from 'react'

function SortBy() {
    return (
        <div class="job-filter mb-4 d-sm-flex align-items-center">
            <div class="job-shortby ml-sm-auto d-flex align-items-center">
              <form class="form-inline">
                <div class="form-group mb-0">
                  <label class="justify-content-start mr-2">Sort by :</label>
                  <div class="short-by">
                    <select
                      class="form-control basic-select select2-hidden-accessible"
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="3">Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
    )
}

export default SortBy
