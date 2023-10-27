import React, { useEffect } from "react";
import "../styles/educationStyles.scss";
import { useSelector, useDispatch } from "react-redux";

import { dataRequest } from "../redux/action";
const Education = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selfDetails.data.data);

  useEffect(() => {
    dispatch(dataRequest());
  }, [dispatch]);

  return (
    <div className="edu-container" id="education">
      <div className="title">EDUCATION</div>
      <div className="education">
        {data &&
          data.education.map((item, index) => (
            <>
              {" "}
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div className="flip-card-front">{item.name}</div>
                  <div className=" flip-card-back">
                    <span>
                      {" "}
                      <label htmlFor="">
                        {item.college.toLowerCase() !== "vvv school"
                          ? "College Name: "
                          : "School Name: "}
                      </label>
                      {item.college}
                    </span>
                    <span>
                      <label>Percentage: </label> {item.percentage}%
                    </span>
                    <span>
                      {" "}
                      <label htmlFor="">
                        {item.specialization && "Specialization: "}{" "}
                      </label>
                      {item.specialization}
                    </span>

                    <span>
                      {" "}
                      <label htmlFor="">Year: </label>
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Education;
