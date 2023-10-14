import React,{useEffect,useState} from 'react';

const WidgetStats = () => {



  const [countparent, setCountparent] = useState(null);
  const [countst, setCountst] = useState(null);
  const [countmt, setCountmt] = useState(null);
  const [countth, setCountth] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/countparent')
      .then(response => response.json())
      .then(data => {
        // Access the count value from the response
        const count = data.count;
        // Set the count value in the component's state
        setCountparent(count);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }, []);




  useEffect(() => {
    fetch('http://localhost:8000/api/countstudent')
      .then(response => response.json())
      .then(data => {
        // Access the count value from the response
        const count = data.count;
        // Set the count value in the component's state
        setCountst(count);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }, []);
  

  useEffect(() => {
    fetch('http://localhost:8000/api/countmatieres')
      .then(response => response.json())
      .then(data => {
        // Access the count value from the response
        const count = data.count;
        // Set the count value in the component's state
        setCountmt(count);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }, []);
 

  useEffect(() => {
    fetch('http://localhost:8000/api/countThcer')
      .then(response => response.json())
      .then(data => {
        // Access the count value from the response
        const count = data.count;
        // Set the count value in the component's state
        setCountth(count);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }, []);







  
  return (
    <>
      <div className="col-xl-3 col-xxl-3 col-sm-6">
        <div className="widget-stat card bg-primary">
          <div className="card-body">
            <div className="media">
              <span className="mr-3">
                <i className="la la-users"></i>
              </span>
              <div className="media-body text-white">
                <p className="mb-1">Total d'étudiants</p>


                {countst !== null ? (
                  <h3 className="text-white">{countst}</h3>
                ) : (
                  <h3 className="text-white">Loding...</h3>
                )}
                
                <div className="progress mb-2 bg-white">
                  <div className="progress-bar progress-animated bg-light" style={{ width: `${countst}%`}}></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-xxl-3 col-sm-6">
        <div className="widget-stat card bg-warning">
          <div className="card-body">
            <div className="media">
              <span className="mr-3">
                <i className="la la-user"></i>
              </span>
              <div className="media-body text-white">
                <p className="mb-1">Total Professeur</p>

                        {countth !== null ? (
                <h3 className="text-white">{countst}</h3>
              ) : (
                <h3 className="text-white">Loding...</h3>
              )}

              
                <div className="progress mb-2 bg-white">
                  <div className="progress-bar progress-animated bg-light" style={{ width: `${countth}%`}}></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-xxl-3 col-sm-6">
        <div className="widget-stat card bg-secondary">
          <div className="card-body">
            <div className="media">
              <span className="mr-3">
                <i className="la la-graduation-cap"></i>
              </span>
              <div className="media-body text-white">
                <p className="mb-1">Total Matiéres</p>

                              {countmt !== null ? (
                      <h3 className="text-white">{countmt}</h3>
                    ) : (
                      <h3 className="text-white">Loding...</h3>
                    )}

           
                <div className="progress mb-2 bg-white">
                  <div className="progress-bar progress-animated bg-light" style={{ width: `${countmt}%`}}></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-xxl-3 col-sm-6">
        <div className="widget-stat card bg-danger">
          <div className="card-body">
            <div className="media">
              <span className="mr-3">
              <i className="la la-user"></i>
              </span>
              <div className="media-body text-white">
                <p className="mb-1">Total Parent</p>



                {countparent !== null ? (
         <h3 className="text-white">{countparent}</h3>
      ) : (
        <h3 className="text-white">Loding...</h3>
      )}
               
                <div className="progress mb-2 bg-white">
                  <div className="progress-bar progress-animated bg-light"style={{ width: `${countparent}%`}}></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetStats;
