import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projectMap = projects => projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var rProjects = projectMap(this.props.data.projects.filter(project => project.type === "research"))
      var mlProjects = projectMap(this.props.data.projects.filter(project => project.type === "ml"))
      var sweProjects = projectMap(this.props.data.projects.filter(project => project.type === "swe"))
    }

    return (
      <section id="portfolio">

      <div className="row">

      <div className="twelve columns collapsed">

        <h1>Research Papers</h1>

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {rProjects}
        </div>
      </div>
      </div>
      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Machine Learning Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {mlProjects}
            </div>
          </div>
      </div>
      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Software Engineering Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {sweProjects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
