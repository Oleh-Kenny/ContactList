import React from "react";
import "./contactitem.css";
import { render } from "react-dom";
class ContactItem extends React.Component {
  state = {
    avatar: this.props.avatar,
    description: this.props.description,
    name: this.props.name,
    gender: this.props.gender,
    facebbok: this.props.facebbok,
    twitt: this.props.twitt,
    linked: this.props.linked,
    messs: this.props.messs,
    skyPe: this.props.skyPe,
    btnStatus: false,
    brdStat: false,
    starStat: this.props.favorite,
    starStat2: false,
    starStat3: false,
    starStat4: false,
    starStat5: false
  };
  RandomA = () => {
    const newAv = Math.floor(Math.random() * 100);
    this.setState({ avatar: newAv, btnStatus: !this.state.btnStatus });
  };
  setStarAct = () => {
    this.setState({
      starStat: true
    });
  };
  setStarNoAct = () => {
    this.setState({
      starStat: false
    });
  };

  bordStylesAct = () => {
    this.setState({
      brdStat: true
    });
  };
  bordStylesNoAct = () => {
    this.setState({
      brdStat: false
    });
  };
  Cool = () => {
    this.setState({
      starStat: !this.state.starStat
    });
  };
  Cool2 = () => {
    this.setState({
      starStat2: !this.state.starStat2
    });
  };
  Cool3 = () => {
    this.setState({
      starStat3: !this.state.starStat3
    });
  };
  Cool4 = () => {
    this.setState({
      starStat4: !this.state.starStat4
    });
  };
  Cool5 = () => {
    this.setState({
      starStat5: !this.state.starStat5
    });
  };

  render() {
    const {
      avatar,
      description,
      name,
      gender,
      facebbok,
      twitt,
      linked,
      messs,
      skyPe
    } = this.state;
    let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    let fb = `https://www.facebook.com/${facebbok}`;
    let tw = `https://twitter.com/${twitt}`;
    let lin = `https://www.linkedin.com/${linked}`;
    let sky = `https://www.skype.com/${skyPe}`;
    let me = `https://kyivstar.ua/${messs}`;
    let btnStyles = "btn btn-outline-primary true col-2 offset-2";
    let border = "panel p-t-10";
    let starStat = "color";
    let starStat2 = "color";
    let starStat3 = "color";
    let starStat4 = "color";
    let starStat5 = "color";

    if (this.state.btnStatus) {
      btnStyles = " btn btn-danger true col-2 offset-2";
    }

    if (this.state.brdStat) {
      border = "panel p-t-10 brdStat";
    }
    if (this.state.starStat) {
      starStat = "stars-colored";
    }
    if (this.state.starStat2) {
      starStat2 = "stars-colored";
    }
    if (this.state.starStat3) {
      starStat3 = "stars-colored";
    }
    if (this.state.starStat4) {
      starStat4 = "stars-colored";
    }
    if (this.state.starStat5) {
      starStat5 = "stars-colored";
    }

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-7 ">
          <div
            className={border}
            onMouseEnter={this.bordStylesAct}
            onMouseLeave={this.bordStylesNoAct}
          >
            <div className="panel-body p-t-10">
              <div className="media-main">
                <a className="pull-left" href="#">
                  <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                </a>
                <div className="pull-right btn-group-sm butt">
                  <a
                    href="#"
                    className="btn btn-success tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-pencil"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                    onClick={this.props.onDelete}
                  >
                    <i className="fa fa-close"></i>
                  </a>
                </div>
                <div className="info">
                  <h4>{name}</h4>
                  <p className="text-muted">{description}</p>
                </div>
              </div>
              <div className="clearfix">
                <hr />
                <ul className="social-links list-inline p-b-10 col-5">
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href={fb}
                      target="_blank"
                      data-original-title="Facebook"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href={tw}
                      target="_blank"
                      data-original-title="Twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href={lin}
                      target="_blank"
                      data-original-title="LinkedIn"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href={sky}
                      target="_blank"
                      data-original-title="Skype"
                    >
                      <i class="fa fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      class="tooltips"
                      href={me}
                      target="_blank"
                      data-original-title="Message"
                    >
                      <i class="fa fa-envelope-o"></i>
                    </a>
                  </li>
                </ul>
                <span onClick={this.Cool} className={starStat}>
                  <i className="fa fa-star"></i>
                </span>
                <span onClick={this.Cool2} className={starStat2}>
                  <i className="fa fa-star"></i>
                </span>
                <span onClick={this.Cool3} className={starStat3}>
                  <i className="fa fa-star"></i>
                </span>
                <span onClick={this.Cool4} className={starStat4}>
                  <i className="fa fa-star"></i>
                </span>
                <span onClick={this.Cool5} className={starStat5}>
                  <i className="fa fa-star"></i>
                </span>

                <button className={btnStyles} onClick={this.RandomA}>
                  Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactItem;
