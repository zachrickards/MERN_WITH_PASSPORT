import React, { useState } from 'react';

const AgeEl = () => {
  const [activeAgeRange, setActiveAgeRange] = useState([
    // {
    //   range: "19-24",
    //   isChecked: true,
    // },
    // {
    //   range: "25-30",
    //   isChecked: false,
    // },
    // {
    //   range: "31-35",
    //   isChecked: false,
    // },
    // {
    //   range: "36-40",
    //   isChecked: false,
    // },
    // {
    //   range: "41-50",
    //   isChecked: false,
    // }
    true,
    false,
    false,
    false,
    false,
  ]);

  const ageRanges = ["19-24", "25-30", "31-35", "36-40", "41-50"];
  const handleAgeCheck = (position) => {
    // console.log(activeAgeRange)
    const newCheckState = activeAgeRange.map((item, index) =>
      index === position ? !item : item
    );
    console.log(newCheckState);
    setActiveAgeRange(newCheckState);
  };
  const AgeRangeCheckBox = (props) => {
    return (
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id={props.index}
          checked={props.isChecked}
          onChange={() => handleAgeCheck(props.index)}
        />
        <label class="custom-control-label" for={props.index}>
          {props.range}
        </label>
      </div>
    );
  };

  return (
     <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Age Range</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#age"
                  role="button"
                  aria-expanded="false"
                  aria-controls="age"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="age">
                <div class="widget-content">
                  {activeAgeRange.map((item, index) => (
                    <AgeRangeCheckBox
                      range={ageRanges[index]}
                      index={index}
                      isChecked={item}
                    />
                  ))}

                  {/* <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age1"
                    />
                    <label class="custom-control-label" for="age1">
                      19-24
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age2"
                    />
                    <label class="custom-control-label" for="age2">
                      25-30
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age3"
                    />
                    <label class="custom-control-label" for="age3">
                      31-35
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age4"
                      checked={isChecked}
                      onChange={() => handleAgeCheck()}
                    />
                    <label class="custom-control-label" for="age4">
                      36-40
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age5"
                    />
                    <label class="custom-control-label" for="age5">
                      41-50
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
  )  
};

export default AgeEl;
