import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthData } from '../store/actionCreators';

function MyProject() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSkill);

  useEffect(() => {
    dispatch(fecthData());
  }, []);

  return (
    <div id="my-project">
      <div className="projectHead">
        <div>
          <p>==================================</p>
        </div>
        <div className="project-judul">
          <h4>That is some My Projects</h4>
        </div>
        <div>
          <p>==================================</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {data.map((el) => {
          return (
            <div className="col-sm-4">
              <a href={el.url} target="blank" id="card-text">
                <div
                  className="project-card shadow p-3 mb-5 bg-body rounded"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={el.img}
                    className="card-img-top"
                    style={{ width: '200px', height: '200px' }}
                  />
                  <div
                    className="card-body"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <h5 className="card-title" style={{ color: 'black' }}>
                      {el.judul}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        fontSize: '12px',
                        color: 'black',
                        textAlign: 'center',
                      }}
                    >
                      {el.tech}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyProject;
