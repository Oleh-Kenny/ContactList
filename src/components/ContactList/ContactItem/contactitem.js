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
    skyPe: this.props.skyPe
  };
  RandomA = () => {
    const newAv = Math.floor(Math.random() * 100);
    this.setState({ avatar: newAv });
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
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-7 ">
          <div className="panel">
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
                <button
                  className="btn btn-outline-primary true col-2 offset-4"
                  onClick={this.RandomA}
                >
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
